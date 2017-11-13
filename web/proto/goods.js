/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.goods = (function() {

    /**
     * Namespace goods.
     * @exports goods
     * @namespace
     */
    var goods = {};

    goods.NewGoodsResult = (function() {

        /**
         * Properties of a NewGoodsResult.
         * @memberof goods
         * @interface INewGoodsResult
         * @property {Array.<goods.IGoods>} [goodses] NewGoodsResult goodses
         */

        /**
         * Constructs a new NewGoodsResult.
         * @memberof goods
         * @classdesc Represents a NewGoodsResult.
         * @constructor
         * @param {goods.INewGoodsResult=} [properties] Properties to set
         */
        function NewGoodsResult(properties) {
            this.goodses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewGoodsResult goodses.
         * @member {Array.<goods.IGoods>}goodses
         * @memberof goods.NewGoodsResult
         * @instance
         */
        NewGoodsResult.prototype.goodses = $util.emptyArray;

        /**
         * Creates a new NewGoodsResult instance using the specified properties.
         * @function create
         * @memberof goods.NewGoodsResult
         * @static
         * @param {goods.INewGoodsResult=} [properties] Properties to set
         * @returns {goods.NewGoodsResult} NewGoodsResult instance
         */
        NewGoodsResult.create = function create(properties) {
            return new NewGoodsResult(properties);
        };

        /**
         * Encodes the specified NewGoodsResult message. Does not implicitly {@link goods.NewGoodsResult.verify|verify} messages.
         * @function encode
         * @memberof goods.NewGoodsResult
         * @static
         * @param {goods.INewGoodsResult} message NewGoodsResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewGoodsResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goodses != null && message.goodses.length)
                for (var i = 0; i < message.goodses.length; ++i)
                    $root.goods.Goods.encode(message.goodses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NewGoodsResult message, length delimited. Does not implicitly {@link goods.NewGoodsResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.NewGoodsResult
         * @static
         * @param {goods.INewGoodsResult} message NewGoodsResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewGoodsResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewGoodsResult message from the specified reader or buffer.
         * @function decode
         * @memberof goods.NewGoodsResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.NewGoodsResult} NewGoodsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewGoodsResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.NewGoodsResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.goodses && message.goodses.length))
                        message.goodses = [];
                    message.goodses.push($root.goods.Goods.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewGoodsResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.NewGoodsResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.NewGoodsResult} NewGoodsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewGoodsResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewGoodsResult message.
         * @function verify
         * @memberof goods.NewGoodsResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewGoodsResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goodses != null && message.hasOwnProperty("goodses")) {
                if (!Array.isArray(message.goodses))
                    return "goodses: array expected";
                for (var i = 0; i < message.goodses.length; ++i) {
                    var error = $root.goods.Goods.verify(message.goodses[i]);
                    if (error)
                        return "goodses." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NewGoodsResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.NewGoodsResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.NewGoodsResult} NewGoodsResult
         */
        NewGoodsResult.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.NewGoodsResult)
                return object;
            var message = new $root.goods.NewGoodsResult();
            if (object.goodses) {
                if (!Array.isArray(object.goodses))
                    throw TypeError(".goods.NewGoodsResult.goodses: array expected");
                message.goodses = [];
                for (var i = 0; i < object.goodses.length; ++i) {
                    if (typeof object.goodses[i] !== "object")
                        throw TypeError(".goods.NewGoodsResult.goodses: object expected");
                    message.goodses[i] = $root.goods.Goods.fromObject(object.goodses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NewGoodsResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.NewGoodsResult
         * @static
         * @param {goods.NewGoodsResult} message NewGoodsResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewGoodsResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.goodses = [];
            if (message.goodses && message.goodses.length) {
                object.goodses = [];
                for (var j = 0; j < message.goodses.length; ++j)
                    object.goodses[j] = $root.goods.Goods.toObject(message.goodses[j], options);
            }
            return object;
        };

        /**
         * Converts this NewGoodsResult to JSON.
         * @function toJSON
         * @memberof goods.NewGoodsResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewGoodsResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewGoodsResult;
    })();

    goods.Goods = (function() {

        /**
         * Properties of a Goods.
         * @memberof goods
         * @interface IGoods
         * @property {number} [ID] Goods ID
         * @property {number} [catID] Goods catID
         * @property {number} [extendCatID] Goods extendCatID
         * @property {string} [goodsSN] Goods goodsSN
         * @property {string} [goodsName] Goods goodsName
         * @property {number} [clickCount] Goods clickCount
         * @property {number} [brandID] Goods brandID
         * @property {number} [storeCount] Goods storeCount
         * @property {number} [commentCount] Goods commentCount
         * @property {number} [weight] Goods weight
         * @property {number} [marketPrice] Goods marketPrice
         * @property {number} [shopPrice] Goods shopPrice
         * @property {number} [costPrice] Goods costPrice
         * @property {string} [priceLadder] Goods priceLadder
         * @property {string} [keywords] Goods keywords
         * @property {string} [goodsRemark] Goods goodsRemark
         * @property {string} [goodsContent] Goods goodsContent
         * @property {string} [originalImg] Goods originalImg
         * @property {boolean} [isReal] Goods isReal
         * @property {boolean} [isOnSale] Goods isOnSale
         * @property {number} [salesSum] Goods salesSum
         */

        /**
         * Constructs a new Goods.
         * @memberof goods
         * @classdesc Represents a Goods.
         * @constructor
         * @param {goods.IGoods=} [properties] Properties to set
         */
        function Goods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Goods ID.
         * @member {number}ID
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.ID = 0;

        /**
         * Goods catID.
         * @member {number}catID
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.catID = 0;

        /**
         * Goods extendCatID.
         * @member {number}extendCatID
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.extendCatID = 0;

        /**
         * Goods goodsSN.
         * @member {string}goodsSN
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.goodsSN = "";

        /**
         * Goods goodsName.
         * @member {string}goodsName
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.goodsName = "";

        /**
         * Goods clickCount.
         * @member {number}clickCount
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.clickCount = 0;

        /**
         * Goods brandID.
         * @member {number}brandID
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.brandID = 0;

        /**
         * Goods storeCount.
         * @member {number}storeCount
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.storeCount = 0;

        /**
         * Goods commentCount.
         * @member {number}commentCount
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.commentCount = 0;

        /**
         * Goods weight.
         * @member {number}weight
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.weight = 0;

        /**
         * Goods marketPrice.
         * @member {number}marketPrice
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.marketPrice = 0;

        /**
         * Goods shopPrice.
         * @member {number}shopPrice
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.shopPrice = 0;

        /**
         * Goods costPrice.
         * @member {number}costPrice
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.costPrice = 0;

        /**
         * Goods priceLadder.
         * @member {string}priceLadder
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.priceLadder = "";

        /**
         * Goods keywords.
         * @member {string}keywords
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.keywords = "";

        /**
         * Goods goodsRemark.
         * @member {string}goodsRemark
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.goodsRemark = "";

        /**
         * Goods goodsContent.
         * @member {string}goodsContent
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.goodsContent = "";

        /**
         * Goods originalImg.
         * @member {string}originalImg
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.originalImg = "";

        /**
         * Goods isReal.
         * @member {boolean}isReal
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.isReal = false;

        /**
         * Goods isOnSale.
         * @member {boolean}isOnSale
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.isOnSale = false;

        /**
         * Goods salesSum.
         * @member {number}salesSum
         * @memberof goods.Goods
         * @instance
         */
        Goods.prototype.salesSum = 0;

        /**
         * Creates a new Goods instance using the specified properties.
         * @function create
         * @memberof goods.Goods
         * @static
         * @param {goods.IGoods=} [properties] Properties to set
         * @returns {goods.Goods} Goods instance
         */
        Goods.create = function create(properties) {
            return new Goods(properties);
        };

        /**
         * Encodes the specified Goods message. Does not implicitly {@link goods.Goods.verify|verify} messages.
         * @function encode
         * @memberof goods.Goods
         * @static
         * @param {goods.IGoods} message Goods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Goods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.catID != null && message.hasOwnProperty("catID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.catID);
            if (message.extendCatID != null && message.hasOwnProperty("extendCatID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.extendCatID);
            if (message.goodsSN != null && message.hasOwnProperty("goodsSN"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.goodsSN);
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.goodsName);
            if (message.clickCount != null && message.hasOwnProperty("clickCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.clickCount);
            if (message.brandID != null && message.hasOwnProperty("brandID"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.brandID);
            if (message.storeCount != null && message.hasOwnProperty("storeCount"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.storeCount);
            if (message.commentCount != null && message.hasOwnProperty("commentCount"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.commentCount);
            if (message.weight != null && message.hasOwnProperty("weight"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.weight);
            if (message.marketPrice != null && message.hasOwnProperty("marketPrice"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.marketPrice);
            if (message.shopPrice != null && message.hasOwnProperty("shopPrice"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.shopPrice);
            if (message.costPrice != null && message.hasOwnProperty("costPrice"))
                writer.uint32(/* id 13, wireType 5 =*/109).float(message.costPrice);
            if (message.priceLadder != null && message.hasOwnProperty("priceLadder"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.priceLadder);
            if (message.keywords != null && message.hasOwnProperty("keywords"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.keywords);
            if (message.goodsRemark != null && message.hasOwnProperty("goodsRemark"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.goodsRemark);
            if (message.goodsContent != null && message.hasOwnProperty("goodsContent"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.goodsContent);
            if (message.originalImg != null && message.hasOwnProperty("originalImg"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.originalImg);
            if (message.isReal != null && message.hasOwnProperty("isReal"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.isReal);
            if (message.isOnSale != null && message.hasOwnProperty("isOnSale"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.isOnSale);
            if (message.salesSum != null && message.hasOwnProperty("salesSum"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.salesSum);
            return writer;
        };

        /**
         * Encodes the specified Goods message, length delimited. Does not implicitly {@link goods.Goods.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.Goods
         * @static
         * @param {goods.IGoods} message Goods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Goods.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Goods message from the specified reader or buffer.
         * @function decode
         * @memberof goods.Goods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.Goods} Goods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Goods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.Goods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.catID = reader.uint32();
                    break;
                case 3:
                    message.extendCatID = reader.uint32();
                    break;
                case 4:
                    message.goodsSN = reader.string();
                    break;
                case 5:
                    message.goodsName = reader.string();
                    break;
                case 6:
                    message.clickCount = reader.uint32();
                    break;
                case 7:
                    message.brandID = reader.uint32();
                    break;
                case 8:
                    message.storeCount = reader.uint32();
                    break;
                case 9:
                    message.commentCount = reader.uint32();
                    break;
                case 10:
                    message.weight = reader.uint32();
                    break;
                case 11:
                    message.marketPrice = reader.float();
                    break;
                case 12:
                    message.shopPrice = reader.float();
                    break;
                case 13:
                    message.costPrice = reader.float();
                    break;
                case 14:
                    message.priceLadder = reader.string();
                    break;
                case 15:
                    message.keywords = reader.string();
                    break;
                case 16:
                    message.goodsRemark = reader.string();
                    break;
                case 17:
                    message.goodsContent = reader.string();
                    break;
                case 18:
                    message.originalImg = reader.string();
                    break;
                case 19:
                    message.isReal = reader.bool();
                    break;
                case 20:
                    message.isOnSale = reader.bool();
                    break;
                case 21:
                    message.salesSum = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Goods message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.Goods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.Goods} Goods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Goods.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Goods message.
         * @function verify
         * @memberof goods.Goods
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Goods.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.catID != null && message.hasOwnProperty("catID"))
                if (!$util.isInteger(message.catID))
                    return "catID: integer expected";
            if (message.extendCatID != null && message.hasOwnProperty("extendCatID"))
                if (!$util.isInteger(message.extendCatID))
                    return "extendCatID: integer expected";
            if (message.goodsSN != null && message.hasOwnProperty("goodsSN"))
                if (!$util.isString(message.goodsSN))
                    return "goodsSN: string expected";
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                if (!$util.isString(message.goodsName))
                    return "goodsName: string expected";
            if (message.clickCount != null && message.hasOwnProperty("clickCount"))
                if (!$util.isInteger(message.clickCount))
                    return "clickCount: integer expected";
            if (message.brandID != null && message.hasOwnProperty("brandID"))
                if (!$util.isInteger(message.brandID))
                    return "brandID: integer expected";
            if (message.storeCount != null && message.hasOwnProperty("storeCount"))
                if (!$util.isInteger(message.storeCount))
                    return "storeCount: integer expected";
            if (message.commentCount != null && message.hasOwnProperty("commentCount"))
                if (!$util.isInteger(message.commentCount))
                    return "commentCount: integer expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.marketPrice != null && message.hasOwnProperty("marketPrice"))
                if (typeof message.marketPrice !== "number")
                    return "marketPrice: number expected";
            if (message.shopPrice != null && message.hasOwnProperty("shopPrice"))
                if (typeof message.shopPrice !== "number")
                    return "shopPrice: number expected";
            if (message.costPrice != null && message.hasOwnProperty("costPrice"))
                if (typeof message.costPrice !== "number")
                    return "costPrice: number expected";
            if (message.priceLadder != null && message.hasOwnProperty("priceLadder"))
                if (!$util.isString(message.priceLadder))
                    return "priceLadder: string expected";
            if (message.keywords != null && message.hasOwnProperty("keywords"))
                if (!$util.isString(message.keywords))
                    return "keywords: string expected";
            if (message.goodsRemark != null && message.hasOwnProperty("goodsRemark"))
                if (!$util.isString(message.goodsRemark))
                    return "goodsRemark: string expected";
            if (message.goodsContent != null && message.hasOwnProperty("goodsContent"))
                if (!$util.isString(message.goodsContent))
                    return "goodsContent: string expected";
            if (message.originalImg != null && message.hasOwnProperty("originalImg"))
                if (!$util.isString(message.originalImg))
                    return "originalImg: string expected";
            if (message.isReal != null && message.hasOwnProperty("isReal"))
                if (typeof message.isReal !== "boolean")
                    return "isReal: boolean expected";
            if (message.isOnSale != null && message.hasOwnProperty("isOnSale"))
                if (typeof message.isOnSale !== "boolean")
                    return "isOnSale: boolean expected";
            if (message.salesSum != null && message.hasOwnProperty("salesSum"))
                if (!$util.isInteger(message.salesSum))
                    return "salesSum: integer expected";
            return null;
        };

        /**
         * Creates a Goods message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.Goods
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.Goods} Goods
         */
        Goods.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.Goods)
                return object;
            var message = new $root.goods.Goods();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.catID != null)
                message.catID = object.catID >>> 0;
            if (object.extendCatID != null)
                message.extendCatID = object.extendCatID >>> 0;
            if (object.goodsSN != null)
                message.goodsSN = String(object.goodsSN);
            if (object.goodsName != null)
                message.goodsName = String(object.goodsName);
            if (object.clickCount != null)
                message.clickCount = object.clickCount >>> 0;
            if (object.brandID != null)
                message.brandID = object.brandID >>> 0;
            if (object.storeCount != null)
                message.storeCount = object.storeCount >>> 0;
            if (object.commentCount != null)
                message.commentCount = object.commentCount >>> 0;
            if (object.weight != null)
                message.weight = object.weight >>> 0;
            if (object.marketPrice != null)
                message.marketPrice = Number(object.marketPrice);
            if (object.shopPrice != null)
                message.shopPrice = Number(object.shopPrice);
            if (object.costPrice != null)
                message.costPrice = Number(object.costPrice);
            if (object.priceLadder != null)
                message.priceLadder = String(object.priceLadder);
            if (object.keywords != null)
                message.keywords = String(object.keywords);
            if (object.goodsRemark != null)
                message.goodsRemark = String(object.goodsRemark);
            if (object.goodsContent != null)
                message.goodsContent = String(object.goodsContent);
            if (object.originalImg != null)
                message.originalImg = String(object.originalImg);
            if (object.isReal != null)
                message.isReal = Boolean(object.isReal);
            if (object.isOnSale != null)
                message.isOnSale = Boolean(object.isOnSale);
            if (object.salesSum != null)
                message.salesSum = object.salesSum >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Goods message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.Goods
         * @static
         * @param {goods.Goods} message Goods
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Goods.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.catID = 0;
                object.extendCatID = 0;
                object.goodsSN = "";
                object.goodsName = "";
                object.clickCount = 0;
                object.brandID = 0;
                object.storeCount = 0;
                object.commentCount = 0;
                object.weight = 0;
                object.marketPrice = 0;
                object.shopPrice = 0;
                object.costPrice = 0;
                object.priceLadder = "";
                object.keywords = "";
                object.goodsRemark = "";
                object.goodsContent = "";
                object.originalImg = "";
                object.isReal = false;
                object.isOnSale = false;
                object.salesSum = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.catID != null && message.hasOwnProperty("catID"))
                object.catID = message.catID;
            if (message.extendCatID != null && message.hasOwnProperty("extendCatID"))
                object.extendCatID = message.extendCatID;
            if (message.goodsSN != null && message.hasOwnProperty("goodsSN"))
                object.goodsSN = message.goodsSN;
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                object.goodsName = message.goodsName;
            if (message.clickCount != null && message.hasOwnProperty("clickCount"))
                object.clickCount = message.clickCount;
            if (message.brandID != null && message.hasOwnProperty("brandID"))
                object.brandID = message.brandID;
            if (message.storeCount != null && message.hasOwnProperty("storeCount"))
                object.storeCount = message.storeCount;
            if (message.commentCount != null && message.hasOwnProperty("commentCount"))
                object.commentCount = message.commentCount;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.marketPrice != null && message.hasOwnProperty("marketPrice"))
                object.marketPrice = options.json && !isFinite(message.marketPrice) ? String(message.marketPrice) : message.marketPrice;
            if (message.shopPrice != null && message.hasOwnProperty("shopPrice"))
                object.shopPrice = options.json && !isFinite(message.shopPrice) ? String(message.shopPrice) : message.shopPrice;
            if (message.costPrice != null && message.hasOwnProperty("costPrice"))
                object.costPrice = options.json && !isFinite(message.costPrice) ? String(message.costPrice) : message.costPrice;
            if (message.priceLadder != null && message.hasOwnProperty("priceLadder"))
                object.priceLadder = message.priceLadder;
            if (message.keywords != null && message.hasOwnProperty("keywords"))
                object.keywords = message.keywords;
            if (message.goodsRemark != null && message.hasOwnProperty("goodsRemark"))
                object.goodsRemark = message.goodsRemark;
            if (message.goodsContent != null && message.hasOwnProperty("goodsContent"))
                object.goodsContent = message.goodsContent;
            if (message.originalImg != null && message.hasOwnProperty("originalImg"))
                object.originalImg = message.originalImg;
            if (message.isReal != null && message.hasOwnProperty("isReal"))
                object.isReal = message.isReal;
            if (message.isOnSale != null && message.hasOwnProperty("isOnSale"))
                object.isOnSale = message.isOnSale;
            if (message.salesSum != null && message.hasOwnProperty("salesSum"))
                object.salesSum = message.salesSum;
            return object;
        };

        /**
         * Converts this Goods to JSON.
         * @function toJSON
         * @memberof goods.Goods
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Goods.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Goods;
    })();

    goods.RecommendResult = (function() {

        /**
         * Properties of a RecommendResult.
         * @memberof goods
         * @interface IRecommendResult
         * @property {Array.<goods.IRecommend>} [recommend] RecommendResult recommend
         */

        /**
         * Constructs a new RecommendResult.
         * @memberof goods
         * @classdesc Represents a RecommendResult.
         * @constructor
         * @param {goods.IRecommendResult=} [properties] Properties to set
         */
        function RecommendResult(properties) {
            this.recommend = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecommendResult recommend.
         * @member {Array.<goods.IRecommend>}recommend
         * @memberof goods.RecommendResult
         * @instance
         */
        RecommendResult.prototype.recommend = $util.emptyArray;

        /**
         * Creates a new RecommendResult instance using the specified properties.
         * @function create
         * @memberof goods.RecommendResult
         * @static
         * @param {goods.IRecommendResult=} [properties] Properties to set
         * @returns {goods.RecommendResult} RecommendResult instance
         */
        RecommendResult.create = function create(properties) {
            return new RecommendResult(properties);
        };

        /**
         * Encodes the specified RecommendResult message. Does not implicitly {@link goods.RecommendResult.verify|verify} messages.
         * @function encode
         * @memberof goods.RecommendResult
         * @static
         * @param {goods.IRecommendResult} message RecommendResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecommendResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.recommend != null && message.recommend.length)
                for (var i = 0; i < message.recommend.length; ++i)
                    $root.goods.Recommend.encode(message.recommend[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RecommendResult message, length delimited. Does not implicitly {@link goods.RecommendResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.RecommendResult
         * @static
         * @param {goods.IRecommendResult} message RecommendResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecommendResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecommendResult message from the specified reader or buffer.
         * @function decode
         * @memberof goods.RecommendResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.RecommendResult} RecommendResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecommendResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.RecommendResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.recommend && message.recommend.length))
                        message.recommend = [];
                    message.recommend.push($root.goods.Recommend.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RecommendResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.RecommendResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.RecommendResult} RecommendResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecommendResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecommendResult message.
         * @function verify
         * @memberof goods.RecommendResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecommendResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.recommend != null && message.hasOwnProperty("recommend")) {
                if (!Array.isArray(message.recommend))
                    return "recommend: array expected";
                for (var i = 0; i < message.recommend.length; ++i) {
                    var error = $root.goods.Recommend.verify(message.recommend[i]);
                    if (error)
                        return "recommend." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RecommendResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.RecommendResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.RecommendResult} RecommendResult
         */
        RecommendResult.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.RecommendResult)
                return object;
            var message = new $root.goods.RecommendResult();
            if (object.recommend) {
                if (!Array.isArray(object.recommend))
                    throw TypeError(".goods.RecommendResult.recommend: array expected");
                message.recommend = [];
                for (var i = 0; i < object.recommend.length; ++i) {
                    if (typeof object.recommend[i] !== "object")
                        throw TypeError(".goods.RecommendResult.recommend: object expected");
                    message.recommend[i] = $root.goods.Recommend.fromObject(object.recommend[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RecommendResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.RecommendResult
         * @static
         * @param {goods.RecommendResult} message RecommendResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecommendResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recommend = [];
            if (message.recommend && message.recommend.length) {
                object.recommend = [];
                for (var j = 0; j < message.recommend.length; ++j)
                    object.recommend[j] = $root.goods.Recommend.toObject(message.recommend[j], options);
            }
            return object;
        };

        /**
         * Converts this RecommendResult to JSON.
         * @function toJSON
         * @memberof goods.RecommendResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecommendResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecommendResult;
    })();

    goods.Recommend = (function() {

        /**
         * Properties of a Recommend.
         * @memberof goods
         * @interface IRecommend
         * @property {number} [ID] Recommend ID
         * @property {number} [catID] Recommend catID
         * @property {string} [goodsName] Recommend goodsName
         * @property {number} [shopPrice] Recommend shopPrice
         */

        /**
         * Constructs a new Recommend.
         * @memberof goods
         * @classdesc Represents a Recommend.
         * @constructor
         * @param {goods.IRecommend=} [properties] Properties to set
         */
        function Recommend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Recommend ID.
         * @member {number}ID
         * @memberof goods.Recommend
         * @instance
         */
        Recommend.prototype.ID = 0;

        /**
         * Recommend catID.
         * @member {number}catID
         * @memberof goods.Recommend
         * @instance
         */
        Recommend.prototype.catID = 0;

        /**
         * Recommend goodsName.
         * @member {string}goodsName
         * @memberof goods.Recommend
         * @instance
         */
        Recommend.prototype.goodsName = "";

        /**
         * Recommend shopPrice.
         * @member {number}shopPrice
         * @memberof goods.Recommend
         * @instance
         */
        Recommend.prototype.shopPrice = 0;

        /**
         * Creates a new Recommend instance using the specified properties.
         * @function create
         * @memberof goods.Recommend
         * @static
         * @param {goods.IRecommend=} [properties] Properties to set
         * @returns {goods.Recommend} Recommend instance
         */
        Recommend.create = function create(properties) {
            return new Recommend(properties);
        };

        /**
         * Encodes the specified Recommend message. Does not implicitly {@link goods.Recommend.verify|verify} messages.
         * @function encode
         * @memberof goods.Recommend
         * @static
         * @param {goods.IRecommend} message Recommend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Recommend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.catID != null && message.hasOwnProperty("catID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.catID);
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.goodsName);
            if (message.shopPrice != null && message.hasOwnProperty("shopPrice"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.shopPrice);
            return writer;
        };

        /**
         * Encodes the specified Recommend message, length delimited. Does not implicitly {@link goods.Recommend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.Recommend
         * @static
         * @param {goods.IRecommend} message Recommend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Recommend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Recommend message from the specified reader or buffer.
         * @function decode
         * @memberof goods.Recommend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.Recommend} Recommend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Recommend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.Recommend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.catID = reader.uint32();
                    break;
                case 3:
                    message.goodsName = reader.string();
                    break;
                case 4:
                    message.shopPrice = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Recommend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.Recommend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.Recommend} Recommend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Recommend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Recommend message.
         * @function verify
         * @memberof goods.Recommend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Recommend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.catID != null && message.hasOwnProperty("catID"))
                if (!$util.isInteger(message.catID))
                    return "catID: integer expected";
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                if (!$util.isString(message.goodsName))
                    return "goodsName: string expected";
            if (message.shopPrice != null && message.hasOwnProperty("shopPrice"))
                if (typeof message.shopPrice !== "number")
                    return "shopPrice: number expected";
            return null;
        };

        /**
         * Creates a Recommend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.Recommend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.Recommend} Recommend
         */
        Recommend.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.Recommend)
                return object;
            var message = new $root.goods.Recommend();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.catID != null)
                message.catID = object.catID >>> 0;
            if (object.goodsName != null)
                message.goodsName = String(object.goodsName);
            if (object.shopPrice != null)
                message.shopPrice = Number(object.shopPrice);
            return message;
        };

        /**
         * Creates a plain object from a Recommend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.Recommend
         * @static
         * @param {goods.Recommend} message Recommend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Recommend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.catID = 0;
                object.goodsName = "";
                object.shopPrice = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.catID != null && message.hasOwnProperty("catID"))
                object.catID = message.catID;
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                object.goodsName = message.goodsName;
            if (message.shopPrice != null && message.hasOwnProperty("shopPrice"))
                object.shopPrice = options.json && !isFinite(message.shopPrice) ? String(message.shopPrice) : message.shopPrice;
            return object;
        };

        /**
         * Converts this Recommend to JSON.
         * @function toJSON
         * @memberof goods.Recommend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Recommend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Recommend;
    })();

    goods.DetailResult = (function() {

        /**
         * Properties of a DetailResult.
         * @memberof goods
         * @interface IDetailResult
         * @property {goods.IGoods} [goods] DetailResult goods
         * @property {Array.<goods.ISpec>} [specs] DetailResult specs
         * @property {Array.<goods.ISpecPrice>} [specPrices] DetailResult specPrices
         * @property {Array.<goods.IComment>} [comms] DetailResult comms
         * @property {Array.<goods.IGallery>} [gallers] DetailResult gallers
         */

        /**
         * Constructs a new DetailResult.
         * @memberof goods
         * @classdesc Represents a DetailResult.
         * @constructor
         * @param {goods.IDetailResult=} [properties] Properties to set
         */
        function DetailResult(properties) {
            this.specs = [];
            this.specPrices = [];
            this.comms = [];
            this.gallers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DetailResult goods.
         * @member {(goods.IGoods|null|undefined)}goods
         * @memberof goods.DetailResult
         * @instance
         */
        DetailResult.prototype.goods = null;

        /**
         * DetailResult specs.
         * @member {Array.<goods.ISpec>}specs
         * @memberof goods.DetailResult
         * @instance
         */
        DetailResult.prototype.specs = $util.emptyArray;

        /**
         * DetailResult specPrices.
         * @member {Array.<goods.ISpecPrice>}specPrices
         * @memberof goods.DetailResult
         * @instance
         */
        DetailResult.prototype.specPrices = $util.emptyArray;

        /**
         * DetailResult comms.
         * @member {Array.<goods.IComment>}comms
         * @memberof goods.DetailResult
         * @instance
         */
        DetailResult.prototype.comms = $util.emptyArray;

        /**
         * DetailResult gallers.
         * @member {Array.<goods.IGallery>}gallers
         * @memberof goods.DetailResult
         * @instance
         */
        DetailResult.prototype.gallers = $util.emptyArray;

        /**
         * Creates a new DetailResult instance using the specified properties.
         * @function create
         * @memberof goods.DetailResult
         * @static
         * @param {goods.IDetailResult=} [properties] Properties to set
         * @returns {goods.DetailResult} DetailResult instance
         */
        DetailResult.create = function create(properties) {
            return new DetailResult(properties);
        };

        /**
         * Encodes the specified DetailResult message. Does not implicitly {@link goods.DetailResult.verify|verify} messages.
         * @function encode
         * @memberof goods.DetailResult
         * @static
         * @param {goods.IDetailResult} message DetailResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DetailResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goods != null && message.hasOwnProperty("goods"))
                $root.goods.Goods.encode(message.goods, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.specs != null && message.specs.length)
                for (var i = 0; i < message.specs.length; ++i)
                    $root.goods.Spec.encode(message.specs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.specPrices != null && message.specPrices.length)
                for (var i = 0; i < message.specPrices.length; ++i)
                    $root.goods.SpecPrice.encode(message.specPrices[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.comms != null && message.comms.length)
                for (var i = 0; i < message.comms.length; ++i)
                    $root.goods.Comment.encode(message.comms[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gallers != null && message.gallers.length)
                for (var i = 0; i < message.gallers.length; ++i)
                    $root.goods.Gallery.encode(message.gallers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DetailResult message, length delimited. Does not implicitly {@link goods.DetailResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.DetailResult
         * @static
         * @param {goods.IDetailResult} message DetailResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DetailResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DetailResult message from the specified reader or buffer.
         * @function decode
         * @memberof goods.DetailResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.DetailResult} DetailResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DetailResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.DetailResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.goods = $root.goods.Goods.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.specs && message.specs.length))
                        message.specs = [];
                    message.specs.push($root.goods.Spec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.specPrices && message.specPrices.length))
                        message.specPrices = [];
                    message.specPrices.push($root.goods.SpecPrice.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.comms && message.comms.length))
                        message.comms = [];
                    message.comms.push($root.goods.Comment.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.gallers && message.gallers.length))
                        message.gallers = [];
                    message.gallers.push($root.goods.Gallery.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DetailResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.DetailResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.DetailResult} DetailResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DetailResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DetailResult message.
         * @function verify
         * @memberof goods.DetailResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DetailResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goods != null && message.hasOwnProperty("goods")) {
                var error = $root.goods.Goods.verify(message.goods);
                if (error)
                    return "goods." + error;
            }
            if (message.specs != null && message.hasOwnProperty("specs")) {
                if (!Array.isArray(message.specs))
                    return "specs: array expected";
                for (var i = 0; i < message.specs.length; ++i) {
                    error = $root.goods.Spec.verify(message.specs[i]);
                    if (error)
                        return "specs." + error;
                }
            }
            if (message.specPrices != null && message.hasOwnProperty("specPrices")) {
                if (!Array.isArray(message.specPrices))
                    return "specPrices: array expected";
                for (var i = 0; i < message.specPrices.length; ++i) {
                    error = $root.goods.SpecPrice.verify(message.specPrices[i]);
                    if (error)
                        return "specPrices." + error;
                }
            }
            if (message.comms != null && message.hasOwnProperty("comms")) {
                if (!Array.isArray(message.comms))
                    return "comms: array expected";
                for (var i = 0; i < message.comms.length; ++i) {
                    error = $root.goods.Comment.verify(message.comms[i]);
                    if (error)
                        return "comms." + error;
                }
            }
            if (message.gallers != null && message.hasOwnProperty("gallers")) {
                if (!Array.isArray(message.gallers))
                    return "gallers: array expected";
                for (var i = 0; i < message.gallers.length; ++i) {
                    error = $root.goods.Gallery.verify(message.gallers[i]);
                    if (error)
                        return "gallers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DetailResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.DetailResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.DetailResult} DetailResult
         */
        DetailResult.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.DetailResult)
                return object;
            var message = new $root.goods.DetailResult();
            if (object.goods != null) {
                if (typeof object.goods !== "object")
                    throw TypeError(".goods.DetailResult.goods: object expected");
                message.goods = $root.goods.Goods.fromObject(object.goods);
            }
            if (object.specs) {
                if (!Array.isArray(object.specs))
                    throw TypeError(".goods.DetailResult.specs: array expected");
                message.specs = [];
                for (var i = 0; i < object.specs.length; ++i) {
                    if (typeof object.specs[i] !== "object")
                        throw TypeError(".goods.DetailResult.specs: object expected");
                    message.specs[i] = $root.goods.Spec.fromObject(object.specs[i]);
                }
            }
            if (object.specPrices) {
                if (!Array.isArray(object.specPrices))
                    throw TypeError(".goods.DetailResult.specPrices: array expected");
                message.specPrices = [];
                for (var i = 0; i < object.specPrices.length; ++i) {
                    if (typeof object.specPrices[i] !== "object")
                        throw TypeError(".goods.DetailResult.specPrices: object expected");
                    message.specPrices[i] = $root.goods.SpecPrice.fromObject(object.specPrices[i]);
                }
            }
            if (object.comms) {
                if (!Array.isArray(object.comms))
                    throw TypeError(".goods.DetailResult.comms: array expected");
                message.comms = [];
                for (var i = 0; i < object.comms.length; ++i) {
                    if (typeof object.comms[i] !== "object")
                        throw TypeError(".goods.DetailResult.comms: object expected");
                    message.comms[i] = $root.goods.Comment.fromObject(object.comms[i]);
                }
            }
            if (object.gallers) {
                if (!Array.isArray(object.gallers))
                    throw TypeError(".goods.DetailResult.gallers: array expected");
                message.gallers = [];
                for (var i = 0; i < object.gallers.length; ++i) {
                    if (typeof object.gallers[i] !== "object")
                        throw TypeError(".goods.DetailResult.gallers: object expected");
                    message.gallers[i] = $root.goods.Gallery.fromObject(object.gallers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DetailResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.DetailResult
         * @static
         * @param {goods.DetailResult} message DetailResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DetailResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.specs = [];
                object.specPrices = [];
                object.comms = [];
                object.gallers = [];
            }
            if (options.defaults)
                object.goods = null;
            if (message.goods != null && message.hasOwnProperty("goods"))
                object.goods = $root.goods.Goods.toObject(message.goods, options);
            if (message.specs && message.specs.length) {
                object.specs = [];
                for (var j = 0; j < message.specs.length; ++j)
                    object.specs[j] = $root.goods.Spec.toObject(message.specs[j], options);
            }
            if (message.specPrices && message.specPrices.length) {
                object.specPrices = [];
                for (var j = 0; j < message.specPrices.length; ++j)
                    object.specPrices[j] = $root.goods.SpecPrice.toObject(message.specPrices[j], options);
            }
            if (message.comms && message.comms.length) {
                object.comms = [];
                for (var j = 0; j < message.comms.length; ++j)
                    object.comms[j] = $root.goods.Comment.toObject(message.comms[j], options);
            }
            if (message.gallers && message.gallers.length) {
                object.gallers = [];
                for (var j = 0; j < message.gallers.length; ++j)
                    object.gallers[j] = $root.goods.Gallery.toObject(message.gallers[j], options);
            }
            return object;
        };

        /**
         * Converts this DetailResult to JSON.
         * @function toJSON
         * @memberof goods.DetailResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DetailResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DetailResult;
    })();

    goods.Spec = (function() {

        /**
         * Properties of a Spec.
         * @memberof goods
         * @interface ISpec
         * @property {string} [specName] Spec specName
         * @property {Array.<goods.ISpecItem>} [items] Spec items
         */

        /**
         * Constructs a new Spec.
         * @memberof goods
         * @classdesc Represents a Spec.
         * @constructor
         * @param {goods.ISpec=} [properties] Properties to set
         */
        function Spec(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Spec specName.
         * @member {string}specName
         * @memberof goods.Spec
         * @instance
         */
        Spec.prototype.specName = "";

        /**
         * Spec items.
         * @member {Array.<goods.ISpecItem>}items
         * @memberof goods.Spec
         * @instance
         */
        Spec.prototype.items = $util.emptyArray;

        /**
         * Creates a new Spec instance using the specified properties.
         * @function create
         * @memberof goods.Spec
         * @static
         * @param {goods.ISpec=} [properties] Properties to set
         * @returns {goods.Spec} Spec instance
         */
        Spec.create = function create(properties) {
            return new Spec(properties);
        };

        /**
         * Encodes the specified Spec message. Does not implicitly {@link goods.Spec.verify|verify} messages.
         * @function encode
         * @memberof goods.Spec
         * @static
         * @param {goods.ISpec} message Spec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Spec.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.specName != null && message.hasOwnProperty("specName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.specName);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.goods.SpecItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Spec message, length delimited. Does not implicitly {@link goods.Spec.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.Spec
         * @static
         * @param {goods.ISpec} message Spec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Spec.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Spec message from the specified reader or buffer.
         * @function decode
         * @memberof goods.Spec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.Spec} Spec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Spec.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.Spec();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.specName = reader.string();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.goods.SpecItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Spec message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.Spec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.Spec} Spec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Spec.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Spec message.
         * @function verify
         * @memberof goods.Spec
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Spec.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.specName != null && message.hasOwnProperty("specName"))
                if (!$util.isString(message.specName))
                    return "specName: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.goods.SpecItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Spec message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.Spec
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.Spec} Spec
         */
        Spec.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.Spec)
                return object;
            var message = new $root.goods.Spec();
            if (object.specName != null)
                message.specName = String(object.specName);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".goods.Spec.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".goods.Spec.items: object expected");
                    message.items[i] = $root.goods.SpecItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Spec message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.Spec
         * @static
         * @param {goods.Spec} message Spec
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Spec.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults)
                object.specName = "";
            if (message.specName != null && message.hasOwnProperty("specName"))
                object.specName = message.specName;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.goods.SpecItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this Spec to JSON.
         * @function toJSON
         * @memberof goods.Spec
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Spec.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Spec;
    })();

    goods.SpecItem = (function() {

        /**
         * Properties of a SpecItem.
         * @memberof goods
         * @interface ISpecItem
         * @property {number} [itemID] SpecItem itemID
         * @property {string} [item] SpecItem item
         * @property {string} [src] SpecItem src
         * @property {boolean} [active] SpecItem active
         */

        /**
         * Constructs a new SpecItem.
         * @memberof goods
         * @classdesc Represents a SpecItem.
         * @constructor
         * @param {goods.ISpecItem=} [properties] Properties to set
         */
        function SpecItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecItem itemID.
         * @member {number}itemID
         * @memberof goods.SpecItem
         * @instance
         */
        SpecItem.prototype.itemID = 0;

        /**
         * SpecItem item.
         * @member {string}item
         * @memberof goods.SpecItem
         * @instance
         */
        SpecItem.prototype.item = "";

        /**
         * SpecItem src.
         * @member {string}src
         * @memberof goods.SpecItem
         * @instance
         */
        SpecItem.prototype.src = "";

        /**
         * SpecItem active.
         * @member {boolean}active
         * @memberof goods.SpecItem
         * @instance
         */
        SpecItem.prototype.active = false;

        /**
         * Creates a new SpecItem instance using the specified properties.
         * @function create
         * @memberof goods.SpecItem
         * @static
         * @param {goods.ISpecItem=} [properties] Properties to set
         * @returns {goods.SpecItem} SpecItem instance
         */
        SpecItem.create = function create(properties) {
            return new SpecItem(properties);
        };

        /**
         * Encodes the specified SpecItem message. Does not implicitly {@link goods.SpecItem.verify|verify} messages.
         * @function encode
         * @memberof goods.SpecItem
         * @static
         * @param {goods.ISpecItem} message SpecItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemID != null && message.hasOwnProperty("itemID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.itemID);
            if (message.item != null && message.hasOwnProperty("item"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.item);
            if (message.src != null && message.hasOwnProperty("src"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.src);
            if (message.active != null && message.hasOwnProperty("active"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.active);
            return writer;
        };

        /**
         * Encodes the specified SpecItem message, length delimited. Does not implicitly {@link goods.SpecItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.SpecItem
         * @static
         * @param {goods.ISpecItem} message SpecItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpecItem message from the specified reader or buffer.
         * @function decode
         * @memberof goods.SpecItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.SpecItem} SpecItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.SpecItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemID = reader.uint32();
                    break;
                case 2:
                    message.item = reader.string();
                    break;
                case 3:
                    message.src = reader.string();
                    break;
                case 4:
                    message.active = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpecItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.SpecItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.SpecItem} SpecItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpecItem message.
         * @function verify
         * @memberof goods.SpecItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpecItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemID != null && message.hasOwnProperty("itemID"))
                if (!$util.isInteger(message.itemID))
                    return "itemID: integer expected";
            if (message.item != null && message.hasOwnProperty("item"))
                if (!$util.isString(message.item))
                    return "item: string expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!$util.isString(message.src))
                    return "src: string expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            return null;
        };

        /**
         * Creates a SpecItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.SpecItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.SpecItem} SpecItem
         */
        SpecItem.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.SpecItem)
                return object;
            var message = new $root.goods.SpecItem();
            if (object.itemID != null)
                message.itemID = object.itemID >>> 0;
            if (object.item != null)
                message.item = String(object.item);
            if (object.src != null)
                message.src = String(object.src);
            if (object.active != null)
                message.active = Boolean(object.active);
            return message;
        };

        /**
         * Creates a plain object from a SpecItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.SpecItem
         * @static
         * @param {goods.SpecItem} message SpecItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemID = 0;
                object.item = "";
                object.src = "";
                object.active = false;
            }
            if (message.itemID != null && message.hasOwnProperty("itemID"))
                object.itemID = message.itemID;
            if (message.item != null && message.hasOwnProperty("item"))
                object.item = message.item;
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = message.src;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            return object;
        };

        /**
         * Converts this SpecItem to JSON.
         * @function toJSON
         * @memberof goods.SpecItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecItem;
    })();

    goods.SpecPrice = (function() {

        /**
         * Properties of a SpecPrice.
         * @memberof goods
         * @interface ISpecPrice
         * @property {number} [ID] SpecPrice ID
         * @property {number} [goodsID] SpecPrice goodsID
         * @property {string} [key] SpecPrice key
         * @property {string} [keyName] SpecPrice keyName
         * @property {number} [price] SpecPrice price
         * @property {number} [storeCount] SpecPrice storeCount
         * @property {string} [barCode] SpecPrice barCode
         * @property {string} [sku] SpecPrice sku
         * @property {string} [specImg] SpecPrice specImg
         */

        /**
         * Constructs a new SpecPrice.
         * @memberof goods
         * @classdesc Represents a SpecPrice.
         * @constructor
         * @param {goods.ISpecPrice=} [properties] Properties to set
         */
        function SpecPrice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecPrice ID.
         * @member {number}ID
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.ID = 0;

        /**
         * SpecPrice goodsID.
         * @member {number}goodsID
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.goodsID = 0;

        /**
         * SpecPrice key.
         * @member {string}key
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.key = "";

        /**
         * SpecPrice keyName.
         * @member {string}keyName
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.keyName = "";

        /**
         * SpecPrice price.
         * @member {number}price
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.price = 0;

        /**
         * SpecPrice storeCount.
         * @member {number}storeCount
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.storeCount = 0;

        /**
         * SpecPrice barCode.
         * @member {string}barCode
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.barCode = "";

        /**
         * SpecPrice sku.
         * @member {string}sku
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.sku = "";

        /**
         * SpecPrice specImg.
         * @member {string}specImg
         * @memberof goods.SpecPrice
         * @instance
         */
        SpecPrice.prototype.specImg = "";

        /**
         * Creates a new SpecPrice instance using the specified properties.
         * @function create
         * @memberof goods.SpecPrice
         * @static
         * @param {goods.ISpecPrice=} [properties] Properties to set
         * @returns {goods.SpecPrice} SpecPrice instance
         */
        SpecPrice.create = function create(properties) {
            return new SpecPrice(properties);
        };

        /**
         * Encodes the specified SpecPrice message. Does not implicitly {@link goods.SpecPrice.verify|verify} messages.
         * @function encode
         * @memberof goods.SpecPrice
         * @static
         * @param {goods.ISpecPrice} message SpecPrice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecPrice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goodsID);
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            if (message.keyName != null && message.hasOwnProperty("keyName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.keyName);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.price);
            if (message.storeCount != null && message.hasOwnProperty("storeCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.storeCount);
            if (message.barCode != null && message.hasOwnProperty("barCode"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.barCode);
            if (message.sku != null && message.hasOwnProperty("sku"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.sku);
            if (message.specImg != null && message.hasOwnProperty("specImg"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.specImg);
            return writer;
        };

        /**
         * Encodes the specified SpecPrice message, length delimited. Does not implicitly {@link goods.SpecPrice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.SpecPrice
         * @static
         * @param {goods.ISpecPrice} message SpecPrice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecPrice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpecPrice message from the specified reader or buffer.
         * @function decode
         * @memberof goods.SpecPrice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.SpecPrice} SpecPrice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecPrice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.SpecPrice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.goodsID = reader.uint32();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.keyName = reader.string();
                    break;
                case 5:
                    message.price = reader.float();
                    break;
                case 6:
                    message.storeCount = reader.uint32();
                    break;
                case 7:
                    message.barCode = reader.string();
                    break;
                case 8:
                    message.sku = reader.string();
                    break;
                case 9:
                    message.specImg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpecPrice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.SpecPrice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.SpecPrice} SpecPrice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecPrice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpecPrice message.
         * @function verify
         * @memberof goods.SpecPrice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpecPrice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                if (!$util.isInteger(message.goodsID))
                    return "goodsID: integer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.keyName != null && message.hasOwnProperty("keyName"))
                if (!$util.isString(message.keyName))
                    return "keyName: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.storeCount != null && message.hasOwnProperty("storeCount"))
                if (!$util.isInteger(message.storeCount))
                    return "storeCount: integer expected";
            if (message.barCode != null && message.hasOwnProperty("barCode"))
                if (!$util.isString(message.barCode))
                    return "barCode: string expected";
            if (message.sku != null && message.hasOwnProperty("sku"))
                if (!$util.isString(message.sku))
                    return "sku: string expected";
            if (message.specImg != null && message.hasOwnProperty("specImg"))
                if (!$util.isString(message.specImg))
                    return "specImg: string expected";
            return null;
        };

        /**
         * Creates a SpecPrice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.SpecPrice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.SpecPrice} SpecPrice
         */
        SpecPrice.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.SpecPrice)
                return object;
            var message = new $root.goods.SpecPrice();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.goodsID != null)
                message.goodsID = object.goodsID >>> 0;
            if (object.key != null)
                message.key = String(object.key);
            if (object.keyName != null)
                message.keyName = String(object.keyName);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.storeCount != null)
                message.storeCount = object.storeCount >>> 0;
            if (object.barCode != null)
                message.barCode = String(object.barCode);
            if (object.sku != null)
                message.sku = String(object.sku);
            if (object.specImg != null)
                message.specImg = String(object.specImg);
            return message;
        };

        /**
         * Creates a plain object from a SpecPrice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.SpecPrice
         * @static
         * @param {goods.SpecPrice} message SpecPrice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecPrice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.goodsID = 0;
                object.key = "";
                object.keyName = "";
                object.price = 0;
                object.storeCount = 0;
                object.barCode = "";
                object.sku = "";
                object.specImg = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                object.goodsID = message.goodsID;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.keyName != null && message.hasOwnProperty("keyName"))
                object.keyName = message.keyName;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.storeCount != null && message.hasOwnProperty("storeCount"))
                object.storeCount = message.storeCount;
            if (message.barCode != null && message.hasOwnProperty("barCode"))
                object.barCode = message.barCode;
            if (message.sku != null && message.hasOwnProperty("sku"))
                object.sku = message.sku;
            if (message.specImg != null && message.hasOwnProperty("specImg"))
                object.specImg = message.specImg;
            return object;
        };

        /**
         * Converts this SpecPrice to JSON.
         * @function toJSON
         * @memberof goods.SpecPrice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecPrice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecPrice;
    })();

    goods.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof goods
         * @interface IComment
         * @property {number} [ID] Comment ID
         * @property {number} [goodsID] Comment goodsID
         * @property {string} [email] Comment email
         * @property {string} [username] Comment username
         * @property {string} [content] Comment content
         * @property {number} [addTime] Comment addTime
         * @property {boolean} [isShow] Comment isShow
         * @property {number} [parentID] Comment parentID
         * @property {number} [userID] Comment userID
         * @property {string} [img] Comment img
         * @property {number} [deliverRank] Comment deliverRank
         * @property {number} [goodsRank] Comment goodsRank
         * @property {number} [serviceRank] Comment serviceRank
         * @property {number} [zanNum] Comment zanNum
         * @property {boolean} [isAnonymous] Comment isAnonymous
         * @property {string} [headPic] Comment headPic
         */

        /**
         * Constructs a new Comment.
         * @memberof goods
         * @classdesc Represents a Comment.
         * @constructor
         * @param {goods.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment ID.
         * @member {number}ID
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.ID = 0;

        /**
         * Comment goodsID.
         * @member {number}goodsID
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.goodsID = 0;

        /**
         * Comment email.
         * @member {string}email
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.email = "";

        /**
         * Comment username.
         * @member {string}username
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.username = "";

        /**
         * Comment content.
         * @member {string}content
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.content = "";

        /**
         * Comment addTime.
         * @member {number}addTime
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.addTime = 0;

        /**
         * Comment isShow.
         * @member {boolean}isShow
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.isShow = false;

        /**
         * Comment parentID.
         * @member {number}parentID
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.parentID = 0;

        /**
         * Comment userID.
         * @member {number}userID
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.userID = 0;

        /**
         * Comment img.
         * @member {string}img
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.img = "";

        /**
         * Comment deliverRank.
         * @member {number}deliverRank
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.deliverRank = 0;

        /**
         * Comment goodsRank.
         * @member {number}goodsRank
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.goodsRank = 0;

        /**
         * Comment serviceRank.
         * @member {number}serviceRank
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.serviceRank = 0;

        /**
         * Comment zanNum.
         * @member {number}zanNum
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.zanNum = 0;

        /**
         * Comment isAnonymous.
         * @member {boolean}isAnonymous
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.isAnonymous = false;

        /**
         * Comment headPic.
         * @member {string}headPic
         * @memberof goods.Comment
         * @instance
         */
        Comment.prototype.headPic = "";

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof goods.Comment
         * @static
         * @param {goods.IComment=} [properties] Properties to set
         * @returns {goods.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link goods.Comment.verify|verify} messages.
         * @function encode
         * @memberof goods.Comment
         * @static
         * @param {goods.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goodsID);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.addTime);
            if (message.isShow != null && message.hasOwnProperty("isShow"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isShow);
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.parentID);
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.userID);
            if (message.img != null && message.hasOwnProperty("img"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.img);
            if (message.deliverRank != null && message.hasOwnProperty("deliverRank"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.deliverRank);
            if (message.goodsRank != null && message.hasOwnProperty("goodsRank"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.goodsRank);
            if (message.serviceRank != null && message.hasOwnProperty("serviceRank"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.serviceRank);
            if (message.zanNum != null && message.hasOwnProperty("zanNum"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.zanNum);
            if (message.isAnonymous != null && message.hasOwnProperty("isAnonymous"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isAnonymous);
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.headPic);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link goods.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.Comment
         * @static
         * @param {goods.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof goods.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.Comment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.goodsID = reader.uint32();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.username = reader.string();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                case 6:
                    message.addTime = reader.uint32();
                    break;
                case 7:
                    message.isShow = reader.bool();
                    break;
                case 8:
                    message.parentID = reader.uint32();
                    break;
                case 9:
                    message.userID = reader.uint32();
                    break;
                case 10:
                    message.img = reader.string();
                    break;
                case 11:
                    message.deliverRank = reader.uint32();
                    break;
                case 12:
                    message.goodsRank = reader.uint32();
                    break;
                case 13:
                    message.serviceRank = reader.uint32();
                    break;
                case 14:
                    message.zanNum = reader.uint32();
                    break;
                case 15:
                    message.isAnonymous = reader.bool();
                    break;
                case 16:
                    message.headPic = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof goods.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                if (!$util.isInteger(message.goodsID))
                    return "goodsID: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                if (!$util.isInteger(message.addTime))
                    return "addTime: integer expected";
            if (message.isShow != null && message.hasOwnProperty("isShow"))
                if (typeof message.isShow !== "boolean")
                    return "isShow: boolean expected";
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                if (!$util.isInteger(message.parentID))
                    return "parentID: integer expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isInteger(message.userID))
                    return "userID: integer expected";
            if (message.img != null && message.hasOwnProperty("img"))
                if (!$util.isString(message.img))
                    return "img: string expected";
            if (message.deliverRank != null && message.hasOwnProperty("deliverRank"))
                if (!$util.isInteger(message.deliverRank))
                    return "deliverRank: integer expected";
            if (message.goodsRank != null && message.hasOwnProperty("goodsRank"))
                if (!$util.isInteger(message.goodsRank))
                    return "goodsRank: integer expected";
            if (message.serviceRank != null && message.hasOwnProperty("serviceRank"))
                if (!$util.isInteger(message.serviceRank))
                    return "serviceRank: integer expected";
            if (message.zanNum != null && message.hasOwnProperty("zanNum"))
                if (!$util.isInteger(message.zanNum))
                    return "zanNum: integer expected";
            if (message.isAnonymous != null && message.hasOwnProperty("isAnonymous"))
                if (typeof message.isAnonymous !== "boolean")
                    return "isAnonymous: boolean expected";
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                if (!$util.isString(message.headPic))
                    return "headPic: string expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.Comment)
                return object;
            var message = new $root.goods.Comment();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.goodsID != null)
                message.goodsID = object.goodsID >>> 0;
            if (object.email != null)
                message.email = String(object.email);
            if (object.username != null)
                message.username = String(object.username);
            if (object.content != null)
                message.content = String(object.content);
            if (object.addTime != null)
                message.addTime = object.addTime >>> 0;
            if (object.isShow != null)
                message.isShow = Boolean(object.isShow);
            if (object.parentID != null)
                message.parentID = object.parentID >>> 0;
            if (object.userID != null)
                message.userID = object.userID >>> 0;
            if (object.img != null)
                message.img = String(object.img);
            if (object.deliverRank != null)
                message.deliverRank = object.deliverRank >>> 0;
            if (object.goodsRank != null)
                message.goodsRank = object.goodsRank >>> 0;
            if (object.serviceRank != null)
                message.serviceRank = object.serviceRank >>> 0;
            if (object.zanNum != null)
                message.zanNum = object.zanNum >>> 0;
            if (object.isAnonymous != null)
                message.isAnonymous = Boolean(object.isAnonymous);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.Comment
         * @static
         * @param {goods.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.goodsID = 0;
                object.email = "";
                object.username = "";
                object.content = "";
                object.addTime = 0;
                object.isShow = false;
                object.parentID = 0;
                object.userID = 0;
                object.img = "";
                object.deliverRank = 0;
                object.goodsRank = 0;
                object.serviceRank = 0;
                object.zanNum = 0;
                object.isAnonymous = false;
                object.headPic = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                object.goodsID = message.goodsID;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                object.addTime = message.addTime;
            if (message.isShow != null && message.hasOwnProperty("isShow"))
                object.isShow = message.isShow;
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                object.parentID = message.parentID;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.img != null && message.hasOwnProperty("img"))
                object.img = message.img;
            if (message.deliverRank != null && message.hasOwnProperty("deliverRank"))
                object.deliverRank = message.deliverRank;
            if (message.goodsRank != null && message.hasOwnProperty("goodsRank"))
                object.goodsRank = message.goodsRank;
            if (message.serviceRank != null && message.hasOwnProperty("serviceRank"))
                object.serviceRank = message.serviceRank;
            if (message.zanNum != null && message.hasOwnProperty("zanNum"))
                object.zanNum = message.zanNum;
            if (message.isAnonymous != null && message.hasOwnProperty("isAnonymous"))
                object.isAnonymous = message.isAnonymous;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof goods.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Comment;
    })();

    goods.Gallery = (function() {

        /**
         * Properties of a Gallery.
         * @memberof goods
         * @interface IGallery
         * @property {string} [imageUrl] Gallery imageUrl
         */

        /**
         * Constructs a new Gallery.
         * @memberof goods
         * @classdesc Represents a Gallery.
         * @constructor
         * @param {goods.IGallery=} [properties] Properties to set
         */
        function Gallery(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gallery imageUrl.
         * @member {string}imageUrl
         * @memberof goods.Gallery
         * @instance
         */
        Gallery.prototype.imageUrl = "";

        /**
         * Creates a new Gallery instance using the specified properties.
         * @function create
         * @memberof goods.Gallery
         * @static
         * @param {goods.IGallery=} [properties] Properties to set
         * @returns {goods.Gallery} Gallery instance
         */
        Gallery.create = function create(properties) {
            return new Gallery(properties);
        };

        /**
         * Encodes the specified Gallery message. Does not implicitly {@link goods.Gallery.verify|verify} messages.
         * @function encode
         * @memberof goods.Gallery
         * @static
         * @param {goods.IGallery} message Gallery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gallery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imageUrl);
            return writer;
        };

        /**
         * Encodes the specified Gallery message, length delimited. Does not implicitly {@link goods.Gallery.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.Gallery
         * @static
         * @param {goods.IGallery} message Gallery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gallery.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gallery message from the specified reader or buffer.
         * @function decode
         * @memberof goods.Gallery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.Gallery} Gallery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gallery.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.Gallery();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Gallery message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.Gallery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.Gallery} Gallery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gallery.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gallery message.
         * @function verify
         * @memberof goods.Gallery
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gallery.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            return null;
        };

        /**
         * Creates a Gallery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.Gallery
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.Gallery} Gallery
         */
        Gallery.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.Gallery)
                return object;
            var message = new $root.goods.Gallery();
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            return message;
        };

        /**
         * Creates a plain object from a Gallery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.Gallery
         * @static
         * @param {goods.Gallery} message Gallery
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Gallery.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.imageUrl = "";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            return object;
        };

        /**
         * Converts this Gallery to JSON.
         * @function toJSON
         * @memberof goods.Gallery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Gallery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Gallery;
    })();

    return goods;
})();

module.exports = $root;
