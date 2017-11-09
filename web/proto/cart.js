/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cart = (function() {

    /**
     * Namespace cart.
     * @exports cart
     * @namespace
     */
    var cart = {};

    cart.ListResult = (function() {

        /**
         * Properties of a ListResult.
         * @memberof cart
         * @interface IListResult
         * @property {Array.<cart.ICart>} [carts] ListResult carts
         */

        /**
         * Constructs a new ListResult.
         * @memberof cart
         * @classdesc Represents a ListResult.
         * @constructor
         * @param {cart.IListResult=} [properties] Properties to set
         */
        function ListResult(properties) {
            this.carts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResult carts.
         * @member {Array.<cart.ICart>}carts
         * @memberof cart.ListResult
         * @instance
         */
        ListResult.prototype.carts = $util.emptyArray;

        /**
         * Creates a new ListResult instance using the specified properties.
         * @function create
         * @memberof cart.ListResult
         * @static
         * @param {cart.IListResult=} [properties] Properties to set
         * @returns {cart.ListResult} ListResult instance
         */
        ListResult.create = function create(properties) {
            return new ListResult(properties);
        };

        /**
         * Encodes the specified ListResult message. Does not implicitly {@link cart.ListResult.verify|verify} messages.
         * @function encode
         * @memberof cart.ListResult
         * @static
         * @param {cart.IListResult} message ListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.carts != null && message.carts.length)
                for (var i = 0; i < message.carts.length; ++i)
                    $root.cart.Cart.encode(message.carts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListResult message, length delimited. Does not implicitly {@link cart.ListResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cart.ListResult
         * @static
         * @param {cart.IListResult} message ListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListResult message from the specified reader or buffer.
         * @function decode
         * @memberof cart.ListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cart.ListResult} ListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cart.ListResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.carts && message.carts.length))
                        message.carts = [];
                    message.carts.push($root.cart.Cart.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cart.ListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cart.ListResult} ListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListResult message.
         * @function verify
         * @memberof cart.ListResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.carts != null && message.hasOwnProperty("carts")) {
                if (!Array.isArray(message.carts))
                    return "carts: array expected";
                for (var i = 0; i < message.carts.length; ++i) {
                    var error = $root.cart.Cart.verify(message.carts[i]);
                    if (error)
                        return "carts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cart.ListResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cart.ListResult} ListResult
         */
        ListResult.fromObject = function fromObject(object) {
            if (object instanceof $root.cart.ListResult)
                return object;
            var message = new $root.cart.ListResult();
            if (object.carts) {
                if (!Array.isArray(object.carts))
                    throw TypeError(".cart.ListResult.carts: array expected");
                message.carts = [];
                for (var i = 0; i < object.carts.length; ++i) {
                    if (typeof object.carts[i] !== "object")
                        throw TypeError(".cart.ListResult.carts: object expected");
                    message.carts[i] = $root.cart.Cart.fromObject(object.carts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cart.ListResult
         * @static
         * @param {cart.ListResult} message ListResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.carts = [];
            if (message.carts && message.carts.length) {
                object.carts = [];
                for (var j = 0; j < message.carts.length; ++j)
                    object.carts[j] = $root.cart.Cart.toObject(message.carts[j], options);
            }
            return object;
        };

        /**
         * Converts this ListResult to JSON.
         * @function toJSON
         * @memberof cart.ListResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListResult;
    })();

    cart.Cart = (function() {

        /**
         * Properties of a Cart.
         * @memberof cart
         * @interface ICart
         * @property {number} [ID] Cart ID
         * @property {number} [goodsID] Cart goodsID
         * @property {string} [goodsSN] Cart goodsSN
         * @property {string} [goodsName] Cart goodsName
         * @property {number} [marketPrice] Cart marketPrice
         * @property {number} [goodsPrice] Cart goodsPrice
         * @property {number} [goodsNum] Cart goodsNum
         * @property {string} [specKeyName] Cart specKeyName
         * @property {boolean} [selected] Cart selected
         * @property {number} [addTime] Cart addTime
         */

        /**
         * Constructs a new Cart.
         * @memberof cart
         * @classdesc Represents a Cart.
         * @constructor
         * @param {cart.ICart=} [properties] Properties to set
         */
        function Cart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cart ID.
         * @member {number}ID
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.ID = 0;

        /**
         * Cart goodsID.
         * @member {number}goodsID
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.goodsID = 0;

        /**
         * Cart goodsSN.
         * @member {string}goodsSN
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.goodsSN = "";

        /**
         * Cart goodsName.
         * @member {string}goodsName
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.goodsName = "";

        /**
         * Cart marketPrice.
         * @member {number}marketPrice
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.marketPrice = 0;

        /**
         * Cart goodsPrice.
         * @member {number}goodsPrice
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.goodsPrice = 0;

        /**
         * Cart goodsNum.
         * @member {number}goodsNum
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.goodsNum = 0;

        /**
         * Cart specKeyName.
         * @member {string}specKeyName
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.specKeyName = "";

        /**
         * Cart selected.
         * @member {boolean}selected
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.selected = false;

        /**
         * Cart addTime.
         * @member {number}addTime
         * @memberof cart.Cart
         * @instance
         */
        Cart.prototype.addTime = 0;

        /**
         * Creates a new Cart instance using the specified properties.
         * @function create
         * @memberof cart.Cart
         * @static
         * @param {cart.ICart=} [properties] Properties to set
         * @returns {cart.Cart} Cart instance
         */
        Cart.create = function create(properties) {
            return new Cart(properties);
        };

        /**
         * Encodes the specified Cart message. Does not implicitly {@link cart.Cart.verify|verify} messages.
         * @function encode
         * @memberof cart.Cart
         * @static
         * @param {cart.ICart} message Cart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goodsID);
            if (message.goodsSN != null && message.hasOwnProperty("goodsSN"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.goodsSN);
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.goodsName);
            if (message.marketPrice != null && message.hasOwnProperty("marketPrice"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.marketPrice);
            if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.goodsPrice);
            if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.goodsNum);
            if (message.specKeyName != null && message.hasOwnProperty("specKeyName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.specKeyName);
            if (message.selected != null && message.hasOwnProperty("selected"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.selected);
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.addTime);
            return writer;
        };

        /**
         * Encodes the specified Cart message, length delimited. Does not implicitly {@link cart.Cart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cart.Cart
         * @static
         * @param {cart.ICart} message Cart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cart message from the specified reader or buffer.
         * @function decode
         * @memberof cart.Cart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cart.Cart} Cart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cart.Cart();
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
                    message.goodsSN = reader.string();
                    break;
                case 4:
                    message.goodsName = reader.string();
                    break;
                case 5:
                    message.marketPrice = reader.float();
                    break;
                case 6:
                    message.goodsPrice = reader.float();
                    break;
                case 7:
                    message.goodsNum = reader.uint32();
                    break;
                case 8:
                    message.specKeyName = reader.string();
                    break;
                case 9:
                    message.selected = reader.bool();
                    break;
                case 10:
                    message.addTime = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cart.Cart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cart.Cart} Cart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cart message.
         * @function verify
         * @memberof cart.Cart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                if (!$util.isInteger(message.goodsID))
                    return "goodsID: integer expected";
            if (message.goodsSN != null && message.hasOwnProperty("goodsSN"))
                if (!$util.isString(message.goodsSN))
                    return "goodsSN: string expected";
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                if (!$util.isString(message.goodsName))
                    return "goodsName: string expected";
            if (message.marketPrice != null && message.hasOwnProperty("marketPrice"))
                if (typeof message.marketPrice !== "number")
                    return "marketPrice: number expected";
            if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                if (typeof message.goodsPrice !== "number")
                    return "goodsPrice: number expected";
            if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                if (!$util.isInteger(message.goodsNum))
                    return "goodsNum: integer expected";
            if (message.specKeyName != null && message.hasOwnProperty("specKeyName"))
                if (!$util.isString(message.specKeyName))
                    return "specKeyName: string expected";
            if (message.selected != null && message.hasOwnProperty("selected"))
                if (typeof message.selected !== "boolean")
                    return "selected: boolean expected";
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                if (!$util.isInteger(message.addTime))
                    return "addTime: integer expected";
            return null;
        };

        /**
         * Creates a Cart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cart.Cart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cart.Cart} Cart
         */
        Cart.fromObject = function fromObject(object) {
            if (object instanceof $root.cart.Cart)
                return object;
            var message = new $root.cart.Cart();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.goodsID != null)
                message.goodsID = object.goodsID >>> 0;
            if (object.goodsSN != null)
                message.goodsSN = String(object.goodsSN);
            if (object.goodsName != null)
                message.goodsName = String(object.goodsName);
            if (object.marketPrice != null)
                message.marketPrice = Number(object.marketPrice);
            if (object.goodsPrice != null)
                message.goodsPrice = Number(object.goodsPrice);
            if (object.goodsNum != null)
                message.goodsNum = object.goodsNum >>> 0;
            if (object.specKeyName != null)
                message.specKeyName = String(object.specKeyName);
            if (object.selected != null)
                message.selected = Boolean(object.selected);
            if (object.addTime != null)
                message.addTime = object.addTime >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Cart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cart.Cart
         * @static
         * @param {cart.Cart} message Cart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.goodsID = 0;
                object.goodsSN = "";
                object.goodsName = "";
                object.marketPrice = 0;
                object.goodsPrice = 0;
                object.goodsNum = 0;
                object.specKeyName = "";
                object.selected = false;
                object.addTime = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.goodsID != null && message.hasOwnProperty("goodsID"))
                object.goodsID = message.goodsID;
            if (message.goodsSN != null && message.hasOwnProperty("goodsSN"))
                object.goodsSN = message.goodsSN;
            if (message.goodsName != null && message.hasOwnProperty("goodsName"))
                object.goodsName = message.goodsName;
            if (message.marketPrice != null && message.hasOwnProperty("marketPrice"))
                object.marketPrice = options.json && !isFinite(message.marketPrice) ? String(message.marketPrice) : message.marketPrice;
            if (message.goodsPrice != null && message.hasOwnProperty("goodsPrice"))
                object.goodsPrice = options.json && !isFinite(message.goodsPrice) ? String(message.goodsPrice) : message.goodsPrice;
            if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                object.goodsNum = message.goodsNum;
            if (message.specKeyName != null && message.hasOwnProperty("specKeyName"))
                object.specKeyName = message.specKeyName;
            if (message.selected != null && message.hasOwnProperty("selected"))
                object.selected = message.selected;
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                object.addTime = message.addTime;
            return object;
        };

        /**
         * Converts this Cart to JSON.
         * @function toJSON
         * @memberof cart.Cart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cart;
    })();

    cart.ModifyParam = (function() {

        /**
         * Properties of a ModifyParam.
         * @memberof cart
         * @interface IModifyParam
         * @property {number} [ID] ModifyParam ID
         * @property {number} [goodsNum] ModifyParam goodsNum
         * @property {boolean} [selected] ModifyParam selected
         */

        /**
         * Constructs a new ModifyParam.
         * @memberof cart
         * @classdesc Represents a ModifyParam.
         * @constructor
         * @param {cart.IModifyParam=} [properties] Properties to set
         */
        function ModifyParam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyParam ID.
         * @member {number}ID
         * @memberof cart.ModifyParam
         * @instance
         */
        ModifyParam.prototype.ID = 0;

        /**
         * ModifyParam goodsNum.
         * @member {number}goodsNum
         * @memberof cart.ModifyParam
         * @instance
         */
        ModifyParam.prototype.goodsNum = 0;

        /**
         * ModifyParam selected.
         * @member {boolean}selected
         * @memberof cart.ModifyParam
         * @instance
         */
        ModifyParam.prototype.selected = false;

        /**
         * Creates a new ModifyParam instance using the specified properties.
         * @function create
         * @memberof cart.ModifyParam
         * @static
         * @param {cart.IModifyParam=} [properties] Properties to set
         * @returns {cart.ModifyParam} ModifyParam instance
         */
        ModifyParam.create = function create(properties) {
            return new ModifyParam(properties);
        };

        /**
         * Encodes the specified ModifyParam message. Does not implicitly {@link cart.ModifyParam.verify|verify} messages.
         * @function encode
         * @memberof cart.ModifyParam
         * @static
         * @param {cart.IModifyParam} message ModifyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goodsNum);
            if (message.selected != null && message.hasOwnProperty("selected"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.selected);
            return writer;
        };

        /**
         * Encodes the specified ModifyParam message, length delimited. Does not implicitly {@link cart.ModifyParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cart.ModifyParam
         * @static
         * @param {cart.IModifyParam} message ModifyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyParam message from the specified reader or buffer.
         * @function decode
         * @memberof cart.ModifyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cart.ModifyParam} ModifyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cart.ModifyParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.goodsNum = reader.uint32();
                    break;
                case 3:
                    message.selected = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyParam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cart.ModifyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cart.ModifyParam} ModifyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyParam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyParam message.
         * @function verify
         * @memberof cart.ModifyParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                if (!$util.isInteger(message.goodsNum))
                    return "goodsNum: integer expected";
            if (message.selected != null && message.hasOwnProperty("selected"))
                if (typeof message.selected !== "boolean")
                    return "selected: boolean expected";
            return null;
        };

        /**
         * Creates a ModifyParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cart.ModifyParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cart.ModifyParam} ModifyParam
         */
        ModifyParam.fromObject = function fromObject(object) {
            if (object instanceof $root.cart.ModifyParam)
                return object;
            var message = new $root.cart.ModifyParam();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.goodsNum != null)
                message.goodsNum = object.goodsNum >>> 0;
            if (object.selected != null)
                message.selected = Boolean(object.selected);
            return message;
        };

        /**
         * Creates a plain object from a ModifyParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cart.ModifyParam
         * @static
         * @param {cart.ModifyParam} message ModifyParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.goodsNum = 0;
                object.selected = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.goodsNum != null && message.hasOwnProperty("goodsNum"))
                object.goodsNum = message.goodsNum;
            if (message.selected != null && message.hasOwnProperty("selected"))
                object.selected = message.selected;
            return object;
        };

        /**
         * Converts this ModifyParam to JSON.
         * @function toJSON
         * @memberof cart.ModifyParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyParam;
    })();

    cart.ModifyAllParam = (function() {

        /**
         * Properties of a ModifyAllParam.
         * @memberof cart
         * @interface IModifyAllParam
         * @property {Array.<cart.IModifyParam>} [carts] ModifyAllParam carts
         */

        /**
         * Constructs a new ModifyAllParam.
         * @memberof cart
         * @classdesc Represents a ModifyAllParam.
         * @constructor
         * @param {cart.IModifyAllParam=} [properties] Properties to set
         */
        function ModifyAllParam(properties) {
            this.carts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyAllParam carts.
         * @member {Array.<cart.IModifyParam>}carts
         * @memberof cart.ModifyAllParam
         * @instance
         */
        ModifyAllParam.prototype.carts = $util.emptyArray;

        /**
         * Creates a new ModifyAllParam instance using the specified properties.
         * @function create
         * @memberof cart.ModifyAllParam
         * @static
         * @param {cart.IModifyAllParam=} [properties] Properties to set
         * @returns {cart.ModifyAllParam} ModifyAllParam instance
         */
        ModifyAllParam.create = function create(properties) {
            return new ModifyAllParam(properties);
        };

        /**
         * Encodes the specified ModifyAllParam message. Does not implicitly {@link cart.ModifyAllParam.verify|verify} messages.
         * @function encode
         * @memberof cart.ModifyAllParam
         * @static
         * @param {cart.IModifyAllParam} message ModifyAllParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyAllParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.carts != null && message.carts.length)
                for (var i = 0; i < message.carts.length; ++i)
                    $root.cart.ModifyParam.encode(message.carts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ModifyAllParam message, length delimited. Does not implicitly {@link cart.ModifyAllParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cart.ModifyAllParam
         * @static
         * @param {cart.IModifyAllParam} message ModifyAllParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyAllParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyAllParam message from the specified reader or buffer.
         * @function decode
         * @memberof cart.ModifyAllParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cart.ModifyAllParam} ModifyAllParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyAllParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cart.ModifyAllParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.carts && message.carts.length))
                        message.carts = [];
                    message.carts.push($root.cart.ModifyParam.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyAllParam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cart.ModifyAllParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cart.ModifyAllParam} ModifyAllParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyAllParam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyAllParam message.
         * @function verify
         * @memberof cart.ModifyAllParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyAllParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.carts != null && message.hasOwnProperty("carts")) {
                if (!Array.isArray(message.carts))
                    return "carts: array expected";
                for (var i = 0; i < message.carts.length; ++i) {
                    var error = $root.cart.ModifyParam.verify(message.carts[i]);
                    if (error)
                        return "carts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ModifyAllParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cart.ModifyAllParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cart.ModifyAllParam} ModifyAllParam
         */
        ModifyAllParam.fromObject = function fromObject(object) {
            if (object instanceof $root.cart.ModifyAllParam)
                return object;
            var message = new $root.cart.ModifyAllParam();
            if (object.carts) {
                if (!Array.isArray(object.carts))
                    throw TypeError(".cart.ModifyAllParam.carts: array expected");
                message.carts = [];
                for (var i = 0; i < object.carts.length; ++i) {
                    if (typeof object.carts[i] !== "object")
                        throw TypeError(".cart.ModifyAllParam.carts: object expected");
                    message.carts[i] = $root.cart.ModifyParam.fromObject(object.carts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ModifyAllParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cart.ModifyAllParam
         * @static
         * @param {cart.ModifyAllParam} message ModifyAllParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyAllParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.carts = [];
            if (message.carts && message.carts.length) {
                object.carts = [];
                for (var j = 0; j < message.carts.length; ++j)
                    object.carts[j] = $root.cart.ModifyParam.toObject(message.carts[j], options);
            }
            return object;
        };

        /**
         * Converts this ModifyAllParam to JSON.
         * @function toJSON
         * @memberof cart.ModifyAllParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyAllParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyAllParam;
    })();

    return cart;
})();

module.exports = $root;
