/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf.min");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ad = (function() {

    /**
     * Namespace ad.
     * @exports ad
     * @namespace
     */
    var ad = {};

    ad.Ad = (function() {

        /**
         * Properties of an Ad.
         * @memberof ad
         * @interface IAd
         * @property {number} [pID] Ad pID
         * @property {number} [mediaType] Ad mediaType
         * @property {string} [adName] Ad adName
         * @property {string} [adLink] Ad adLink
         * @property {string} [adCode] Ad adCode
         */

        /**
         * Constructs a new Ad.
         * @memberof ad
         * @classdesc Represents an Ad.
         * @constructor
         * @param {ad.IAd=} [properties] Properties to set
         */
        function Ad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ad pID.
         * @member {number}pID
         * @memberof ad.Ad
         * @instance
         */
        Ad.prototype.pID = 0;

        /**
         * Ad mediaType.
         * @member {number}mediaType
         * @memberof ad.Ad
         * @instance
         */
        Ad.prototype.mediaType = 0;

        /**
         * Ad adName.
         * @member {string}adName
         * @memberof ad.Ad
         * @instance
         */
        Ad.prototype.adName = "";

        /**
         * Ad adLink.
         * @member {string}adLink
         * @memberof ad.Ad
         * @instance
         */
        Ad.prototype.adLink = "";

        /**
         * Ad adCode.
         * @member {string}adCode
         * @memberof ad.Ad
         * @instance
         */
        Ad.prototype.adCode = "";

        /**
         * Creates a new Ad instance using the specified properties.
         * @function create
         * @memberof ad.Ad
         * @static
         * @param {ad.IAd=} [properties] Properties to set
         * @returns {ad.Ad} Ad instance
         */
        Ad.create = function create(properties) {
            return new Ad(properties);
        };

        /**
         * Encodes the specified Ad message. Does not implicitly {@link ad.Ad.verify|verify} messages.
         * @function encode
         * @memberof ad.Ad
         * @static
         * @param {ad.IAd} message Ad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pID != null && message.hasOwnProperty("pID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pID);
            if (message.mediaType != null && message.hasOwnProperty("mediaType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mediaType);
            if (message.adName != null && message.hasOwnProperty("adName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.adName);
            if (message.adLink != null && message.hasOwnProperty("adLink"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.adLink);
            if (message.adCode != null && message.hasOwnProperty("adCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.adCode);
            return writer;
        };

        /**
         * Encodes the specified Ad message, length delimited. Does not implicitly {@link ad.Ad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.Ad
         * @static
         * @param {ad.IAd} message Ad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ad message from the specified reader or buffer.
         * @function decode
         * @memberof ad.Ad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.Ad} Ad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.Ad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pID = reader.uint32();
                    break;
                case 2:
                    message.mediaType = reader.uint32();
                    break;
                case 3:
                    message.adName = reader.string();
                    break;
                case 4:
                    message.adLink = reader.string();
                    break;
                case 5:
                    message.adCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.Ad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.Ad} Ad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ad message.
         * @function verify
         * @memberof ad.Ad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pID != null && message.hasOwnProperty("pID"))
                if (!$util.isInteger(message.pID))
                    return "pID: integer expected";
            if (message.mediaType != null && message.hasOwnProperty("mediaType"))
                if (!$util.isInteger(message.mediaType))
                    return "mediaType: integer expected";
            if (message.adName != null && message.hasOwnProperty("adName"))
                if (!$util.isString(message.adName))
                    return "adName: string expected";
            if (message.adLink != null && message.hasOwnProperty("adLink"))
                if (!$util.isString(message.adLink))
                    return "adLink: string expected";
            if (message.adCode != null && message.hasOwnProperty("adCode"))
                if (!$util.isString(message.adCode))
                    return "adCode: string expected";
            return null;
        };

        /**
         * Creates an Ad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.Ad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.Ad} Ad
         */
        Ad.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.Ad)
                return object;
            var message = new $root.ad.Ad();
            if (object.pID != null)
                message.pID = object.pID >>> 0;
            if (object.mediaType != null)
                message.mediaType = object.mediaType >>> 0;
            if (object.adName != null)
                message.adName = String(object.adName);
            if (object.adLink != null)
                message.adLink = String(object.adLink);
            if (object.adCode != null)
                message.adCode = String(object.adCode);
            return message;
        };

        /**
         * Creates a plain object from an Ad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.Ad
         * @static
         * @param {ad.Ad} message Ad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pID = 0;
                object.mediaType = 0;
                object.adName = "";
                object.adLink = "";
                object.adCode = "";
            }
            if (message.pID != null && message.hasOwnProperty("pID"))
                object.pID = message.pID;
            if (message.mediaType != null && message.hasOwnProperty("mediaType"))
                object.mediaType = message.mediaType;
            if (message.adName != null && message.hasOwnProperty("adName"))
                object.adName = message.adName;
            if (message.adLink != null && message.hasOwnProperty("adLink"))
                object.adLink = message.adLink;
            if (message.adCode != null && message.hasOwnProperty("adCode"))
                object.adCode = message.adCode;
            return object;
        };

        /**
         * Converts this Ad to JSON.
         * @function toJSON
         * @memberof ad.Ad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ad;
    })();

    ad.HomeBannerAds = (function() {

        /**
         * Properties of a HomeBannerAds.
         * @memberof ad
         * @interface IHomeBannerAds
         * @property {Array.<ad.IAd>} [ads] HomeBannerAds ads
         */

        /**
         * Constructs a new HomeBannerAds.
         * @memberof ad
         * @classdesc Represents a HomeBannerAds.
         * @constructor
         * @param {ad.IHomeBannerAds=} [properties] Properties to set
         */
        function HomeBannerAds(properties) {
            this.ads = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HomeBannerAds ads.
         * @member {Array.<ad.IAd>}ads
         * @memberof ad.HomeBannerAds
         * @instance
         */
        HomeBannerAds.prototype.ads = $util.emptyArray;

        /**
         * Creates a new HomeBannerAds instance using the specified properties.
         * @function create
         * @memberof ad.HomeBannerAds
         * @static
         * @param {ad.IHomeBannerAds=} [properties] Properties to set
         * @returns {ad.HomeBannerAds} HomeBannerAds instance
         */
        HomeBannerAds.create = function create(properties) {
            return new HomeBannerAds(properties);
        };

        /**
         * Encodes the specified HomeBannerAds message. Does not implicitly {@link ad.HomeBannerAds.verify|verify} messages.
         * @function encode
         * @memberof ad.HomeBannerAds
         * @static
         * @param {ad.IHomeBannerAds} message HomeBannerAds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomeBannerAds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ads != null && message.ads.length)
                for (var i = 0; i < message.ads.length; ++i)
                    $root.ad.Ad.encode(message.ads[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HomeBannerAds message, length delimited. Does not implicitly {@link ad.HomeBannerAds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.HomeBannerAds
         * @static
         * @param {ad.IHomeBannerAds} message HomeBannerAds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomeBannerAds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HomeBannerAds message from the specified reader or buffer.
         * @function decode
         * @memberof ad.HomeBannerAds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.HomeBannerAds} HomeBannerAds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomeBannerAds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.HomeBannerAds();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ads && message.ads.length))
                        message.ads = [];
                    message.ads.push($root.ad.Ad.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HomeBannerAds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.HomeBannerAds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.HomeBannerAds} HomeBannerAds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomeBannerAds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HomeBannerAds message.
         * @function verify
         * @memberof ad.HomeBannerAds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HomeBannerAds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ads != null && message.hasOwnProperty("ads")) {
                if (!Array.isArray(message.ads))
                    return "ads: array expected";
                for (var i = 0; i < message.ads.length; ++i) {
                    var error = $root.ad.Ad.verify(message.ads[i]);
                    if (error)
                        return "ads." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HomeBannerAds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.HomeBannerAds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.HomeBannerAds} HomeBannerAds
         */
        HomeBannerAds.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.HomeBannerAds)
                return object;
            var message = new $root.ad.HomeBannerAds();
            if (object.ads) {
                if (!Array.isArray(object.ads))
                    throw TypeError(".ad.HomeBannerAds.ads: array expected");
                message.ads = [];
                for (var i = 0; i < object.ads.length; ++i) {
                    if (typeof object.ads[i] !== "object")
                        throw TypeError(".ad.HomeBannerAds.ads: object expected");
                    message.ads[i] = $root.ad.Ad.fromObject(object.ads[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HomeBannerAds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.HomeBannerAds
         * @static
         * @param {ad.HomeBannerAds} message HomeBannerAds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HomeBannerAds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ads = [];
            if (message.ads && message.ads.length) {
                object.ads = [];
                for (var j = 0; j < message.ads.length; ++j)
                    object.ads[j] = $root.ad.Ad.toObject(message.ads[j], options);
            }
            return object;
        };

        /**
         * Converts this HomeBannerAds to JSON.
         * @function toJSON
         * @memberof ad.HomeBannerAds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HomeBannerAds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HomeBannerAds;
    })();

    return ad;
})();

module.exports = $root;
