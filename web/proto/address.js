/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.address = (function() {

    /**
     * Namespace address.
     * @exports address
     * @namespace
     */
    var address = {};

    address.Address = (function() {

        /**
         * Properties of an Address.
         * @memberof address
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
         * @property {string} [provinceStr] Address provinceStr
         * @property {string} [cityStr] Address cityStr
         * @property {string} [districtStr] Address districtStr
         * @property {string} [twonStr] Address twonStr
         */

        /**
         * Constructs a new Address.
         * @memberof address
         * @classdesc Represents an Address.
         * @constructor
         * @param {address.IAddress=} [properties] Properties to set
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
         * @memberof address.Address
         * @instance
         */
        Address.prototype.ID = 0;

        /**
         * Address consignee.
         * @member {string}consignee
         * @memberof address.Address
         * @instance
         */
        Address.prototype.consignee = "";

        /**
         * Address country.
         * @member {number}country
         * @memberof address.Address
         * @instance
         */
        Address.prototype.country = 0;

        /**
         * Address province.
         * @member {number}province
         * @memberof address.Address
         * @instance
         */
        Address.prototype.province = 0;

        /**
         * Address city.
         * @member {number}city
         * @memberof address.Address
         * @instance
         */
        Address.prototype.city = 0;

        /**
         * Address district.
         * @member {number}district
         * @memberof address.Address
         * @instance
         */
        Address.prototype.district = 0;

        /**
         * Address twon.
         * @member {number}twon
         * @memberof address.Address
         * @instance
         */
        Address.prototype.twon = 0;

        /**
         * Address address.
         * @member {string}address
         * @memberof address.Address
         * @instance
         */
        Address.prototype.address = "";

        /**
         * Address zipcode.
         * @member {string}zipcode
         * @memberof address.Address
         * @instance
         */
        Address.prototype.zipcode = "";

        /**
         * Address mobile.
         * @member {string}mobile
         * @memberof address.Address
         * @instance
         */
        Address.prototype.mobile = "";

        /**
         * Address isDefault.
         * @member {boolean}isDefault
         * @memberof address.Address
         * @instance
         */
        Address.prototype.isDefault = false;

        /**
         * Address provinceStr.
         * @member {string}provinceStr
         * @memberof address.Address
         * @instance
         */
        Address.prototype.provinceStr = "";

        /**
         * Address cityStr.
         * @member {string}cityStr
         * @memberof address.Address
         * @instance
         */
        Address.prototype.cityStr = "";

        /**
         * Address districtStr.
         * @member {string}districtStr
         * @memberof address.Address
         * @instance
         */
        Address.prototype.districtStr = "";

        /**
         * Address twonStr.
         * @member {string}twonStr
         * @memberof address.Address
         * @instance
         */
        Address.prototype.twonStr = "";

        /**
         * Creates a new Address instance using the specified properties.
         * @function create
         * @memberof address.Address
         * @static
         * @param {address.IAddress=} [properties] Properties to set
         * @returns {address.Address} Address instance
         */
        Address.create = function create(properties) {
            return new Address(properties);
        };

        /**
         * Encodes the specified Address message. Does not implicitly {@link address.Address.verify|verify} messages.
         * @function encode
         * @memberof address.Address
         * @static
         * @param {address.IAddress} message Address message or plain object to encode
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
            if (message.provinceStr != null && message.hasOwnProperty("provinceStr"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.provinceStr);
            if (message.cityStr != null && message.hasOwnProperty("cityStr"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.cityStr);
            if (message.districtStr != null && message.hasOwnProperty("districtStr"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.districtStr);
            if (message.twonStr != null && message.hasOwnProperty("twonStr"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.twonStr);
            return writer;
        };

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link address.Address.verify|verify} messages.
         * @function encodeDelimited
         * @memberof address.Address
         * @static
         * @param {address.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @function decode
         * @memberof address.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {address.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.address.Address();
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
                case 12:
                    message.provinceStr = reader.string();
                    break;
                case 13:
                    message.cityStr = reader.string();
                    break;
                case 14:
                    message.districtStr = reader.string();
                    break;
                case 15:
                    message.twonStr = reader.string();
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
         * @memberof address.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {address.Address} Address
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
         * @memberof address.Address
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
            return null;
        };

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof address.Address
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {address.Address} Address
         */
        Address.fromObject = function fromObject(object) {
            if (object instanceof $root.address.Address)
                return object;
            var message = new $root.address.Address();
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
            if (object.provinceStr != null)
                message.provinceStr = String(object.provinceStr);
            if (object.cityStr != null)
                message.cityStr = String(object.cityStr);
            if (object.districtStr != null)
                message.districtStr = String(object.districtStr);
            if (object.twonStr != null)
                message.twonStr = String(object.twonStr);
            return message;
        };

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @function toObject
         * @memberof address.Address
         * @static
         * @param {address.Address} message Address
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
                object.provinceStr = "";
                object.cityStr = "";
                object.districtStr = "";
                object.twonStr = "";
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
            if (message.provinceStr != null && message.hasOwnProperty("provinceStr"))
                object.provinceStr = message.provinceStr;
            if (message.cityStr != null && message.hasOwnProperty("cityStr"))
                object.cityStr = message.cityStr;
            if (message.districtStr != null && message.hasOwnProperty("districtStr"))
                object.districtStr = message.districtStr;
            if (message.twonStr != null && message.hasOwnProperty("twonStr"))
                object.twonStr = message.twonStr;
            return object;
        };

        /**
         * Converts this Address to JSON.
         * @function toJSON
         * @memberof address.Address
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Address.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Address;
    })();

    address.AllAddress = (function() {

        /**
         * Properties of an AllAddress.
         * @memberof address
         * @interface IAllAddress
         * @property {Array.<address.IAddress>} [addresses] AllAddress addresses
         */

        /**
         * Constructs a new AllAddress.
         * @memberof address
         * @classdesc Represents an AllAddress.
         * @constructor
         * @param {address.IAllAddress=} [properties] Properties to set
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
         * @member {Array.<address.IAddress>}addresses
         * @memberof address.AllAddress
         * @instance
         */
        AllAddress.prototype.addresses = $util.emptyArray;

        /**
         * Creates a new AllAddress instance using the specified properties.
         * @function create
         * @memberof address.AllAddress
         * @static
         * @param {address.IAllAddress=} [properties] Properties to set
         * @returns {address.AllAddress} AllAddress instance
         */
        AllAddress.create = function create(properties) {
            return new AllAddress(properties);
        };

        /**
         * Encodes the specified AllAddress message. Does not implicitly {@link address.AllAddress.verify|verify} messages.
         * @function encode
         * @memberof address.AllAddress
         * @static
         * @param {address.IAllAddress} message AllAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllAddress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addresses != null && message.addresses.length)
                for (var i = 0; i < message.addresses.length; ++i)
                    $root.address.Address.encode(message.addresses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AllAddress message, length delimited. Does not implicitly {@link address.AllAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof address.AllAddress
         * @static
         * @param {address.IAllAddress} message AllAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllAddress message from the specified reader or buffer.
         * @function decode
         * @memberof address.AllAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {address.AllAddress} AllAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllAddress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.address.AllAddress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.addresses && message.addresses.length))
                        message.addresses = [];
                    message.addresses.push($root.address.Address.decode(reader, reader.uint32()));
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
         * @memberof address.AllAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {address.AllAddress} AllAddress
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
         * @memberof address.AllAddress
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
                    var error = $root.address.Address.verify(message.addresses[i]);
                    if (error)
                        return "addresses." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AllAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof address.AllAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {address.AllAddress} AllAddress
         */
        AllAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.address.AllAddress)
                return object;
            var message = new $root.address.AllAddress();
            if (object.addresses) {
                if (!Array.isArray(object.addresses))
                    throw TypeError(".address.AllAddress.addresses: array expected");
                message.addresses = [];
                for (var i = 0; i < object.addresses.length; ++i) {
                    if (typeof object.addresses[i] !== "object")
                        throw TypeError(".address.AllAddress.addresses: object expected");
                    message.addresses[i] = $root.address.Address.fromObject(object.addresses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AllAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof address.AllAddress
         * @static
         * @param {address.AllAddress} message AllAddress
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
                    object.addresses[j] = $root.address.Address.toObject(message.addresses[j], options);
            }
            return object;
        };

        /**
         * Converts this AllAddress to JSON.
         * @function toJSON
         * @memberof address.AllAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllAddress;
    })();

    address.CreateParam = (function() {

        /**
         * Properties of a CreateParam.
         * @memberof address
         * @interface ICreateParam
         * @property {address.IAddress} [address] CreateParam address
         */

        /**
         * Constructs a new CreateParam.
         * @memberof address
         * @classdesc Represents a CreateParam.
         * @constructor
         * @param {address.ICreateParam=} [properties] Properties to set
         */
        function CreateParam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateParam address.
         * @member {(address.IAddress|null|undefined)}address
         * @memberof address.CreateParam
         * @instance
         */
        CreateParam.prototype.address = null;

        /**
         * Creates a new CreateParam instance using the specified properties.
         * @function create
         * @memberof address.CreateParam
         * @static
         * @param {address.ICreateParam=} [properties] Properties to set
         * @returns {address.CreateParam} CreateParam instance
         */
        CreateParam.create = function create(properties) {
            return new CreateParam(properties);
        };

        /**
         * Encodes the specified CreateParam message. Does not implicitly {@link address.CreateParam.verify|verify} messages.
         * @function encode
         * @memberof address.CreateParam
         * @static
         * @param {address.ICreateParam} message CreateParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                $root.address.Address.encode(message.address, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateParam message, length delimited. Does not implicitly {@link address.CreateParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof address.CreateParam
         * @static
         * @param {address.ICreateParam} message CreateParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateParam message from the specified reader or buffer.
         * @function decode
         * @memberof address.CreateParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {address.CreateParam} CreateParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.address.CreateParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = $root.address.Address.decode(reader, reader.uint32());
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
         * @memberof address.CreateParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {address.CreateParam} CreateParam
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
         * @memberof address.CreateParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address")) {
                var error = $root.address.Address.verify(message.address);
                if (error)
                    return "address." + error;
            }
            return null;
        };

        /**
         * Creates a CreateParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof address.CreateParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {address.CreateParam} CreateParam
         */
        CreateParam.fromObject = function fromObject(object) {
            if (object instanceof $root.address.CreateParam)
                return object;
            var message = new $root.address.CreateParam();
            if (object.address != null) {
                if (typeof object.address !== "object")
                    throw TypeError(".address.CreateParam.address: object expected");
                message.address = $root.address.Address.fromObject(object.address);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof address.CreateParam
         * @static
         * @param {address.CreateParam} message CreateParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.address = null;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = $root.address.Address.toObject(message.address, options);
            return object;
        };

        /**
         * Converts this CreateParam to JSON.
         * @function toJSON
         * @memberof address.CreateParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateParam;
    })();

    return address;
})();

module.exports = $root;
