/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.Address = (function() {

        /**
         * Properties of an Address.
         * @memberof user
         * @interface IAddress
         * @property {number} [ID] Address ID
         * @property {string} [consignee] Address consignee
         * @property {number} [country] Address country
         * @property {number} [province] Address province
         * @property {number} [city] Address city
         * @property {number} [district] Address district
         * @property {number} [twon] Address twon
         * @property {string} [address] Address address
         * @property {string} [zipcode] Address zipcode
         * @property {string} [mobile] Address mobile
         * @property {boolean} [isDefault] Address isDefault
         */

        /**
         * Constructs a new Address.
         * @memberof user
         * @classdesc Represents an Address.
         * @constructor
         * @param {user.IAddress=} [properties] Properties to set
         */
        function Address(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Address ID.
         * @member {number}ID
         * @memberof user.Address
         * @instance
         */
        Address.prototype.ID = 0;

        /**
         * Address consignee.
         * @member {string}consignee
         * @memberof user.Address
         * @instance
         */
        Address.prototype.consignee = "";

        /**
         * Address country.
         * @member {number}country
         * @memberof user.Address
         * @instance
         */
        Address.prototype.country = 0;

        /**
         * Address province.
         * @member {number}province
         * @memberof user.Address
         * @instance
         */
        Address.prototype.province = 0;

        /**
         * Address city.
         * @member {number}city
         * @memberof user.Address
         * @instance
         */
        Address.prototype.city = 0;

        /**
         * Address district.
         * @member {number}district
         * @memberof user.Address
         * @instance
         */
        Address.prototype.district = 0;

        /**
         * Address twon.
         * @member {number}twon
         * @memberof user.Address
         * @instance
         */
        Address.prototype.twon = 0;

        /**
         * Address address.
         * @member {string}address
         * @memberof user.Address
         * @instance
         */
        Address.prototype.address = "";

        /**
         * Address zipcode.
         * @member {string}zipcode
         * @memberof user.Address
         * @instance
         */
        Address.prototype.zipcode = "";

        /**
         * Address mobile.
         * @member {string}mobile
         * @memberof user.Address
         * @instance
         */
        Address.prototype.mobile = "";

        /**
         * Address isDefault.
         * @member {boolean}isDefault
         * @memberof user.Address
         * @instance
         */
        Address.prototype.isDefault = false;

        /**
         * Creates a new Address instance using the specified properties.
         * @function create
         * @memberof user.Address
         * @static
         * @param {user.IAddress=} [properties] Properties to set
         * @returns {user.Address} Address instance
         */
        Address.create = function create(properties) {
            return new Address(properties);
        };

        /**
         * Encodes the specified Address message. Does not implicitly {@link user.Address.verify|verify} messages.
         * @function encode
         * @memberof user.Address
         * @static
         * @param {user.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.consignee != null && message.hasOwnProperty("consignee"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.consignee);
            if (message.country != null && message.hasOwnProperty("country"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.country);
            if (message.province != null && message.hasOwnProperty("province"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.province);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.city);
            if (message.district != null && message.hasOwnProperty("district"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.district);
            if (message.twon != null && message.hasOwnProperty("twon"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.twon);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.address);
            if (message.zipcode != null && message.hasOwnProperty("zipcode"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.zipcode);
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.mobile);
            if (message.isDefault != null && message.hasOwnProperty("isDefault"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isDefault);
            return writer;
        };

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link user.Address.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.Address
         * @static
         * @param {user.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @function decode
         * @memberof user.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.Address();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.consignee = reader.string();
                    break;
                case 3:
                    message.country = reader.uint32();
                    break;
                case 4:
                    message.province = reader.uint32();
                    break;
                case 5:
                    message.city = reader.uint32();
                    break;
                case 6:
                    message.district = reader.uint32();
                    break;
                case 7:
                    message.twon = reader.uint32();
                    break;
                case 8:
                    message.address = reader.string();
                    break;
                case 9:
                    message.zipcode = reader.string();
                    break;
                case 10:
                    message.mobile = reader.string();
                    break;
                case 11:
                    message.isDefault = reader.bool();
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
         * @memberof user.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.Address} Address
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
         * @memberof user.Address
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Address.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.consignee != null && message.hasOwnProperty("consignee"))
                if (!$util.isString(message.consignee))
                    return "consignee: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isInteger(message.country))
                    return "country: integer expected";
            if (message.province != null && message.hasOwnProperty("province"))
                if (!$util.isInteger(message.province))
                    return "province: integer expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isInteger(message.city))
                    return "city: integer expected";
            if (message.district != null && message.hasOwnProperty("district"))
                if (!$util.isInteger(message.district))
                    return "district: integer expected";
            if (message.twon != null && message.hasOwnProperty("twon"))
                if (!$util.isInteger(message.twon))
                    return "twon: integer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.zipcode != null && message.hasOwnProperty("zipcode"))
                if (!$util.isString(message.zipcode))
                    return "zipcode: string expected";
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                if (!$util.isString(message.mobile))
                    return "mobile: string expected";
            if (message.isDefault != null && message.hasOwnProperty("isDefault"))
                if (typeof message.isDefault !== "boolean")
                    return "isDefault: boolean expected";
            return null;
        };

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.Address
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.Address} Address
         */
        Address.fromObject = function fromObject(object) {
            if (object instanceof $root.user.Address)
                return object;
            var message = new $root.user.Address();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.consignee != null)
                message.consignee = String(object.consignee);
            if (object.country != null)
                message.country = object.country >>> 0;
            if (object.province != null)
                message.province = object.province >>> 0;
            if (object.city != null)
                message.city = object.city >>> 0;
            if (object.district != null)
                message.district = object.district >>> 0;
            if (object.twon != null)
                message.twon = object.twon >>> 0;
            if (object.address != null)
                message.address = String(object.address);
            if (object.zipcode != null)
                message.zipcode = String(object.zipcode);
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.isDefault != null)
                message.isDefault = Boolean(object.isDefault);
            return message;
        };

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.Address
         * @static
         * @param {user.Address} message Address
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Address.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.consignee = "";
                object.country = 0;
                object.province = 0;
                object.city = 0;
                object.district = 0;
                object.twon = 0;
                object.address = "";
                object.zipcode = "";
                object.mobile = "";
                object.isDefault = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.consignee != null && message.hasOwnProperty("consignee"))
                object.consignee = message.consignee;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.province != null && message.hasOwnProperty("province"))
                object.province = message.province;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            if (message.district != null && message.hasOwnProperty("district"))
                object.district = message.district;
            if (message.twon != null && message.hasOwnProperty("twon"))
                object.twon = message.twon;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.zipcode != null && message.hasOwnProperty("zipcode"))
                object.zipcode = message.zipcode;
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.isDefault != null && message.hasOwnProperty("isDefault"))
                object.isDefault = message.isDefault;
            return object;
        };

        /**
         * Converts this Address to JSON.
         * @function toJSON
         * @memberof user.Address
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Address.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Address;
    })();

    user.AllAddress = (function() {

        /**
         * Properties of an AllAddress.
         * @memberof user
         * @interface IAllAddress
         * @property {Array.<user.IAddress>} [addresses] AllAddress addresses
         */

        /**
         * Constructs a new AllAddress.
         * @memberof user
         * @classdesc Represents an AllAddress.
         * @constructor
         * @param {user.IAllAddress=} [properties] Properties to set
         */
        function AllAddress(properties) {
            this.addresses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllAddress addresses.
         * @member {Array.<user.IAddress>}addresses
         * @memberof user.AllAddress
         * @instance
         */
        AllAddress.prototype.addresses = $util.emptyArray;

        /**
         * Creates a new AllAddress instance using the specified properties.
         * @function create
         * @memberof user.AllAddress
         * @static
         * @param {user.IAllAddress=} [properties] Properties to set
         * @returns {user.AllAddress} AllAddress instance
         */
        AllAddress.create = function create(properties) {
            return new AllAddress(properties);
        };

        /**
         * Encodes the specified AllAddress message. Does not implicitly {@link user.AllAddress.verify|verify} messages.
         * @function encode
         * @memberof user.AllAddress
         * @static
         * @param {user.IAllAddress} message AllAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllAddress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addresses != null && message.addresses.length)
                for (var i = 0; i < message.addresses.length; ++i)
                    $root.user.Address.encode(message.addresses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AllAddress message, length delimited. Does not implicitly {@link user.AllAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.AllAddress
         * @static
         * @param {user.IAllAddress} message AllAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllAddress message from the specified reader or buffer.
         * @function decode
         * @memberof user.AllAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.AllAddress} AllAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllAddress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.AllAddress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.addresses && message.addresses.length))
                        message.addresses = [];
                    message.addresses.push($root.user.Address.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.AllAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.AllAddress} AllAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllAddress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllAddress message.
         * @function verify
         * @memberof user.AllAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllAddress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addresses != null && message.hasOwnProperty("addresses")) {
                if (!Array.isArray(message.addresses))
                    return "addresses: array expected";
                for (var i = 0; i < message.addresses.length; ++i) {
                    var error = $root.user.Address.verify(message.addresses[i]);
                    if (error)
                        return "addresses." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AllAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.AllAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.AllAddress} AllAddress
         */
        AllAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.user.AllAddress)
                return object;
            var message = new $root.user.AllAddress();
            if (object.addresses) {
                if (!Array.isArray(object.addresses))
                    throw TypeError(".user.AllAddress.addresses: array expected");
                message.addresses = [];
                for (var i = 0; i < object.addresses.length; ++i) {
                    if (typeof object.addresses[i] !== "object")
                        throw TypeError(".user.AllAddress.addresses: object expected");
                    message.addresses[i] = $root.user.Address.fromObject(object.addresses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AllAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.AllAddress
         * @static
         * @param {user.AllAddress} message AllAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllAddress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.addresses = [];
            if (message.addresses && message.addresses.length) {
                object.addresses = [];
                for (var j = 0; j < message.addresses.length; ++j)
                    object.addresses[j] = $root.user.Address.toObject(message.addresses[j], options);
            }
            return object;
        };

        /**
         * Converts this AllAddress to JSON.
         * @function toJSON
         * @memberof user.AllAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllAddress;
    })();

    return user;
})();

module.exports = $root;
