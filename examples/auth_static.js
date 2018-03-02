/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.access = (function() {

    /**
     * Namespace access.
     * @exports access
     * @namespace
     */
    var access = {};

    access.AuthTokenReq = (function() {

        /**
         * Properties of an AuthTokenReq.
         * @memberof access
         * @interface IAuthTokenReq
         * @property {string|null} [appId] AuthTokenReq appId
         * @property {user.IUserInfo|null} [user] AuthTokenReq user
         * @property {string|null} [sign] AuthTokenReq sign
         */

        /**
         * Constructs a new AuthTokenReq.
         * @memberof access
         * @classdesc Represents an AuthTokenReq.
         * @implements IAuthTokenReq
         * @constructor
         * @param {access.IAuthTokenReq=} [properties] Properties to set
         */
        function AuthTokenReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthTokenReq appId.
         * @member {string} appId
         * @memberof access.AuthTokenReq
         * @instance
         */
        AuthTokenReq.prototype.appId = "";

        /**
         * AuthTokenReq user.
         * @member {user.IUserInfo|null|undefined} user
         * @memberof access.AuthTokenReq
         * @instance
         */
        AuthTokenReq.prototype.user = null;

        /**
         * AuthTokenReq sign.
         * @member {string} sign
         * @memberof access.AuthTokenReq
         * @instance
         */
        AuthTokenReq.prototype.sign = "";

        /**
         * Creates a new AuthTokenReq instance using the specified properties.
         * @function create
         * @memberof access.AuthTokenReq
         * @static
         * @param {access.IAuthTokenReq=} [properties] Properties to set
         * @returns {access.AuthTokenReq} AuthTokenReq instance
         */
        AuthTokenReq.create = function create(properties) {
            return new AuthTokenReq(properties);
        };

        /**
         * Encodes the specified AuthTokenReq message. Does not implicitly {@link access.AuthTokenReq.verify|verify} messages.
         * @function encode
         * @memberof access.AuthTokenReq
         * @static
         * @param {access.IAuthTokenReq} message AuthTokenReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthTokenReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.user.UserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sign);
            return writer;
        };

        /**
         * Encodes the specified AuthTokenReq message, length delimited. Does not implicitly {@link access.AuthTokenReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof access.AuthTokenReq
         * @static
         * @param {access.IAuthTokenReq} message AuthTokenReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthTokenReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthTokenReq message from the specified reader or buffer.
         * @function decode
         * @memberof access.AuthTokenReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {access.AuthTokenReq} AuthTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthTokenReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.access.AuthTokenReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.user = $root.user.UserInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sign = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthTokenReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof access.AuthTokenReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {access.AuthTokenReq} AuthTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthTokenReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthTokenReq message.
         * @function verify
         * @memberof access.AuthTokenReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthTokenReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.user.UserInfo.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            return null;
        };

        /**
         * Creates an AuthTokenReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof access.AuthTokenReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {access.AuthTokenReq} AuthTokenReq
         */
        AuthTokenReq.fromObject = function fromObject(object) {
            if (object instanceof $root.access.AuthTokenReq)
                return object;
            var message = new $root.access.AuthTokenReq();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".access.AuthTokenReq.user: object expected");
                message.user = $root.user.UserInfo.fromObject(object.user);
            }
            if (object.sign != null)
                message.sign = String(object.sign);
            return message;
        };

        /**
         * Creates a plain object from an AuthTokenReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof access.AuthTokenReq
         * @static
         * @param {access.AuthTokenReq} message AuthTokenReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthTokenReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.user = null;
                object.sign = "";
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.user.UserInfo.toObject(message.user, options);
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            return object;
        };

        /**
         * Converts this AuthTokenReq to JSON.
         * @function toJSON
         * @memberof access.AuthTokenReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthTokenReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthTokenReq;
    })();

    access.AuthTokenResp = (function() {

        /**
         * Properties of an AuthTokenResp.
         * @memberof access
         * @interface IAuthTokenResp
         * @property {number|Long|null} [uid] AuthTokenResp uid
         * @property {string|null} [token] AuthTokenResp token
         */

        /**
         * Constructs a new AuthTokenResp.
         * @memberof access
         * @classdesc Represents an AuthTokenResp.
         * @implements IAuthTokenResp
         * @constructor
         * @param {access.IAuthTokenResp=} [properties] Properties to set
         */
        function AuthTokenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthTokenResp uid.
         * @member {number|Long} uid
         * @memberof access.AuthTokenResp
         * @instance
         */
        AuthTokenResp.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AuthTokenResp token.
         * @member {string} token
         * @memberof access.AuthTokenResp
         * @instance
         */
        AuthTokenResp.prototype.token = "";

        /**
         * Creates a new AuthTokenResp instance using the specified properties.
         * @function create
         * @memberof access.AuthTokenResp
         * @static
         * @param {access.IAuthTokenResp=} [properties] Properties to set
         * @returns {access.AuthTokenResp} AuthTokenResp instance
         */
        AuthTokenResp.create = function create(properties) {
            return new AuthTokenResp(properties);
        };

        /**
         * Encodes the specified AuthTokenResp message. Does not implicitly {@link access.AuthTokenResp.verify|verify} messages.
         * @function encode
         * @memberof access.AuthTokenResp
         * @static
         * @param {access.IAuthTokenResp} message AuthTokenResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthTokenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified AuthTokenResp message, length delimited. Does not implicitly {@link access.AuthTokenResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof access.AuthTokenResp
         * @static
         * @param {access.IAuthTokenResp} message AuthTokenResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthTokenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthTokenResp message from the specified reader or buffer.
         * @function decode
         * @memberof access.AuthTokenResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {access.AuthTokenResp} AuthTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthTokenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.access.AuthTokenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthTokenResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof access.AuthTokenResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {access.AuthTokenResp} AuthTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthTokenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthTokenResp message.
         * @function verify
         * @memberof access.AuthTokenResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthTokenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AuthTokenResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof access.AuthTokenResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {access.AuthTokenResp} AuthTokenResp
         */
        AuthTokenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.access.AuthTokenResp)
                return object;
            var message = new $root.access.AuthTokenResp();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AuthTokenResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof access.AuthTokenResp
         * @static
         * @param {access.AuthTokenResp} message AuthTokenResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthTokenResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AuthTokenResp to JSON.
         * @function toJSON
         * @memberof access.AuthTokenResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthTokenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthTokenResp;
    })();

    access.Auth = (function() {

        /**
         * Constructs a new Auth service.
         * @memberof access
         * @classdesc Represents an Auth
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Auth(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Auth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Auth;

        /**
         * Creates new Auth service using the specified rpc implementation.
         * @function create
         * @memberof access.Auth
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Auth} RPC service. Useful where requests and/or responses are streamed.
         */
        Auth.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link access.Auth#token}.
         * @memberof access.Auth
         * @typedef tokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {access.AuthTokenResp} [response] AuthTokenResp
         */

        /**
         * Calls token.
         * @function token
         * @memberof access.Auth
         * @instance
         * @param {access.IAuthTokenReq} request AuthTokenReq message or plain object
         * @param {access.Auth.tokenCallback} callback Node-style callback called with the error, if any, and AuthTokenResp
         * @returns {undefined}
         * @variation 1
         */
        Auth.prototype.token = function token(request, callback) {
            request = $root.access.AuthTokenReq.fromObject(request);
            return this.rpcCall(token, $root.access.AuthTokenReq, $root.access.AuthTokenResp, request, callback);
        };
        Auth.tokenRequestType = function () {
            return $root.access.AuthTokenReq;
        };
        Auth.tokenResponseType = function () {
            return $root.access.AuthTokenResp;
        };

        /**
         * Calls token.
         * @function token
         * @memberof access.Auth
         * @instance
         * @param {access.IAuthTokenReq} request AuthTokenReq message or plain object
         * @returns {Promise<access.AuthTokenResp>} Promise
         * @variation 2
         */

        return Auth;
    })();

    return access;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof user
         * @interface IUserInfo
         * @property {string|null} [account] UserInfo account
         * @property {string|null} [nickname] UserInfo nickname
         * @property {string|null} [gender] UserInfo gender
         * @property {string|null} [portrait] UserInfo portrait
         */

        /**
         * Constructs a new UserInfo.
         * @memberof user
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {user.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo account.
         * @member {string} account
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.account = "";

        /**
         * UserInfo nickname.
         * @member {string} nickname
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.nickname = "";

        /**
         * UserInfo gender.
         * @member {string} gender
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.gender = "";

        /**
         * UserInfo portrait.
         * @member {string} portrait
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.portrait = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof user.UserInfo
         * @static
         * @param {user.IUserInfo=} [properties] Properties to set
         * @returns {user.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link user.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof user.UserInfo
         * @static
         * @param {user.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gender);
            if (message.portrait != null && message.hasOwnProperty("portrait"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.portrait);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link user.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserInfo
         * @static
         * @param {user.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.gender = reader.string();
                    break;
                case 4:
                    message.portrait = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof user.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.portrait != null && message.hasOwnProperty("portrait"))
                if (!$util.isString(message.portrait))
                    return "portrait: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserInfo)
                return object;
            var message = new $root.user.UserInfo();
            if (object.account != null)
                message.account = String(object.account);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.portrait != null)
                message.portrait = String(object.portrait);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserInfo
         * @static
         * @param {user.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.nickname = "";
                object.gender = "";
                object.portrait = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.portrait != null && message.hasOwnProperty("portrait"))
                object.portrait = message.portrait;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof user.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    user.AccountTouchReq = (function() {

        /**
         * Properties of an AccountTouchReq.
         * @memberof user
         * @interface IAccountTouchReq
         * @property {string|null} [appId] AccountTouchReq appId
         * @property {user.IUserInfo|null} [user] AccountTouchReq user
         */

        /**
         * Constructs a new AccountTouchReq.
         * @memberof user
         * @classdesc Represents an AccountTouchReq.
         * @implements IAccountTouchReq
         * @constructor
         * @param {user.IAccountTouchReq=} [properties] Properties to set
         */
        function AccountTouchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountTouchReq appId.
         * @member {string} appId
         * @memberof user.AccountTouchReq
         * @instance
         */
        AccountTouchReq.prototype.appId = "";

        /**
         * AccountTouchReq user.
         * @member {user.IUserInfo|null|undefined} user
         * @memberof user.AccountTouchReq
         * @instance
         */
        AccountTouchReq.prototype.user = null;

        /**
         * Creates a new AccountTouchReq instance using the specified properties.
         * @function create
         * @memberof user.AccountTouchReq
         * @static
         * @param {user.IAccountTouchReq=} [properties] Properties to set
         * @returns {user.AccountTouchReq} AccountTouchReq instance
         */
        AccountTouchReq.create = function create(properties) {
            return new AccountTouchReq(properties);
        };

        /**
         * Encodes the specified AccountTouchReq message. Does not implicitly {@link user.AccountTouchReq.verify|verify} messages.
         * @function encode
         * @memberof user.AccountTouchReq
         * @static
         * @param {user.IAccountTouchReq} message AccountTouchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountTouchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.user.UserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccountTouchReq message, length delimited. Does not implicitly {@link user.AccountTouchReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.AccountTouchReq
         * @static
         * @param {user.IAccountTouchReq} message AccountTouchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountTouchReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountTouchReq message from the specified reader or buffer.
         * @function decode
         * @memberof user.AccountTouchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.AccountTouchReq} AccountTouchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountTouchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.AccountTouchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.user = $root.user.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountTouchReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.AccountTouchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.AccountTouchReq} AccountTouchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountTouchReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountTouchReq message.
         * @function verify
         * @memberof user.AccountTouchReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountTouchReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.user.UserInfo.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates an AccountTouchReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.AccountTouchReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.AccountTouchReq} AccountTouchReq
         */
        AccountTouchReq.fromObject = function fromObject(object) {
            if (object instanceof $root.user.AccountTouchReq)
                return object;
            var message = new $root.user.AccountTouchReq();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".user.AccountTouchReq.user: object expected");
                message.user = $root.user.UserInfo.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountTouchReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.AccountTouchReq
         * @static
         * @param {user.AccountTouchReq} message AccountTouchReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountTouchReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.user = null;
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.user.UserInfo.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this AccountTouchReq to JSON.
         * @function toJSON
         * @memberof user.AccountTouchReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountTouchReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountTouchReq;
    })();

    user.AccountTouchResp = (function() {

        /**
         * Properties of an AccountTouchResp.
         * @memberof user
         * @interface IAccountTouchResp
         * @property {number|Long|null} [uid] AccountTouchResp uid
         */

        /**
         * Constructs a new AccountTouchResp.
         * @memberof user
         * @classdesc Represents an AccountTouchResp.
         * @implements IAccountTouchResp
         * @constructor
         * @param {user.IAccountTouchResp=} [properties] Properties to set
         */
        function AccountTouchResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountTouchResp uid.
         * @member {number|Long} uid
         * @memberof user.AccountTouchResp
         * @instance
         */
        AccountTouchResp.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AccountTouchResp instance using the specified properties.
         * @function create
         * @memberof user.AccountTouchResp
         * @static
         * @param {user.IAccountTouchResp=} [properties] Properties to set
         * @returns {user.AccountTouchResp} AccountTouchResp instance
         */
        AccountTouchResp.create = function create(properties) {
            return new AccountTouchResp(properties);
        };

        /**
         * Encodes the specified AccountTouchResp message. Does not implicitly {@link user.AccountTouchResp.verify|verify} messages.
         * @function encode
         * @memberof user.AccountTouchResp
         * @static
         * @param {user.IAccountTouchResp} message AccountTouchResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountTouchResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified AccountTouchResp message, length delimited. Does not implicitly {@link user.AccountTouchResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.AccountTouchResp
         * @static
         * @param {user.IAccountTouchResp} message AccountTouchResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountTouchResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountTouchResp message from the specified reader or buffer.
         * @function decode
         * @memberof user.AccountTouchResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.AccountTouchResp} AccountTouchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountTouchResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.AccountTouchResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountTouchResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.AccountTouchResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.AccountTouchResp} AccountTouchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountTouchResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountTouchResp message.
         * @function verify
         * @memberof user.AccountTouchResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountTouchResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates an AccountTouchResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.AccountTouchResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.AccountTouchResp} AccountTouchResp
         */
        AccountTouchResp.fromObject = function fromObject(object) {
            if (object instanceof $root.user.AccountTouchResp)
                return object;
            var message = new $root.user.AccountTouchResp();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AccountTouchResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.AccountTouchResp
         * @static
         * @param {user.AccountTouchResp} message AccountTouchResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountTouchResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this AccountTouchResp to JSON.
         * @function toJSON
         * @memberof user.AccountTouchResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountTouchResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountTouchResp;
    })();

    user.Account = (function() {

        /**
         * Constructs a new Account service.
         * @memberof user
         * @classdesc Represents an Account
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Account(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Account.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Account;

        /**
         * Creates new Account service using the specified rpc implementation.
         * @function create
         * @memberof user.Account
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Account} RPC service. Useful where requests and/or responses are streamed.
         */
        Account.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link user.Account#touch}.
         * @memberof user.Account
         * @typedef touchCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.AccountTouchResp} [response] AccountTouchResp
         */

        /**
         * Calls touch.
         * @function touch
         * @memberof user.Account
         * @instance
         * @param {user.IAccountTouchReq} request AccountTouchReq message or plain object
         * @param {user.Account.touchCallback} callback Node-style callback called with the error, if any, and AccountTouchResp
         * @returns {undefined}
         * @variation 1
         */
        Account.prototype.touch = function touch(request, callback) {
            request = $root.user.AccountTouchReq.fromObject(request);
            return this.rpcCall(touch, $root.user.AccountTouchReq, $root.user.AccountTouchResp, request, callback);
        };
        Account.touchRequestType = function () {
            return $root.user.AccountTouchReq;
        };
        Account.touchResponseType = function () {
            return $root.user.AccountTouchResp;
        };

        /**
         * Calls touch.
         * @function touch
         * @memberof user.Account
         * @instance
         * @param {user.IAccountTouchReq} request AccountTouchReq message or plain object
         * @returns {Promise<user.AccountTouchResp>} Promise
         * @variation 2
         */

        return Account;
    })();

    return user;
})();

module.exports = $root;
