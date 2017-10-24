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
         * @property {Array.<goods.INewGoods>} [goodses] NewGoodsResult goodses
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
         * @member {Array.<goods.INewGoods>}goodses
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
                    $root.goods.NewGoods.encode(message.goodses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.goodses.push($root.goods.NewGoods.decode(reader, reader.uint32()));
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
                    var error = $root.goods.NewGoods.verify(message.goodses[i]);
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
                    message.goodses[i] = $root.goods.NewGoods.fromObject(object.goodses[i]);
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
                    object.goodses[j] = $root.goods.NewGoods.toObject(message.goodses[j], options);
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

    goods.NewGoods = (function() {

        /**
         * Properties of a NewGoods.
         * @memberof goods
         * @interface INewGoods
         * @property {number} [iD] NewGoods iD
         * @property {number} [catID] NewGoods catID
         * @property {number} [extendCatID] NewGoods extendCatID
         * @property {string} [goodsSN] NewGoods goodsSN
         * @property {string} [goodsName] NewGoods goodsName
         * @property {number} [clickCount] NewGoods clickCount
         * @property {number} [brandID] NewGoods brandID
         * @property {number} [storeCount] NewGoods storeCount
         * @property {number} [commentCount] NewGoods commentCount
         * @property {number} [weight] NewGoods weight
         * @property {number} [marketPrice] NewGoods marketPrice
         * @property {number} [shopPrice] NewGoods shopPrice
         * @property {number} [costPrice] NewGoods costPrice
         * @property {string} [priceLadder] NewGoods priceLadder
         * @property {string} [keywords] NewGoods keywords
         * @property {string} [goodsRemark] NewGoods goodsRemark
         * @property {string} [goodsContent] NewGoods goodsContent
         * @property {string} [originalImg] NewGoods originalImg
         * @property {boolean} [isReal] NewGoods isReal
         * @property {boolean} [isOnSale] NewGoods isOnSale
         */

        /**
         * Constructs a new NewGoods.
         * @memberof goods
         * @classdesc Represents a NewGoods.
         * @constructor
         * @param {goods.INewGoods=} [properties] Properties to set
         */
        function NewGoods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewGoods iD.
         * @member {number}iD
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.iD = 0;

        /**
         * NewGoods catID.
         * @member {number}catID
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.catID = 0;

        /**
         * NewGoods extendCatID.
         * @member {number}extendCatID
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.extendCatID = 0;

        /**
         * NewGoods goodsSN.
         * @member {string}goodsSN
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.goodsSN = "";

        /**
         * NewGoods goodsName.
         * @member {string}goodsName
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.goodsName = "";

        /**
         * NewGoods clickCount.
         * @member {number}clickCount
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.clickCount = 0;

        /**
         * NewGoods brandID.
         * @member {number}brandID
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.brandID = 0;

        /**
         * NewGoods storeCount.
         * @member {number}storeCount
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.storeCount = 0;

        /**
         * NewGoods commentCount.
         * @member {number}commentCount
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.commentCount = 0;

        /**
         * NewGoods weight.
         * @member {number}weight
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.weight = 0;

        /**
         * NewGoods marketPrice.
         * @member {number}marketPrice
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.marketPrice = 0;

        /**
         * NewGoods shopPrice.
         * @member {number}shopPrice
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.shopPrice = 0;

        /**
         * NewGoods costPrice.
         * @member {number}costPrice
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.costPrice = 0;

        /**
         * NewGoods priceLadder.
         * @member {string}priceLadder
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.priceLadder = "";

        /**
         * NewGoods keywords.
         * @member {string}keywords
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.keywords = "";

        /**
         * NewGoods goodsRemark.
         * @member {string}goodsRemark
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.goodsRemark = "";

        /**
         * NewGoods goodsContent.
         * @member {string}goodsContent
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.goodsContent = "";

        /**
         * NewGoods originalImg.
         * @member {string}originalImg
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.originalImg = "";

        /**
         * NewGoods isReal.
         * @member {boolean}isReal
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.isReal = false;

        /**
         * NewGoods isOnSale.
         * @member {boolean}isOnSale
         * @memberof goods.NewGoods
         * @instance
         */
        NewGoods.prototype.isOnSale = false;

        /**
         * Creates a new NewGoods instance using the specified properties.
         * @function create
         * @memberof goods.NewGoods
         * @static
         * @param {goods.INewGoods=} [properties] Properties to set
         * @returns {goods.NewGoods} NewGoods instance
         */
        NewGoods.create = function create(properties) {
            return new NewGoods(properties);
        };

        /**
         * Encodes the specified NewGoods message. Does not implicitly {@link goods.NewGoods.verify|verify} messages.
         * @function encode
         * @memberof goods.NewGoods
         * @static
         * @param {goods.INewGoods} message NewGoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewGoods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iD != null && message.hasOwnProperty("iD"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iD);
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
            return writer;
        };

        /**
         * Encodes the specified NewGoods message, length delimited. Does not implicitly {@link goods.NewGoods.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goods.NewGoods
         * @static
         * @param {goods.INewGoods} message NewGoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewGoods.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewGoods message from the specified reader or buffer.
         * @function decode
         * @memberof goods.NewGoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goods.NewGoods} NewGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewGoods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.goods.NewGoods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iD = reader.uint32();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewGoods message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goods.NewGoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goods.NewGoods} NewGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewGoods.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewGoods message.
         * @function verify
         * @memberof goods.NewGoods
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewGoods.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iD != null && message.hasOwnProperty("iD"))
                if (!$util.isInteger(message.iD))
                    return "iD: integer expected";
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
            return null;
        };

        /**
         * Creates a NewGoods message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goods.NewGoods
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goods.NewGoods} NewGoods
         */
        NewGoods.fromObject = function fromObject(object) {
            if (object instanceof $root.goods.NewGoods)
                return object;
            var message = new $root.goods.NewGoods();
            if (object.iD != null)
                message.iD = object.iD >>> 0;
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
            return message;
        };

        /**
         * Creates a plain object from a NewGoods message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goods.NewGoods
         * @static
         * @param {goods.NewGoods} message NewGoods
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewGoods.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.iD = 0;
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
            }
            if (message.iD != null && message.hasOwnProperty("iD"))
                object.iD = message.iD;
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
            return object;
        };

        /**
         * Converts this NewGoods to JSON.
         * @function toJSON
         * @memberof goods.NewGoods
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewGoods.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewGoods;
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
         * @property {number} [iD] Recommend iD
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
         * Recommend iD.
         * @member {number}iD
         * @memberof goods.Recommend
         * @instance
         */
        Recommend.prototype.iD = 0;

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
            if (message.iD != null && message.hasOwnProperty("iD"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iD);
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
                    message.iD = reader.uint32();
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
            if (message.iD != null && message.hasOwnProperty("iD"))
                if (!$util.isInteger(message.iD))
                    return "iD: integer expected";
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
            if (object.iD != null)
                message.iD = object.iD >>> 0;
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
                object.iD = 0;
                object.catID = 0;
                object.goodsName = "";
                object.shopPrice = 0;
            }
            if (message.iD != null && message.hasOwnProperty("iD"))
                object.iD = message.iD;
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

    return goods;
})();

module.exports = $root;
