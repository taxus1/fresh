/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

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

    user.DefaultAddress = (function() {

        /**
         * Properties of a DefaultAddress.
         * @memberof user
         * @interface IDefaultAddress
         * @property {number} [ID] DefaultAddress ID
         * @property {string} [consignee] DefaultAddress consignee
         * @property {number} [country] DefaultAddress country
         * @property {number} [province] DefaultAddress province
         * @property {number} [city] DefaultAddress city
         * @property {number} [district] DefaultAddress district
         * @property {number} [twon] DefaultAddress twon
         * @property {string} [address] DefaultAddress address
         * @property {string} [zipcode] DefaultAddress zipcode
         * @property {string} [mobile] DefaultAddress mobile
         */

        /**
         * Constructs a new DefaultAddress.
         * @memberof user
         * @classdesc Represents a DefaultAddress.
         * @constructor
         * @param {user.IDefaultAddress=} [properties] Properties to set
         */
        function DefaultAddress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefaultAddress ID.
         * @member {number}ID
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.ID = 0;

        /**
         * DefaultAddress consignee.
         * @member {string}consignee
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.consignee = "";

        /**
         * DefaultAddress country.
         * @member {number}country
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.country = 0;

        /**
         * DefaultAddress province.
         * @member {number}province
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.province = 0;

        /**
         * DefaultAddress city.
         * @member {number}city
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.city = 0;

        /**
         * DefaultAddress district.
         * @member {number}district
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.district = 0;

        /**
         * DefaultAddress twon.
         * @member {number}twon
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.twon = 0;

        /**
         * DefaultAddress address.
         * @member {string}address
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.address = "";

        /**
         * DefaultAddress zipcode.
         * @member {string}zipcode
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.zipcode = "";

        /**
         * DefaultAddress mobile.
         * @member {string}mobile
         * @memberof user.DefaultAddress
         * @instance
         */
        DefaultAddress.prototype.mobile = "";

        /**
         * Creates a new DefaultAddress instance using the specified properties.
         * @function create
         * @memberof user.DefaultAddress
         * @static
         * @param {user.IDefaultAddress=} [properties] Properties to set
         * @returns {user.DefaultAddress} DefaultAddress instance
         */
        DefaultAddress.create = function create(properties) {
            return new DefaultAddress(properties);
        };

        /**
         * Encodes the specified DefaultAddress message. Does not implicitly {@link user.DefaultAddress.verify|verify} messages.
         * @function encode
         * @memberof user.DefaultAddress
         * @static
         * @param {user.IDefaultAddress} message DefaultAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefaultAddress.encode = function encode(message, writer) {
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
            return writer;
        };

        /**
         * Encodes the specified DefaultAddress message, length delimited. Does not implicitly {@link user.DefaultAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.DefaultAddress
         * @static
         * @param {user.IDefaultAddress} message DefaultAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefaultAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefaultAddress message from the specified reader or buffer.
         * @function decode
         * @memberof user.DefaultAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.DefaultAddress} DefaultAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefaultAddress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.DefaultAddress();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DefaultAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.DefaultAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.DefaultAddress} DefaultAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefaultAddress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefaultAddress message.
         * @function verify
         * @memberof user.DefaultAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefaultAddress.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a DefaultAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.DefaultAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.DefaultAddress} DefaultAddress
         */
        DefaultAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.user.DefaultAddress)
                return object;
            var message = new $root.user.DefaultAddress();
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
            return message;
        };

        /**
         * Creates a plain object from a DefaultAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.DefaultAddress
         * @static
         * @param {user.DefaultAddress} message DefaultAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefaultAddress.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this DefaultAddress to JSON.
         * @function toJSON
         * @memberof user.DefaultAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefaultAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DefaultAddress;
    })();

    return user;
})();

module.exports = $root;
