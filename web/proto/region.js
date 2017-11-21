/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.region = (function() {

    /**
     * Namespace region.
     * @exports region
     * @namespace
     */
    var region = {};

    region.Region = (function() {

        /**
         * Properties of a Region.
         * @memberof region
         * @interface IRegion
         * @property {number} [ID] Region ID
         * @property {string} [name] Region name
         * @property {number} [level] Region level
         * @property {number} [parentID] Region parentID
         */

        /**
         * Constructs a new Region.
         * @memberof region
         * @classdesc Represents a Region.
         * @constructor
         * @param {region.IRegion=} [properties] Properties to set
         */
        function Region(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Region ID.
         * @member {number}ID
         * @memberof region.Region
         * @instance
         */
        Region.prototype.ID = 0;

        /**
         * Region name.
         * @member {string}name
         * @memberof region.Region
         * @instance
         */
        Region.prototype.name = "";

        /**
         * Region level.
         * @member {number}level
         * @memberof region.Region
         * @instance
         */
        Region.prototype.level = 0;

        /**
         * Region parentID.
         * @member {number}parentID
         * @memberof region.Region
         * @instance
         */
        Region.prototype.parentID = 0;

        /**
         * Creates a new Region instance using the specified properties.
         * @function create
         * @memberof region.Region
         * @static
         * @param {region.IRegion=} [properties] Properties to set
         * @returns {region.Region} Region instance
         */
        Region.create = function create(properties) {
            return new Region(properties);
        };

        /**
         * Encodes the specified Region message. Does not implicitly {@link region.Region.verify|verify} messages.
         * @function encode
         * @memberof region.Region
         * @static
         * @param {region.IRegion} message Region message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Region.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.level);
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.parentID);
            return writer;
        };

        /**
         * Encodes the specified Region message, length delimited. Does not implicitly {@link region.Region.verify|verify} messages.
         * @function encodeDelimited
         * @memberof region.Region
         * @static
         * @param {region.IRegion} message Region message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Region.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Region message from the specified reader or buffer.
         * @function decode
         * @memberof region.Region
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {region.Region} Region
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Region.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.region.Region();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.level = reader.uint32();
                    break;
                case 4:
                    message.parentID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Region message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof region.Region
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {region.Region} Region
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Region.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Region message.
         * @function verify
         * @memberof region.Region
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Region.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                if (!$util.isInteger(message.parentID))
                    return "parentID: integer expected";
            return null;
        };

        /**
         * Creates a Region message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof region.Region
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {region.Region} Region
         */
        Region.fromObject = function fromObject(object) {
            if (object instanceof $root.region.Region)
                return object;
            var message = new $root.region.Region();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.parentID != null)
                message.parentID = object.parentID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Region message. Also converts values to other types if specified.
         * @function toObject
         * @memberof region.Region
         * @static
         * @param {region.Region} message Region
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Region.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.name = "";
                object.level = 0;
                object.parentID = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                object.parentID = message.parentID;
            return object;
        };

        /**
         * Converts this Region to JSON.
         * @function toJSON
         * @memberof region.Region
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Region.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Region;
    })();

    region.Children = (function() {

        /**
         * Properties of a Children.
         * @memberof region
         * @interface IChildren
         * @property {Array.<region.IRegion>} [regions] Children regions
         */

        /**
         * Constructs a new Children.
         * @memberof region
         * @classdesc Represents a Children.
         * @constructor
         * @param {region.IChildren=} [properties] Properties to set
         */
        function Children(properties) {
            this.regions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Children regions.
         * @member {Array.<region.IRegion>}regions
         * @memberof region.Children
         * @instance
         */
        Children.prototype.regions = $util.emptyArray;

        /**
         * Creates a new Children instance using the specified properties.
         * @function create
         * @memberof region.Children
         * @static
         * @param {region.IChildren=} [properties] Properties to set
         * @returns {region.Children} Children instance
         */
        Children.create = function create(properties) {
            return new Children(properties);
        };

        /**
         * Encodes the specified Children message. Does not implicitly {@link region.Children.verify|verify} messages.
         * @function encode
         * @memberof region.Children
         * @static
         * @param {region.IChildren} message Children message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Children.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.regions != null && message.regions.length)
                for (var i = 0; i < message.regions.length; ++i)
                    $root.region.Region.encode(message.regions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Children message, length delimited. Does not implicitly {@link region.Children.verify|verify} messages.
         * @function encodeDelimited
         * @memberof region.Children
         * @static
         * @param {region.IChildren} message Children message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Children.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Children message from the specified reader or buffer.
         * @function decode
         * @memberof region.Children
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {region.Children} Children
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Children.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.region.Children();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.regions && message.regions.length))
                        message.regions = [];
                    message.regions.push($root.region.Region.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Children message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof region.Children
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {region.Children} Children
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Children.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Children message.
         * @function verify
         * @memberof region.Children
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Children.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.regions != null && message.hasOwnProperty("regions")) {
                if (!Array.isArray(message.regions))
                    return "regions: array expected";
                for (var i = 0; i < message.regions.length; ++i) {
                    var error = $root.region.Region.verify(message.regions[i]);
                    if (error)
                        return "regions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Children message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof region.Children
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {region.Children} Children
         */
        Children.fromObject = function fromObject(object) {
            if (object instanceof $root.region.Children)
                return object;
            var message = new $root.region.Children();
            if (object.regions) {
                if (!Array.isArray(object.regions))
                    throw TypeError(".region.Children.regions: array expected");
                message.regions = [];
                for (var i = 0; i < object.regions.length; ++i) {
                    if (typeof object.regions[i] !== "object")
                        throw TypeError(".region.Children.regions: object expected");
                    message.regions[i] = $root.region.Region.fromObject(object.regions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Children message. Also converts values to other types if specified.
         * @function toObject
         * @memberof region.Children
         * @static
         * @param {region.Children} message Children
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Children.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.regions = [];
            if (message.regions && message.regions.length) {
                object.regions = [];
                for (var j = 0; j < message.regions.length; ++j)
                    object.regions[j] = $root.region.Region.toObject(message.regions[j], options);
            }
            return object;
        };

        /**
         * Converts this Children to JSON.
         * @function toJSON
         * @memberof region.Children
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Children.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Children;
    })();

    return region;
})();

module.exports = $root;
