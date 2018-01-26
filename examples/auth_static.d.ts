import * as $protobuf from "protobufjs";

/** Namespace access. */
export namespace access {

    /** Properties of an AuthTokenReq. */
    interface IAuthTokenReq {

        /** AuthTokenReq appId */
        appId?: (string|null);

        /** AuthTokenReq user */
        user?: (user.IUserInfo|null);

        /** AuthTokenReq sign */
        sign?: (string|null);
    }

    /** Represents an AuthTokenReq. */
    class AuthTokenReq implements IAuthTokenReq {

        /**
         * Constructs a new AuthTokenReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: access.IAuthTokenReq);

        /** AuthTokenReq appId. */
        public appId: string;

        /** AuthTokenReq user. */
        public user?: (user.IUserInfo|null);

        /** AuthTokenReq sign. */
        public sign: string;

        /**
         * Creates a new AuthTokenReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthTokenReq instance
         */
        public static create(properties?: access.IAuthTokenReq): access.AuthTokenReq;

        /**
         * Encodes the specified AuthTokenReq message. Does not implicitly {@link access.AuthTokenReq.verify|verify} messages.
         * @param message AuthTokenReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: access.IAuthTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthTokenReq message, length delimited. Does not implicitly {@link access.AuthTokenReq.verify|verify} messages.
         * @param message AuthTokenReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: access.IAuthTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthTokenReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): access.AuthTokenReq;

        /**
         * Decodes an AuthTokenReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): access.AuthTokenReq;

        /**
         * Verifies an AuthTokenReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthTokenReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthTokenReq
         */
        public static fromObject(object: { [k: string]: any }): access.AuthTokenReq;

        /**
         * Creates a plain object from an AuthTokenReq message. Also converts values to other types if specified.
         * @param message AuthTokenReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: access.AuthTokenReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthTokenReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuthTokenResp. */
    interface IAuthTokenResp {

        /** AuthTokenResp uid */
        uid?: (number|Long|null);

        /** AuthTokenResp token */
        token?: (string|null);
    }

    /** Represents an AuthTokenResp. */
    class AuthTokenResp implements IAuthTokenResp {

        /**
         * Constructs a new AuthTokenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: access.IAuthTokenResp);

        /** AuthTokenResp uid. */
        public uid: (number|Long);

        /** AuthTokenResp token. */
        public token: string;

        /**
         * Creates a new AuthTokenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthTokenResp instance
         */
        public static create(properties?: access.IAuthTokenResp): access.AuthTokenResp;

        /**
         * Encodes the specified AuthTokenResp message. Does not implicitly {@link access.AuthTokenResp.verify|verify} messages.
         * @param message AuthTokenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: access.IAuthTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthTokenResp message, length delimited. Does not implicitly {@link access.AuthTokenResp.verify|verify} messages.
         * @param message AuthTokenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: access.IAuthTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthTokenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): access.AuthTokenResp;

        /**
         * Decodes an AuthTokenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): access.AuthTokenResp;

        /**
         * Verifies an AuthTokenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthTokenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthTokenResp
         */
        public static fromObject(object: { [k: string]: any }): access.AuthTokenResp;

        /**
         * Creates a plain object from an AuthTokenResp message. Also converts values to other types if specified.
         * @param message AuthTokenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: access.AuthTokenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthTokenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an Auth */
    class Auth extends $protobuf.rpc.Service {

        /**
         * Constructs a new Auth service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Auth service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Auth;

        /**
         * Calls token.
         * @param request AuthTokenReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthTokenResp
         */
        public token(request: access.IAuthTokenReq, callback: access.Auth.tokenCallback): void;

        /**
         * Calls token.
         * @param request AuthTokenReq message or plain object
         * @returns Promise
         */
        public token(request: access.IAuthTokenReq): Promise<access.AuthTokenResp>;
    }

    namespace Auth {

        /**
         * Callback as used by {@link access.Auth#token}.
         * @param error Error, if any
         * @param [response] AuthTokenResp
         */
        type tokenCallback = (error: (Error|null), response?: access.AuthTokenResp) => void;
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo account */
        account?: (string|null);

