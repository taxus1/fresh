/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.category = (function() {

    /**
     * Namespace category.
     * @exports category
     * @namespace
     */
    var category = {};

    category.CategoryResult = (function() {

        /**
         * Properties of a CategoryResult.
         * @memberof category
         * @interface ICategoryResult
         * @property {Array.<category.ICategory>} [categories] CategoryResult categories
         */

        /**
         * Constructs a new CategoryResult.
         * @memberof category
         * @classdesc Represents a CategoryResult.
         * @constructor
         * @param {category.ICategoryResult=} [properties] Properties to set
         */
        function CategoryResult(properties) {
            this.categories = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CategoryResult categories.
         * @member {Array.<category.ICategory>}categories
         * @memberof category.CategoryResult
         * @instance
         */
        CategoryResult.prototype.categories = $util.emptyArray;

        /**
         * Creates a new CategoryResult instance using the specified properties.
         * @function create
         * @memberof category.CategoryResult
         * @static
         * @param {category.ICategoryResult=} [properties] Properties to set
         * @returns {category.CategoryResult} CategoryResult instance
         */
        CategoryResult.create = function create(properties) {
            return new CategoryResult(properties);
        };

        /**
         * Encodes the specified CategoryResult message. Does not implicitly {@link category.CategoryResult.verify|verify} messages.
         * @function encode
         * @memberof category.CategoryResult
         * @static
         * @param {category.ICategoryResult} message CategoryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CategoryResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.categories != null && message.categories.length)
                for (var i = 0; i < message.categories.length; ++i)
                    $root.category.Category.encode(message.categories[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CategoryResult message, length delimited. Does not implicitly {@link category.CategoryResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.CategoryResult
         * @static
         * @param {category.ICategoryResult} message CategoryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CategoryResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CategoryResult message from the specified reader or buffer.
         * @function decode
         * @memberof category.CategoryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.CategoryResult} CategoryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CategoryResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.CategoryResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.categories && message.categories.length))
                        message.categories = [];
                    message.categories.push($root.category.Category.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CategoryResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.CategoryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.CategoryResult} CategoryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CategoryResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CategoryResult message.
         * @function verify
         * @memberof category.CategoryResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CategoryResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i) {
                    var error = $root.category.Category.verify(message.categories[i]);
                    if (error)
                        return "categories." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CategoryResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.CategoryResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.CategoryResult} CategoryResult
         */
        CategoryResult.fromObject = function fromObject(object) {
            if (object instanceof $root.category.CategoryResult)
                return object;
            var message = new $root.category.CategoryResult();
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".category.CategoryResult.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i) {
                    if (typeof object.categories[i] !== "object")
                        throw TypeError(".category.CategoryResult.categories: object expected");
                    message.categories[i] = $root.category.Category.fromObject(object.categories[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CategoryResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.CategoryResult
         * @static
         * @param {category.CategoryResult} message CategoryResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CategoryResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.categories = [];
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    object.categories[j] = $root.category.Category.toObject(message.categories[j], options);
            }
            return object;
        };

        /**
         * Converts this CategoryResult to JSON.
         * @function toJSON
         * @memberof category.CategoryResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CategoryResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CategoryResult;
    })();

    category.Category = (function() {

        /**
         * Properties of a Category.
         * @memberof category
         * @interface ICategory
         * @property {number} [iD] Category iD
         * @property {string} [mobileName] Category mobileName
         */

        /**
         * Constructs a new Category.
         * @memberof category
         * @classdesc Represents a Category.
         * @constructor
         * @param {category.ICategory=} [properties] Properties to set
         */
        function Category(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Category iD.
         * @member {number}iD
         * @memberof category.Category
         * @instance
         */
        Category.prototype.iD = 0;

        /**
         * Category mobileName.
         * @member {string}mobileName
         * @memberof category.Category
         * @instance
         */
        Category.prototype.mobileName = "";

        /**
         * Creates a new Category instance using the specified properties.
         * @function create
         * @memberof category.Category
         * @static
         * @param {category.ICategory=} [properties] Properties to set
         * @returns {category.Category} Category instance
         */
        Category.create = function create(properties) {
            return new Category(properties);
        };

        /**
         * Encodes the specified Category message. Does not implicitly {@link category.Category.verify|verify} messages.
         * @function encode
         * @memberof category.Category
         * @static
         * @param {category.ICategory} message Category message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Category.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iD != null && message.hasOwnProperty("iD"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iD);
            if (message.mobileName != null && message.hasOwnProperty("mobileName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mobileName);
            return writer;
        };

        /**
         * Encodes the specified Category message, length delimited. Does not implicitly {@link category.Category.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.Category
         * @static
         * @param {category.ICategory} message Category message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Category.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Category message from the specified reader or buffer.
         * @function decode
         * @memberof category.Category
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.Category} Category
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Category.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.Category();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iD = reader.uint32();
                    break;
                case 2:
                    message.mobileName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Category message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.Category
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.Category} Category
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Category.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Category message.
         * @function verify
         * @memberof category.Category
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Category.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iD != null && message.hasOwnProperty("iD"))
                if (!$util.isInteger(message.iD))
                    return "iD: integer expected";
            if (message.mobileName != null && message.hasOwnProperty("mobileName"))
                if (!$util.isString(message.mobileName))
                    return "mobileName: string expected";
            return null;
        };

        /**
         * Creates a Category message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.Category
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.Category} Category
         */
        Category.fromObject = function fromObject(object) {
            if (object instanceof $root.category.Category)
                return object;
            var message = new $root.category.Category();
            if (object.iD != null)
                message.iD = object.iD >>> 0;
            if (object.mobileName != null)
                message.mobileName = String(object.mobileName);
            return message;
        };

        /**
         * Creates a plain object from a Category message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.Category
         * @static
         * @param {category.Category} message Category
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Category.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.iD = 0;
                object.mobileName = "";
            }
            if (message.iD != null && message.hasOwnProperty("iD"))
                object.iD = message.iD;
            if (message.mobileName != null && message.hasOwnProperty("mobileName"))
                object.mobileName = message.mobileName;
            return object;
        };

        /**
         * Converts this Category to JSON.
         * @function toJSON
         * @memberof category.Category
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Category.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Category;
    })();

    return category;
})();

module.exports = $root;
