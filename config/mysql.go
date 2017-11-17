package config

import (
	"bytes"
	"database/sql"
	"fmt"
	"log"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

// Mysql Mysql数据源
type Mysql struct {
	Session *sql.DB
}

// NewMysql 获取mysql数据库连接对象
func NewMysql(c *MysqlConfig) (*Mysql, error) {
	m := new(Mysql)
	d := fmt.Sprintf(
		"%s:%s@tcp(%s:3306)/%s?parseTime=true&charset=%s",
		c.Current().Username,
		c.Current().Password,
		c.Current().Host,
		c.Current().Database,
		c.Current().Encoding,
	)
	db, err := sql.Open("mysql", d)
	if err != nil {
		return nil, fmt.Errorf("[Database connect error] %v", err)
	}

	m.Session = db
	m.Session.SetMaxOpenConns(c.Current().MaxConns)
	m.Session.SetMaxIdleConns(c.Current().IdleConns)
	m.Session.Ping()
	log.Println("Mysql DB connected")
	return m, nil
}

//BuildInsert SQL Insert语句生成, eg. INSERT INTO xxx (`a`) VALUES (1), (2)
func (m *Mysql) BuildInsert(table string, cols []string, records int) string {
	buf := bytes.Buffer{}
	buf.WriteString("INSERT INTO ")
	buf.WriteString(m.QuoteIdent(table))

	placeholderBuf := new(bytes.Buffer)
	placeholderBuf.WriteString("(")
	buf.WriteString(" (")
	for i, col := range cols {
		if i > 0 {
			buf.WriteString(",")
			placeholderBuf.WriteString(",")
		}
		buf.WriteString(m.QuoteIdent(col))
		placeholderBuf.WriteString(m.placeholder())
	}
	buf.WriteString(") VALUES ")
	placeholderBuf.WriteString(")")
	buf.WriteString(placeholderBuf.String())

	placeholderStr := placeholderBuf.String()
	for i := 1; i < records; i++ {
		buf.WriteString(",")
		buf.WriteString(placeholderStr)
	}
	return buf.String()
}

//SaveOne 单行数据插入
func (m *Mysql) SaveOne(sql string, args ...interface{}) (int64, error) {
	stmt, _ := m.Session.Prepare(sql)
	res, err := stmt.Exec(args...)
	if err != nil {
		return 0, err
	}
	lastID, err := res.LastInsertId()
	if err != nil {
		return 0, err
	}
	return lastID, nil
}

// TxExec 事务执行方法
func (m *Mysql) TxExec(f func(tx *sql.Tx) error) (err error) {
	//开启事务
	tx, err := m.Session.Begin()
	if err != nil {
		return err
	}

	err = f(tx)

	defer tx.Rollback()
	tx.Commit()
	return
}

// SaveTx 带事务的数据插入
func (m *Mysql) SaveTx(tx *sql.Tx, sql string, args ...interface{}) (id int64, err error) {
	_, id, err = m.execTx(tx, sql, args...)
	return
}

//Update 单行数据更新
func (m *Mysql) Update(sql string, args ...interface{}) (int64, error) {
	stmt, err := m.Session.Prepare(sql)
	if err != nil {
		return 0, err
	}
	res, err := stmt.Exec(args...)
	if err != nil {
		return 0, err
	}
	num, err := res.RowsAffected()
	if err != nil {
		return 0, err
	}
	return num, nil
}

//UpdateTx 单行数据更新
func (m *Mysql) UpdateTx(tx *sql.Tx, sql string, args ...interface{}) (eff int64, err error) {
	eff, _, err = m.execTx(tx, sql, args...)
	return
}

func (m *Mysql) execTx(tx *sql.Tx, sql string, args ...interface{}) (int64, int64, error) {
	stmt, err := tx.Prepare(sql)
	defer stmt.Close()
	if err != nil {
		return 0, 0, err
	}

	res, err := stmt.Exec(args...)
	if err != nil {
		return 0, 0, err
	}

	eff, err := res.RowsAffected()
	if err != nil {
		return 0, 0, err
	}

	lastID, err := res.LastInsertId()
	if err != nil {
		return 0, 0, err
	}

	return eff, lastID, nil
}

//GetOne 获取单行数据，返回所有数据类型为string
func (m *Mysql) GetOne(rows *sql.Rows) []string {
	if rows == nil {
		return nil
	}
	cols, _ := rows.Columns()
	rawResult := make([][]byte, len(cols))
	result := make([]string, len(cols))
	dest := make([]interface{}, len(cols))
	for i := range rawResult {
		dest[i] = &rawResult[i]
	}
	if rows.Next() {
		err := rows.Scan(dest...)
		if err == nil {
			for i, raw := range rawResult {
				if raw == nil {
					result[i] = ""
				} else {
					result[i] = string(raw)
				}
			}
		}
	} else {
		return nil
	}
	return result
}

//GetOneMap 获取一行返回map
func (m *Mysql) GetOneMap(rows *sql.Rows) map[string]string {
	if rows == nil {
		return nil
	}
	cols, _ := rows.Columns()
	rawResult := make([][]byte, len(cols))
	result := make(map[string]string, len(cols))
	dest := make([]interface{}, len(cols))
	for i := range rawResult {
		dest[i] = &rawResult[i]
	}
	if rows.Next() {
		err := rows.Scan(dest...)
		if err == nil {
			for i, raw := range rawResult {
				if raw == nil {
					result[cols[i]] = ""
				} else {
					result[cols[i]] = string(raw)
				}
			}
		}
	} else {
		return nil
	}
	return result
}

//QuoteIdent sql语句字段引号 eg.`a`
func (m *Mysql) QuoteIdent(s string) string {
	return m.quoteIdent(s, "`")
}

//Placeholder sql语句预处理值占位符
func (m *Mysql) placeholder() string {
	return "?"
}

func (m *Mysql) quoteIdent(s, quote string) string {
	part := strings.SplitN(s, ".", 2)
	if len(part) == 2 {
		return m.quoteIdent(part[0], quote) + "." + m.quoteIdent(part[1], quote)
	}
	return quote + s + quote
}

// Scanner 获取字段方法
type Scanner func(rs *sql.Rows) error

// QueryMore 查询多行
func (m *Mysql) QueryMore(query string, f Scanner, args ...interface{}) error {
	rs, err := m.Session.Query(query, args...)
	if err != nil {
		return err
	}
	defer rs.Close()

	return f(rs)
}

// QueryMorePrepare 查询多行
func (m *Mysql) QueryMorePrepare(query string, f Scanner, args ...interface{}) error {
	stmt, err := m.Session.Prepare(query)
	if err != nil {
		return err
	}

	defer stmt.Close()

	rs, err := stmt.Query(args...)
	if err != nil {
		return err
	}
	defer rs.Close()

	return f(rs)
}

// ConvString 转换sql.NullString
func (m *Mysql) ConvString(str sql.NullString) sql.NullString {
	if !str.Valid {
		str.String, str.Valid = "", true
	}
	return str
}

// ConvInt64 转换sql.NullInt64
func (m *Mysql) ConvInt64(i64 sql.NullInt64) sql.NullInt64 {
	if !i64.Valid {
		i64.Int64, i64.Valid = 0, true
	}
	return i64
}

// ConvFloat64 转换sql.NullFloat64
func (m *Mysql) ConvFloat64(f64 sql.NullFloat64) sql.NullFloat64 {
	if !f64.Valid {
		f64.Float64, f64.Valid = 0.0, true
	}
	return f64
}

// ConvBool 转换sql.NullBool
func (m *Mysql) ConvBool(bo sql.NullBool) sql.NullBool {
	if !bo.Valid {
		bo.Bool, bo.Valid = false, true
	}
	return bo
}

// SafeString 转换sql.NullString
func (m *Mysql) SafeString(str sql.NullString) string {
	if !str.Valid {
		return ""
	}
	return str.String
}

// SafeInt64 转换sql.NullInt64
func (m *Mysql) SafeInt64(i64 sql.NullInt64) int64 {
	if !i64.Valid {
		return 0
	}
	return i64.Int64
}

// SafeFloat64 转换sql.NullFloat64
func (m *Mysql) SafeFloat64(f64 sql.NullFloat64) float64 {
	if !f64.Valid {
		return 0.0
	}
	return f64.Float64
}

// SafeBool 转换sql.NullBool
func (m *Mysql) SafeBool(bo sql.NullBool) bool {
	if !bo.Valid {
		return false
	}
	return bo.Bool
}