        /** UserInfo nickname */
        nickname?: (string|null);

        /** UserInfo gender */
        gender?: (string|null);

        /** UserInfo portrait */
        portrait?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserInfo);

        /** UserInfo account. */
        public account: string;

        /** UserInfo nickname. */
        public nickname: string;

        /** UserInfo gender. */
        public gender: string;

        /** UserInfo portrait. */
        public portrait: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: user.IUserInfo): user.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link user.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link user.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): user.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountTouchReq. */
    interface IAccountTouchReq {

        /** AccountTouchReq appId */
        appId?: (string|null);

        /** AccountTouchReq user */
        user?: (user.IUserInfo|null);
    }

    /** Represents an AccountTouchReq. */
    class AccountTouchReq implements IAccountTouchReq {

        /**
         * Constructs a new AccountTouchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IAccountTouchReq);

        /** AccountTouchReq appId. */
        public appId: string;

        /** AccountTouchReq user. */
        public user?: (user.IUserInfo|null);

        /**
         * Creates a new AccountTouchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTouchReq instance
         */
        public static create(properties?: user.IAccountTouchReq): user.AccountTouchReq;

        /**
         * Encodes the specified AccountTouchReq message. Does not implicitly {@link user.AccountTouchReq.verify|verify} messages.
         * @param message AccountTouchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IAccountTouchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTouchReq message, length delimited. Does not implicitly {@link user.AccountTouchReq.verify|verify} messages.
         * @param message AccountTouchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IAccountTouchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTouchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTouchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.AccountTouchReq;

        /**
         * Decodes an AccountTouchReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTouchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.AccountTouchReq;

        /**
         * Verifies an AccountTouchReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTouchReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTouchReq
         */
        public static fromObject(object: { [k: string]: any }): user.AccountTouchReq;

        /**
         * Creates a plain object from an AccountTouchReq message. Also converts values to other types if specified.
         * @param message AccountTouchReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.AccountTouchReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTouchReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountTouchResp. */
    interface IAccountTouchResp {

        /** AccountTouchResp uid */
        uid?: (number|Long|null);
    }

    /** Represents an AccountTouchResp. */
    class AccountTouchResp implements IAccountTouchResp {

        /**
         * Constructs a new AccountTouchResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IAccountTouchResp);

        /** AccountTouchResp uid. */
        public uid: (number|Long);

        /**
         * Creates a new AccountTouchResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTouchResp instance
         */
        public static create(properties?: user.IAccountTouchResp): user.AccountTouchResp;

        /**
         * Encodes the specified AccountTouchResp message. Does not implicitly {@link user.AccountTouchResp.verify|verify} messages.
         * @param message AccountTouchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IAccountTouchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTouchResp message, length delimited. Does not implicitly {@link user.AccountTouchResp.verify|verify} messages.
         * @param message AccountTouchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IAccountTouchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTouchResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTouchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.AccountTouchResp;

        /**
         * Decodes an AccountTouchResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTouchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.AccountTouchResp;

        /**
         * Verifies an AccountTouchResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTouchResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTouchResp
         */
        public static fromObject(object: { [k: string]: any }): user.AccountTouchResp;

        /**
         * Creates a plain object from an AccountTouchResp message. Also converts values to other types if specified.
         * @param message AccountTouchResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.AccountTouchResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTouchResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an Account */
    class Account extends $protobuf.rpc.Service {

        /**
         * Constructs a new Account service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Account service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Account;

        /**
         * Calls touch.
         * @param request AccountTouchReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AccountTouchResp
         */
        public touch(request: user.IAccountTouchReq, callback: user.Account.touchCallback): void;

        /**
         * Calls touch.
         * @param request AccountTouchReq message or plain object
         * @returns Promise
         */
        public touch(request: user.IAccountTouchReq): Promise<user.AccountTouchResp>;
    }

    namespace Account {

        /**
         * Callback as used by {@link user.Account#touch}.
         * @param error Error, if any
         * @param [response] AccountTouchResp
         */
        type touchCallback = (error: (Error|null), response?: user.AccountTouchResp) => void;
    }
}
