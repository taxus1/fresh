/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.order = (function() {

    /**
     * Namespace order.
     * @exports order
     * @namespace
     */
    var order = {};

    order.CreateParam = (function() {

        /**
         * Properties of a CreateParam.
         * @memberof order
         * @interface ICreateParam
         * @property {number} [addressID] CreateParam addressID
         * @property {string} [remark] CreateParam remark
         */

        /**
         * Constructs a new CreateParam.
         * @memberof order
         * @classdesc Represents a CreateParam.
         * @constructor
         * @param {order.ICreateParam=} [properties] Properties to set
         */
        function CreateParam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateParam addressID.
         * @member {number}addressID
         * @memberof order.CreateParam
         * @instance
         */
        CreateParam.prototype.addressID = 0;

        /**
         * CreateParam remark.
         * @member {string}remark
         * @memberof order.CreateParam
         * @instance
         */
        CreateParam.prototype.remark = "";

        /**
         * Creates a new CreateParam instance using the specified properties.
         * @function create
         * @memberof order.CreateParam
         * @static
         * @param {order.ICreateParam=} [properties] Properties to set
         * @returns {order.CreateParam} CreateParam instance
         */
        CreateParam.create = function create(properties) {
            return new CreateParam(properties);
        };

        /**
         * Encodes the specified CreateParam message. Does not implicitly {@link order.CreateParam.verify|verify} messages.
         * @function encode
         * @memberof order.CreateParam
         * @static
         * @param {order.ICreateParam} message CreateParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addressID != null && message.hasOwnProperty("addressID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.addressID);
            if (message.remark != null && message.hasOwnProperty("remark"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified CreateParam message, length delimited. Does not implicitly {@link order.CreateParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof order.CreateParam
         * @static
         * @param {order.ICreateParam} message CreateParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateParam message from the specified reader or buffer.
         * @function decode
         * @memberof order.CreateParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {order.CreateParam} CreateParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.CreateParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.addressID = reader.uint32();
                    break;
                case 2:
                    message.remark = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateParam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof order.CreateParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {order.CreateParam} CreateParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateParam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateParam message.
         * @function verify
         * @memberof order.CreateParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addressID != null && message.hasOwnProperty("addressID"))
                if (!$util.isInteger(message.addressID))
                    return "addressID: integer expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a CreateParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof order.CreateParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {order.CreateParam} CreateParam
         */
        CreateParam.fromObject = function fromObject(object) {
            if (object instanceof $root.order.CreateParam)
                return object;
            var message = new $root.order.CreateParam();
            if (object.addressID != null)
                message.addressID = object.addressID >>> 0;
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a CreateParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof order.CreateParam
         * @static
         * @param {order.CreateParam} message CreateParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.addressID = 0;
                object.remark = "";
            }
            if (message.addressID != null && message.hasOwnProperty("addressID"))
                object.addressID = message.addressID;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this CreateParam to JSON.
         * @function toJSON
         * @memberof order.CreateParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateParam;
    })();

    order.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof order
         * @interface IOrder
         * @property {number} [ID] Order ID
         * @property {string} [orderSN] Order orderSN
         * @property {number} [totalAmount] Order totalAmount
         */

        /**
         * Constructs a new Order.
         * @memberof order
         * @classdesc Represents an Order.
         * @constructor
         * @param {order.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order ID.
         * @member {number}ID
         * @memberof order.Order
         * @instance
         */
        Order.prototype.ID = 0;

        /**
         * Order orderSN.
         * @member {string}orderSN
         * @memberof order.Order
         * @instance
         */
        Order.prototype.orderSN = "";

        /**
         * Order totalAmount.
         * @member {number}totalAmount
         * @memberof order.Order
         * @instance
         */
        Order.prototype.totalAmount = 0;

        /**
         * Creates a new Order instance using the specified properties.
         * @function create
         * @memberof order.Order
         * @static
         * @param {order.IOrder=} [properties] Properties to set
         * @returns {order.Order} Order instance
         */
        Order.create = function create(properties) {
            return new Order(properties);
        };

        /**
         * Encodes the specified Order message. Does not implicitly {@link order.Order.verify|verify} messages.
         * @function encode
         * @memberof order.Order
         * @static
         * @param {order.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.orderSN != null && message.hasOwnProperty("orderSN"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.orderSN);
            if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.totalAmount);
            return writer;
        };

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link order.Order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof order.Order
         * @static
         * @param {order.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @function decode
         * @memberof order.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {order.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.Order();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.orderSN = reader.string();
                    break;
                case 3:
                    message.totalAmount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof order.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {order.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Order message.
         * @function verify
         * @memberof order.Order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.orderSN != null && message.hasOwnProperty("orderSN"))
                if (!$util.isString(message.orderSN))
                    return "orderSN: string expected";
            if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                if (typeof message.totalAmount !== "number")
                    return "totalAmount: number expected";
            return null;
        };

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof order.Order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {order.Order} Order
         */
        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.order.Order)
                return object;
            var message = new $root.order.Order();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.orderSN != null)
                message.orderSN = String(object.orderSN);
            if (object.totalAmount != null)
                message.totalAmount = Number(object.totalAmount);
            return message;
        };

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof order.Order
         * @static
         * @param {order.Order} message Order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.orderSN = "";
                object.totalAmount = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.orderSN != null && message.hasOwnProperty("orderSN"))
                object.orderSN = message.orderSN;
            if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                object.totalAmount = options.json && !isFinite(message.totalAmount) ? String(message.totalAmount) : message.totalAmount;
            return object;
        };

        /**
         * Converts this Order to JSON.
         * @function toJSON
         * @memberof order.Order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Order;
    })();

    order.List = (function() {

        /**
         * Properties of a List.
         * @memberof order
         * @interface IList
         * @property {Array.<order.List.IOrderWithGoods>} [orders] List orders
         */

        /**
         * Constructs a new List.
         * @memberof order
         * @classdesc Represents a List.
         * @constructor
         * @param {order.IList=} [properties] Properties to set
         */
        function List(properties) {
            this.orders = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * List orders.
         * @member {Array.<order.List.IOrderWithGoods>}orders
         * @memberof order.List
         * @instance
         */
        List.prototype.orders = $util.emptyArray;

        /**
         * Creates a new List instance using the specified properties.
         * @function create
         * @memberof order.List
         * @static
         * @param {order.IList=} [properties] Properties to set
         * @returns {order.List} List instance
         */
        List.create = function create(properties) {
            return new List(properties);
        };

        /**
         * Encodes the specified List message. Does not implicitly {@link order.List.verify|verify} messages.
         * @function encode
         * @memberof order.List
         * @static
         * @param {order.IList} message List message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        List.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orders != null && message.orders.length)
                for (var i = 0; i < message.orders.length; ++i)
                    $root.order.List.OrderWithGoods.encode(message.orders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified List message, length delimited. Does not implicitly {@link order.List.verify|verify} messages.
         * @function encodeDelimited
         * @memberof order.List
         * @static
         * @param {order.IList} message List message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        List.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a List message from the specified reader or buffer.
         * @function decode
         * @memberof order.List
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {order.List} List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        List.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.List();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.orders && message.orders.length))
                        message.orders = [];
                    message.orders.push($root.order.List.OrderWithGoods.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a List message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof order.List
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {order.List} List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        List.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a List message.
         * @function verify
         * @memberof order.List
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        List.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orders != null && message.hasOwnProperty("orders")) {
                if (!Array.isArray(message.orders))
                    return "orders: array expected";
                for (var i = 0; i < message.orders.length; ++i) {
                    var error = $root.order.List.OrderWithGoods.verify(message.orders[i]);
                    if (error)
                        return "orders." + error;
                }
            }
            return null;
        };

        /**
         * Creates a List message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof order.List
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {order.List} List
         */
        List.fromObject = function fromObject(object) {
            if (object instanceof $root.order.List)
                return object;
            var message = new $root.order.List();
            if (object.orders) {
                if (!Array.isArray(object.orders))
                    throw TypeError(".order.List.orders: array expected");
                message.orders = [];
                for (var i = 0; i < object.orders.length; ++i) {
                    if (typeof object.orders[i] !== "object")
                        throw TypeError(".order.List.orders: object expected");
                    message.orders[i] = $root.order.List.OrderWithGoods.fromObject(object.orders[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a List message. Also converts values to other types if specified.
         * @function toObject
         * @memberof order.List
         * @static
         * @param {order.List} message List
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        List.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.orders = [];
            if (message.orders && message.orders.length) {
                object.orders = [];
                for (var j = 0; j < message.orders.length; ++j)
                    object.orders[j] = $root.order.List.OrderWithGoods.toObject(message.orders[j], options);
            }
            return object;
        };

        /**
         * Converts this List to JSON.
         * @function toJSON
         * @memberof order.List
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        List.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        List.OrderWithGoods = (function() {

            /**
             * Properties of an OrderWithGoods.
             * @memberof order.List
             * @interface IOrderWithGoods
             * @property {order.List.OrderWithGoods.IOrder} [order] OrderWithGoods order
             * @property {Array.<order.List.OrderWithGoods.IGoods>} [goodses] OrderWithGoods goodses
             */

            /**
             * Constructs a new OrderWithGoods.
             * @memberof order.List
             * @classdesc Represents an OrderWithGoods.
             * @constructor
             * @param {order.List.IOrderWithGoods=} [properties] Properties to set
             */
            function OrderWithGoods(properties) {
                this.goodses = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OrderWithGoods order.
             * @member {(order.List.OrderWithGoods.IOrder|null|undefined)}order
             * @memberof order.List.OrderWithGoods
             * @instance
             */
            OrderWithGoods.prototype.order = null;

            /**
             * OrderWithGoods goodses.
             * @member {Array.<order.List.OrderWithGoods.IGoods>}goodses
             * @memberof order.List.OrderWithGoods
             * @instance
             */
            OrderWithGoods.prototype.goodses = $util.emptyArray;

            /**
             * Creates a new OrderWithGoods instance using the specified properties.
             * @function create
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {order.List.IOrderWithGoods=} [properties] Properties to set
             * @returns {order.List.OrderWithGoods} OrderWithGoods instance
             */
            OrderWithGoods.create = function create(properties) {
                return new OrderWithGoods(properties);
            };

            /**
             * Encodes the specified OrderWithGoods message. Does not implicitly {@link order.List.OrderWithGoods.verify|verify} messages.
             * @function encode
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {order.List.IOrderWithGoods} message OrderWithGoods message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrderWithGoods.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.order != null && message.hasOwnProperty("order"))
                    $root.order.List.OrderWithGoods.Order.encode(message.order, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.goodses != null && message.goodses.length)
                    for (var i = 0; i < message.goodses.length; ++i)
                        $root.order.List.OrderWithGoods.Goods.encode(message.goodses[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OrderWithGoods message, length delimited. Does not implicitly {@link order.List.OrderWithGoods.verify|verify} messages.
             * @function encodeDelimited
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {order.List.IOrderWithGoods} message OrderWithGoods message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrderWithGoods.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OrderWithGoods message from the specified reader or buffer.
             * @function decode
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {order.List.OrderWithGoods} OrderWithGoods
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrderWithGoods.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.List.OrderWithGoods();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.order = $root.order.List.OrderWithGoods.Order.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.goodses && message.goodses.length))
                            message.goodses = [];
                        message.goodses.push($root.order.List.OrderWithGoods.Goods.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OrderWithGoods message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {order.List.OrderWithGoods} OrderWithGoods
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrderWithGoods.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OrderWithGoods message.
             * @function verify
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OrderWithGoods.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.order != null && message.hasOwnProperty("order")) {
                    var error = $root.order.List.OrderWithGoods.Order.verify(message.order);
                    if (error)
                        return "order." + error;
                }
                if (message.goodses != null && message.hasOwnProperty("goodses")) {
                    if (!Array.isArray(message.goodses))
                        return "goodses: array expected";
                    for (var i = 0; i < message.goodses.length; ++i) {
                        error = $root.order.List.OrderWithGoods.Goods.verify(message.goodses[i]);
                        if (error)
                            return "goodses." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OrderWithGoods message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {order.List.OrderWithGoods} OrderWithGoods
             */
            OrderWithGoods.fromObject = function fromObject(object) {
                if (object instanceof $root.order.List.OrderWithGoods)
                    return object;
                var message = new $root.order.List.OrderWithGoods();
                if (object.order != null) {
                    if (typeof object.order !== "object")
                        throw TypeError(".order.List.OrderWithGoods.order: object expected");
                    message.order = $root.order.List.OrderWithGoods.Order.fromObject(object.order);
                }
                if (object.goodses) {
                    if (!Array.isArray(object.goodses))
                        throw TypeError(".order.List.OrderWithGoods.goodses: array expected");
                    message.goodses = [];
                    for (var i = 0; i < object.goodses.length; ++i) {
                        if (typeof object.goodses[i] !== "object")
                            throw TypeError(".order.List.OrderWithGoods.goodses: object expected");
                        message.goodses[i] = $root.order.List.OrderWithGoods.Goods.fromObject(object.goodses[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OrderWithGoods message. Also converts values to other types if specified.
             * @function toObject
             * @memberof order.List.OrderWithGoods
             * @static
             * @param {order.List.OrderWithGoods} message OrderWithGoods
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OrderWithGoods.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.goodses = [];
                if (options.defaults)
                    object.order = null;
                if (message.order != null && message.hasOwnProperty("order"))
                    object.order = $root.order.List.OrderWithGoods.Order.toObject(message.order, options);
                if (message.goodses && message.goodses.length) {
                    object.goodses = [];
                    for (var j = 0; j < message.goodses.length; ++j)
                        object.goodses[j] = $root.order.List.OrderWithGoods.Goods.toObject(message.goodses[j], options);
                }
                return object;
            };

            /**
             * Converts this OrderWithGoods to JSON.
             * @function toJSON
             * @memberof order.List.OrderWithGoods
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OrderWithGoods.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            OrderWithGoods.Order = (function() {

                /**
                 * Properties of an Order.
                 * @memberof order.List.OrderWithGoods
                 * @interface IOrder
                 * @property {number} [ID] Order ID
                 * @property {number} [orderState] Order orderState
                 * @property {string} [orderSN] Order orderSN
                 * @property {number} [shippingState] Order shippingState
                 * @property {number} [payState] Order payState
                 * @property {number} [goodsPrice] Order goodsPrice
                 * @property {number} [shippingPrice] Order shippingPrice
                 * @property {number} [orderAmount] Order orderAmount
                 * @property {number} [totalAmount] Order totalAmount
                 * @property {number|Long} [addTime] Order addTime
                 * @property {string} [userNote] Order userNote
                 * @property {string} [adminNote] Order adminNote
                 */

                /**
                 * Constructs a new Order.
                 * @memberof order.List.OrderWithGoods
                 * @classdesc Represents an Order.
                 * @constructor
                 * @param {order.List.OrderWithGoods.IOrder=} [properties] Properties to set
                 */
                function Order(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Order ID.
                 * @member {number}ID
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.ID = 0;

                /**
                 * Order orderState.
                 * @member {number}orderState
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.orderState = 0;

                /**
                 * Order orderSN.
                 * @member {string}orderSN
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.orderSN = "";

                /**
                 * Order shippingState.
                 * @member {number}shippingState
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.shippingState = 0;

                /**
                 * Order payState.
                 * @member {number}payState
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.payState = 0;

                /**
                 * Order goodsPrice.
                 * @member {number}goodsPrice
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.goodsPrice = 0;

                /**
                 * Order shippingPrice.
                 * @member {number}shippingPrice
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.shippingPrice = 0;

                /**
                 * Order orderAmount.
                 * @member {number}orderAmount
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.orderAmount = 0;

                /**
                 * Order totalAmount.
                 * @member {number}totalAmount
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.totalAmount = 0;

                /**
                 * Order addTime.
                 * @member {number|Long}addTime
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.addTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Order userNote.
                 * @member {string}userNote
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.userNote = "";

                /**
                 * Order adminNote.
                 * @member {string}adminNote
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 */
                Order.prototype.adminNote = "";

                /**
                 * Creates a new Order instance using the specified properties.
                 * @function create
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {order.List.OrderWithGoods.IOrder=} [properties] Properties to set
                 * @returns {order.List.OrderWithGoods.Order} Order instance
                 */
                Order.create = function create(properties) {
                    return new Order(properties);
                };

                /**
                 * Encodes the specified Order message. Does not implicitly {@link order.List.OrderWithGoods.Order.verify|verify} messages.
                 * @function encode
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {order.List.OrderWithGoods.IOrder} message Order message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Order.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ID != null && message.hasOwnProperty("ID"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
                    if (message.orderState != null && message.hasOwnProperty("orderState"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderState);
                    if (message.orderSN != null && message.hasOwnProperty("orderSN"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.orderSN);
                    if (message.shippingState != null && message.hasOwnProperty("shippingState"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.shippingState);
                    if (message.payState != null && message.hasOwnProperty("payState"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.payState);
                    if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                        writer.uint32(/* id 6, wireType 5 =*/53).float(message.goodsPrice);
                    if (message.shippingPrice != null && message.hasOwnProperty("shippingPrice"))
                        writer.uint32(/* id 7, wireType 5 =*/61).float(message.shippingPrice);
                    if (message.orderAmount != null && message.hasOwnProperty("orderAmount"))
                        writer.uint32(/* id 8, wireType 5 =*/69).float(message.orderAmount);
                    if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                        writer.uint32(/* id 9, wireType 5 =*/77).float(message.totalAmount);
                    if (message.addTime != null && message.hasOwnProperty("addTime"))
                        writer.uint32(/* id 10, wireType 0 =*/80).int64(message.addTime);
                    if (message.userNote != null && message.hasOwnProperty("userNote"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.userNote);
                    if (message.adminNote != null && message.hasOwnProperty("adminNote"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.adminNote);
                    return writer;
                };

                /**
                 * Encodes the specified Order message, length delimited. Does not implicitly {@link order.List.OrderWithGoods.Order.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {order.List.OrderWithGoods.IOrder} message Order message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Order.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Order message from the specified reader or buffer.
                 * @function decode
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {order.List.OrderWithGoods.Order} Order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Order.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.List.OrderWithGoods.Order();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ID = reader.uint32();
                            break;
                        case 2:
                            message.orderState = reader.uint32();
                            break;
                        case 3:
                            message.orderSN = reader.string();
                            break;
                        case 4:
                            message.shippingState = reader.uint32();
                            break;
                        case 5:
                            message.payState = reader.uint32();
                            break;
                        case 6:
                            message.goodsPrice = reader.float();
                            break;
                        case 7:
                            message.shippingPrice = reader.float();
                            break;
                        case 8:
                            message.orderAmount = reader.float();
                            break;
                        case 9:
                            message.totalAmount = reader.float();
                            break;
                        case 10:
                            message.addTime = reader.int64();
                            break;
                        case 11:
                            message.userNote = reader.string();
                            break;
                        case 12:
                            message.adminNote = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Order message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {order.List.OrderWithGoods.Order} Order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Order.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Order message.
                 * @function verify
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Order.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ID != null && message.hasOwnProperty("ID"))
                        if (!$util.isInteger(message.ID))
                            return "ID: integer expected";
                    if (message.orderState != null && message.hasOwnProperty("orderState"))
                        if (!$util.isInteger(message.orderState))
                            return "orderState: integer expected";
                    if (message.orderSN != null && message.hasOwnProperty("orderSN"))
                        if (!$util.isString(message.orderSN))
                            return "orderSN: string expected";
                    if (message.shippingState != null && message.hasOwnProperty("shippingState"))
                        if (!$util.isInteger(message.shippingState))
                            return "shippingState: integer expected";
                    if (message.payState != null && message.hasOwnProperty("payState"))
                        if (!$util.isInteger(message.payState))
                            return "payState: integer expected";
                    if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                        if (typeof message.goodsPrice !== "number")
                            return "goodsPrice: number expected";
                    if (message.shippingPrice != null && message.hasOwnProperty("shippingPrice"))
                        if (typeof message.shippingPrice !== "number")
                            return "shippingPrice: number expected";
                    if (message.orderAmount != null && message.hasOwnProperty("orderAmount"))
                        if (typeof message.orderAmount !== "number")
                            return "orderAmount: number expected";
                    if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                        if (typeof message.totalAmount !== "number")
                            return "totalAmount: number expected";
                    if (message.addTime != null && message.hasOwnProperty("addTime"))
                        if (!$util.isInteger(message.addTime) && !(message.addTime && $util.isInteger(message.addTime.low) && $util.isInteger(message.addTime.high)))
                            return "addTime: integer|Long expected";
                    if (message.userNote != null && message.hasOwnProperty("userNote"))
                        if (!$util.isString(message.userNote))
                            return "userNote: string expected";
                    if (message.adminNote != null && message.hasOwnProperty("adminNote"))
                        if (!$util.isString(message.adminNote))
                            return "adminNote: string expected";
                    return null;
                };

                /**
                 * Creates an Order message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {order.List.OrderWithGoods.Order} Order
                 */
                Order.fromObject = function fromObject(object) {
                    if (object instanceof $root.order.List.OrderWithGoods.Order)
                        return object;
                    var message = new $root.order.List.OrderWithGoods.Order();
                    if (object.ID != null)
                        message.ID = object.ID >>> 0;
                    if (object.orderState != null)
                        message.orderState = object.orderState >>> 0;
                    if (object.orderSN != null)
                        message.orderSN = String(object.orderSN);
                    if (object.shippingState != null)
                        message.shippingState = object.shippingState >>> 0;
                    if (object.payState != null)
                        message.payState = object.payState >>> 0;
                    if (object.goodsPrice != null)
                        message.goodsPrice = Number(object.goodsPrice);
                    if (object.shippingPrice != null)
                        message.shippingPrice = Number(object.shippingPrice);
                    if (object.orderAmount != null)
                        message.orderAmount = Number(object.orderAmount);
                    if (object.totalAmount != null)
                        message.totalAmount = Number(object.totalAmount);
                    if (object.addTime != null)
                        if ($util.Long)
                            (message.addTime = $util.Long.fromValue(object.addTime)).unsigned = false;
                        else if (typeof object.addTime === "string")
                            message.addTime = parseInt(object.addTime, 10);
                        else if (typeof object.addTime === "number")
                            message.addTime = object.addTime;
                        else if (typeof object.addTime === "object")
                            message.addTime = new $util.LongBits(object.addTime.low >>> 0, object.addTime.high >>> 0).toNumber();
                    if (object.userNote != null)
                        message.userNote = String(object.userNote);
                    if (object.adminNote != null)
                        message.adminNote = String(object.adminNote);
                    return message;
                };

                /**
                 * Creates a plain object from an Order message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof order.List.OrderWithGoods.Order
                 * @static
                 * @param {order.List.OrderWithGoods.Order} message Order
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Order.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.ID = 0;
                        object.orderState = 0;
                        object.orderSN = "";
                        object.shippingState = 0;
                        object.payState = 0;
                        object.goodsPrice = 0;
                        object.shippingPrice = 0;
                        object.orderAmount = 0;
                        object.totalAmount = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.addTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.addTime = options.longs === String ? "0" : 0;
                        object.userNote = "";
                        object.adminNote = "";
                    }
                    if (message.ID != null && message.hasOwnProperty("ID"))
                        object.ID = message.ID;
                    if (message.orderState != null && message.hasOwnProperty("orderState"))
                        object.orderState = message.orderState;
                    if (message.orderSN != null && message.hasOwnProperty("orderSN"))
                        object.orderSN = message.orderSN;
                    if (message.shippingState != null && message.hasOwnProperty("shippingState"))
                        object.shippingState = message.shippingState;
                    if (message.payState != null && message.hasOwnProperty("payState"))
                        object.payState = message.payState;
                    if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                        object.goodsPrice = options.json && !isFinite(message.goodsPrice) ? String(message.goodsPrice) : message.goodsPrice;
                    if (message.shippingPrice != null && message.hasOwnProperty("shippingPrice"))
                        object.shippingPrice = options.json && !isFinite(message.shippingPrice) ? String(message.shippingPrice) : message.shippingPrice;
                    if (message.orderAmount != null && message.hasOwnProperty("orderAmount"))
                        object.orderAmount = options.json && !isFinite(message.orderAmount) ? String(message.orderAmount) : message.orderAmount;
                    if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                        object.totalAmount = options.json && !isFinite(message.totalAmount) ? String(message.totalAmount) : message.totalAmount;
                    if (message.addTime != null && message.hasOwnProperty("addTime"))
                        if (typeof message.addTime === "number")
                            object.addTime = options.longs === String ? String(message.addTime) : message.addTime;
                        else
                            object.addTime = options.longs === String ? $util.Long.prototype.toString.call(message.addTime) : options.longs === Number ? new $util.LongBits(message.addTime.low >>> 0, message.addTime.high >>> 0).toNumber() : message.addTime;
                    if (message.userNote != null && message.hasOwnProperty("userNote"))
                        object.userNote = message.userNote;
                    if (message.adminNote != null && message.hasOwnProperty("adminNote"))
                        object.adminNote = message.adminNote;
                    return object;
                };

                /**
                 * Converts this Order to JSON.
                 * @function toJSON
                 * @memberof order.List.OrderWithGoods.Order
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Order.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Order;
            })();

            OrderWithGoods.Goods = (function() {

                /**
                 * Properties of a Goods.
                 * @memberof order.List.OrderWithGoods
                 * @interface IGoods
                 * @property {number} [ID] Goods ID
                 * @property {number} [orderID] Goods orderID
                 * @property {number} [goodsID] Goods goodsID
                 * @property {string} [goodsName] Goods goodsName
                 * @property {number} [goodsNum] Goods goodsNum
                 * @property {number} [goodsPrice] Goods goodsPrice
                 * @property {number} [costPrice] Goods costPrice
                 * @property {string} [specKeyName] Goods specKeyName
                 */

                /**
                 * Constructs a new Goods.
                 * @memberof order.List.OrderWithGoods
                 * @classdesc Represents a Goods.
                 * @constructor
                 * @param {order.List.OrderWithGoods.IGoods=} [properties] Properties to set
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
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.ID = 0;

                /**
                 * Goods orderID.
                 * @member {number}orderID
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.orderID = 0;

                /**
                 * Goods goodsID.
                 * @member {number}goodsID
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.goodsID = 0;

                /**
                 * Goods goodsName.
                 * @member {string}goodsName
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.goodsName = "";

                /**
                 * Goods goodsNum.
                 * @member {number}goodsNum
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.goodsNum = 0;

                /**
                 * Goods goodsPrice.
                 * @member {number}goodsPrice
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.goodsPrice = 0;

                /**
                 * Goods costPrice.
                 * @member {number}costPrice
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.costPrice = 0;

                /**
                 * Goods specKeyName.
                 * @member {string}specKeyName
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 */
                Goods.prototype.specKeyName = "";

                /**
                 * Creates a new Goods instance using the specified properties.
                 * @function create
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {order.List.OrderWithGoods.IGoods=} [properties] Properties to set
                 * @returns {order.List.OrderWithGoods.Goods} Goods instance
                 */
                Goods.create = function create(properties) {
                    return new Goods(properties);
                };

                /**
                 * Encodes the specified Goods message. Does not implicitly {@link order.List.OrderWithGoods.Goods.verify|verify} messages.
                 * @function encode
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {order.List.OrderWithGoods.IGoods} message Goods message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Goods.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ID != null && message.hasOwnProperty("ID"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
                    if (message.orderID != null && message.hasOwnProperty("orderID"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderID);
                    if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.goodsID);
                    if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.goodsName);
                    if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.goodsNum);
                    if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                        writer.uint32(/* id 6, wireType 5 =*/53).float(message.goodsPrice);
                    if (message.costPrice != null && message.hasOwnProperty("costPrice"))
                        writer.uint32(/* id 7, wireType 5 =*/61).float(message.costPrice);
                    if (message.specKeyName != null && message.hasOwnProperty("specKeyName"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.specKeyName);
                    return writer;
                };

                /**
                 * Encodes the specified Goods message, length delimited. Does not implicitly {@link order.List.OrderWithGoods.Goods.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {order.List.OrderWithGoods.IGoods} message Goods message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Goods.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Goods message from the specified reader or buffer.
                 * @function decode
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {order.List.OrderWithGoods.Goods} Goods
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Goods.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.List.OrderWithGoods.Goods();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ID = reader.uint32();
                            break;
                        case 2:
                            message.orderID = reader.uint32();
                            break;
                        case 3:
                            message.goodsID = reader.uint32();
                            break;
                        case 4:
                            message.goodsName = reader.string();
                            break;
                        case 5:
                            message.goodsNum = reader.uint32();
                            break;
                        case 6:
                            message.goodsPrice = reader.float();
                            break;
                        case 7:
                            message.costPrice = reader.float();
                            break;
                        case 8:
                            message.specKeyName = reader.string();
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
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {order.List.OrderWithGoods.Goods} Goods
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
                 * @memberof order.List.OrderWithGoods.Goods
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
                    if (message.orderID != null && message.hasOwnProperty("orderID"))
                        if (!$util.isInteger(message.orderID))
                            return "orderID: integer expected";
                    if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                        if (!$util.isInteger(message.goodsID))
                            return "goodsID: integer expected";
                    if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                        if (!$util.isString(message.goodsName))
                            return "goodsName: string expected";
                    if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                        if (!$util.isInteger(message.goodsNum))
                            return "goodsNum: integer expected";
                    if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                        if (typeof message.goodsPrice !== "number")
                            return "goodsPrice: number expected";
                    if (message.costPrice != null && message.hasOwnProperty("costPrice"))
                        if (typeof message.costPrice !== "number")
                            return "costPrice: number expected";
                    if (message.specKeyName != null && message.hasOwnProperty("specKeyName"))
                        if (!$util.isString(message.specKeyName))
                            return "specKeyName: string expected";
                    return null;
                };

                /**
                 * Creates a Goods message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {order.List.OrderWithGoods.Goods} Goods
                 */
                Goods.fromObject = function fromObject(object) {
                    if (object instanceof $root.order.List.OrderWithGoods.Goods)
                        return object;
                    var message = new $root.order.List.OrderWithGoods.Goods();
                    if (object.ID != null)
                        message.ID = object.ID >>> 0;
                    if (object.orderID != null)
                        message.orderID = object.orderID >>> 0;
                    if (object.goodsID != null)
                        message.goodsID = object.goodsID >>> 0;
                    if (object.goodsName != null)
                        message.goodsName = String(object.goodsName);
                    if (object.goodsNum != null)
                        message.goodsNum = object.goodsNum >>> 0;
                    if (object.goodsPrice != null)
                        message.goodsPrice = Number(object.goodsPrice);
                    if (object.costPrice != null)
                        message.costPrice = Number(object.costPrice);
                    if (object.specKeyName != null)
                        message.specKeyName = String(object.specKeyName);
                    return message;
                };

                /**
                 * Creates a plain object from a Goods message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof order.List.OrderWithGoods.Goods
                 * @static
                 * @param {order.List.OrderWithGoods.Goods} message Goods
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Goods.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.ID = 0;
                        object.orderID = 0;
                        object.goodsID = 0;
                        object.goodsName = "";
                        object.goodsNum = 0;
                        object.goodsPrice = 0;
                        object.costPrice = 0;
                        object.specKeyName = "";
                    }
                    if (message.ID != null && message.hasOwnProperty("ID"))
                        object.ID = message.ID;
                    if (message.orderID != null && message.hasOwnProperty("orderID"))
                        object.orderID = message.orderID;
                    if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                        object.goodsID = message.goodsID;
                    if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                        object.goodsName = message.goodsName;
                    if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                        object.goodsNum = message.goodsNum;
                    if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                        object.goodsPrice = options.json && !isFinite(message.goodsPrice) ? String(message.goodsPrice) : message.goodsPrice;
                    if (message.costPrice != null && message.hasOwnProperty("costPrice"))
                        object.costPrice = options.json && !isFinite(message.costPrice) ? String(message.costPrice) : message.costPrice;
                    if (message.specKeyName != null && message.hasOwnProperty("specKeyName"))
                        object.specKeyName = message.specKeyName;
                    return object;
                };

                /**
                 * Converts this Goods to JSON.
                 * @function toJSON
                 * @memberof order.List.OrderWithGoods.Goods
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Goods.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Goods;
            })();

            return OrderWithGoods;
        })();

        return List;
    })();

    order.Address = (function() {

        /**
         * Properties of an Address.
         * @memberof order
         * @interface IAddress
         * @property {string} [provinceStr] Address provinceStr
         * @property {string} [cityStr] Address cityStr
         * @property {string} [districtStr] Address districtStr
         * @property {string} [twonStr] Address twonStr
         * @property {string} [consignee] Address consignee
         * @property {string} [mobile] Address mobile
         * @property {string} [address] Address address
         */

        /**
         * Constructs a new Address.
         * @memberof order
         * @classdesc Represents an Address.
         * @constructor
         * @param {order.IAddress=} [properties] Properties to set
         */
        function Address(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Address provinceStr.
         * @member {string}provinceStr
         * @memberof order.Address
         * @instance
         */
        Address.prototype.provinceStr = "";

        /**
         * Address cityStr.
         * @member {string}cityStr
         * @memberof order.Address
         * @instance
         */
        Address.prototype.cityStr = "";

        /**
         * Address districtStr.
         * @member {string}districtStr
         * @memberof order.Address
         * @instance
         */
        Address.prototype.districtStr = "";

        /**
         * Address twonStr.
         * @member {string}twonStr
         * @memberof order.Address
         * @instance
         */
        Address.prototype.twonStr = "";

        /**
         * Address consignee.
         * @member {string}consignee
         * @memberof order.Address
         * @instance
         */
        Address.prototype.consignee = "";

        /**
         * Address mobile.
         * @member {string}mobile
         * @memberof order.Address
         * @instance
         */
        Address.prototype.mobile = "";

        /**
         * Address address.
         * @member {string}address
         * @memberof order.Address
         * @instance
         */
        Address.prototype.address = "";

        /**
         * Creates a new Address instance using the specified properties.
         * @function create
         * @memberof order.Address
         * @static
         * @param {order.IAddress=} [properties] Properties to set
         * @returns {order.Address} Address instance
         */
        Address.create = function create(properties) {
            return new Address(properties);
        };

        /**
         * Encodes the specified Address message. Does not implicitly {@link order.Address.verify|verify} messages.
         * @function encode
         * @memberof order.Address
         * @static
         * @param {order.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.provinceStr != null && message.hasOwnProperty("provinceStr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.provinceStr);
            if (message.cityStr != null && message.hasOwnProperty("cityStr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cityStr);
            if (message.districtStr != null && message.hasOwnProperty("districtStr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.districtStr);
            if (message.twonStr != null && message.hasOwnProperty("twonStr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.twonStr);
            if (message.consignee != null && message.hasOwnProperty("consignee"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.consignee);
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.mobile);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link order.Address.verify|verify} messages.
         * @function encodeDelimited
         * @memberof order.Address
         * @static
         * @param {order.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @function decode
         * @memberof order.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {order.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.Address();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.provinceStr = reader.string();
                    break;
                case 2:
                    message.cityStr = reader.string();
                    break;
                case 3:
                    message.districtStr = reader.string();
                    break;
                case 4:
                    message.twonStr = reader.string();
                    break;
                case 5:
                    message.consignee = reader.string();
                    break;
                case 6:
                    message.mobile = reader.string();
                    break;
                case 7:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof order.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {order.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Address message.
         * @function verify
         * @memberof order.Address
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Address.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.provinceStr != null && message.hasOwnProperty("provinceStr"))
                if (!$util.isString(message.provinceStr))
                    return "provinceStr: string expected";
            if (message.cityStr != null && message.hasOwnProperty("cityStr"))
                if (!$util.isString(message.cityStr))
                    return "cityStr: string expected";
            if (message.districtStr != null && message.hasOwnProperty("districtStr"))
                if (!$util.isString(message.districtStr))
                    return "districtStr: string expected";
            if (message.twonStr != null && message.hasOwnProperty("twonStr"))
                if (!$util.isString(message.twonStr))
                    return "twonStr: string expected";
            if (message.consignee != null && message.hasOwnProperty("consignee"))
                if (!$util.isString(message.consignee))
                    return "consignee: string expected";
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                if (!$util.isString(message.mobile))
                    return "mobile: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof order.Address
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {order.Address} Address
         */
        Address.fromObject = function fromObject(object) {
            if (object instanceof $root.order.Address)
                return object;
            var message = new $root.order.Address();
            if (object.provinceStr != null)
                message.provinceStr = String(object.provinceStr);
            if (object.cityStr != null)
                message.cityStr = String(object.cityStr);
            if (object.districtStr != null)
                message.districtStr = String(object.districtStr);
            if (object.twonStr != null)
                message.twonStr = String(object.twonStr);
            if (object.consignee != null)
                message.consignee = String(object.consignee);
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @function toObject
         * @memberof order.Address
         * @static
         * @param {order.Address} message Address
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Address.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.provinceStr = "";
                object.cityStr = "";
                object.districtStr = "";
                object.twonStr = "";
                object.consignee = "";
                object.mobile = "";
                object.address = "";
            }
            if (message.provinceStr != null && message.hasOwnProperty("provinceStr"))
                object.provinceStr = message.provinceStr;
            if (message.cityStr != null && message.hasOwnProperty("cityStr"))
                object.cityStr = message.cityStr;
            if (message.districtStr != null && message.hasOwnProperty("districtStr"))
                object.districtStr = message.districtStr;
            if (message.twonStr != null && message.hasOwnProperty("twonStr"))
                object.twonStr = message.twonStr;
            if (message.consignee != null && message.hasOwnProperty("consignee"))
                object.consignee = message.consignee;
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this Address to JSON.
         * @function toJSON
         * @memberof order.Address
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Address.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Address;
    })();

    order.Detail = (function() {

        /**
         * Properties of a Detail.
         * @memberof order
         * @interface IDetail
         * @property {order.List.IOrderWithGoods} [orderWithGoods] Detail orderWithGoods
         * @property {order.IAddress} [address] Detail address
         */

        /**
         * Constructs a new Detail.
         * @memberof order
         * @classdesc Represents a Detail.
         * @constructor
         * @param {order.IDetail=} [properties] Properties to set
         */
        function Detail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Detail orderWithGoods.
         * @member {(order.List.IOrderWithGoods|null|undefined)}orderWithGoods
         * @memberof order.Detail
         * @instance
         */
        Detail.prototype.orderWithGoods = null;

        /**
         * Detail address.
         * @member {(order.IAddress|null|undefined)}address
         * @memberof order.Detail
         * @instance
         */
        Detail.prototype.address = null;

        /**
         * Creates a new Detail instance using the specified properties.
         * @function create
         * @memberof order.Detail
         * @static
         * @param {order.IDetail=} [properties] Properties to set
         * @returns {order.Detail} Detail instance
         */
        Detail.create = function create(properties) {
            return new Detail(properties);
        };

        /**
         * Encodes the specified Detail message. Does not implicitly {@link order.Detail.verify|verify} messages.
         * @function encode
         * @memberof order.Detail
         * @static
         * @param {order.IDetail} message Detail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Detail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderWithGoods != null && message.hasOwnProperty("orderWithGoods"))
                $root.order.List.OrderWithGoods.encode(message.orderWithGoods, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.address != null && message.hasOwnProperty("address"))
                $root.order.Address.encode(message.address, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Detail message, length delimited. Does not implicitly {@link order.Detail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof order.Detail
         * @static
         * @param {order.IDetail} message Detail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Detail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Detail message from the specified reader or buffer.
         * @function decode
         * @memberof order.Detail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {order.Detail} Detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Detail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.order.Detail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderWithGoods = $root.order.List.OrderWithGoods.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = $root.order.Address.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Detail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof order.Detail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {order.Detail} Detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Detail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Detail message.
         * @function verify
         * @memberof order.Detail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Detail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderWithGoods != null && message.hasOwnProperty("orderWithGoods")) {
                var error = $root.order.List.OrderWithGoods.verify(message.orderWithGoods);
                if (error)
                    return "orderWithGoods." + error;
            }
            if (message.address != null && message.hasOwnProperty("address")) {
                error = $root.order.Address.verify(message.address);
                if (error)
                    return "address." + error;
            }
            return null;
        };

        /**
         * Creates a Detail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof order.Detail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {order.Detail} Detail
         */
        Detail.fromObject = function fromObject(object) {
            if (object instanceof $root.order.Detail)
                return object;
            var message = new $root.order.Detail();
            if (object.orderWithGoods != null) {
                if (typeof object.orderWithGoods !== "object")
                    throw TypeError(".order.Detail.orderWithGoods: object expected");
                message.orderWithGoods = $root.order.List.OrderWithGoods.fromObject(object.orderWithGoods);
            }
            if (object.address != null) {
                if (typeof object.address !== "object")
                    throw TypeError(".order.Detail.address: object expected");
                message.address = $root.order.Address.fromObject(object.address);
            }
            return message;
        };

        /**
         * Creates a plain object from a Detail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof order.Detail
         * @static
         * @param {order.Detail} message Detail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Detail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.orderWithGoods = null;
                object.address = null;
            }
            if (message.orderWithGoods != null && message.hasOwnProperty("orderWithGoods"))
                object.orderWithGoods = $root.order.List.OrderWithGoods.toObject(message.orderWithGoods, options);
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = $root.order.Address.toObject(message.address, options);
            return object;
        };

        /**
         * Converts this Detail to JSON.
         * @function toJSON
         * @memberof order.Detail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Detail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Detail;
    })();

    return order;
})();

module.exports = $root;
