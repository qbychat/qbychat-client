/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const qbychat = $root.qbychat = (() => {

    /**
     * Namespace qbychat.
     * @exports qbychat
     * @namespace
     */
    const qbychat = {};

    qbychat.websocket = (function() {

        /**
         * Namespace websocket.
         * @memberof qbychat
         * @namespace
         */
        const websocket = {};

        websocket.protocol = (function() {

            /**
             * Namespace protocol.
             * @memberof qbychat.websocket
             * @namespace
             */
            const protocol = {};

            protocol.ClientboundMessage = (function() {

                /**
                 * Properties of a ClientboundMessage.
                 * @memberof qbychat.websocket.protocol
                 * @interface IClientboundMessage
                 * @property {string|null} [account] ClientboundMessage account
                 * @property {qbychat.websocket.protocol.IResponse|null} [response] ClientboundMessage response
                 * @property {google.protobuf.IAny|null} [event] ClientboundMessage event
                 * @property {qbychat.websocket.protocol.IServerHandshake|null} [serverHandshake] ClientboundMessage serverHandshake
                 */

                /**
                 * Constructs a new ClientboundMessage.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a ClientboundMessage.
                 * @implements IClientboundMessage
                 * @constructor
                 * @param {qbychat.websocket.protocol.IClientboundMessage=} [properties] Properties to set
                 */
                function ClientboundMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClientboundMessage account.
                 * @member {string|null|undefined} account
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @instance
                 */
                ClientboundMessage.prototype.account = null;

                /**
                 * ClientboundMessage response.
                 * @member {qbychat.websocket.protocol.IResponse|null|undefined} response
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @instance
                 */
                ClientboundMessage.prototype.response = null;

                /**
                 * ClientboundMessage event.
                 * @member {google.protobuf.IAny|null|undefined} event
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @instance
                 */
                ClientboundMessage.prototype.event = null;

                /**
                 * ClientboundMessage serverHandshake.
                 * @member {qbychat.websocket.protocol.IServerHandshake|null|undefined} serverHandshake
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @instance
                 */
                ClientboundMessage.prototype.serverHandshake = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ClientboundMessage.prototype, "_account", {
                    get: $util.oneOfGetter($oneOfFields = ["account"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * ClientboundMessage content.
                 * @member {"response"|"event"|"serverHandshake"|undefined} content
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @instance
                 */
                Object.defineProperty(ClientboundMessage.prototype, "content", {
                    get: $util.oneOfGetter($oneOfFields = ["response", "event", "serverHandshake"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ClientboundMessage instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.IClientboundMessage=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.ClientboundMessage} ClientboundMessage instance
                 */
                ClientboundMessage.create = function create(properties) {
                    return new ClientboundMessage(properties);
                };

                /**
                 * Encodes the specified ClientboundMessage message. Does not implicitly {@link qbychat.websocket.protocol.ClientboundMessage.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.IClientboundMessage} message ClientboundMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientboundMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
                    if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                        $root.qbychat.websocket.protocol.Response.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                        $root.google.protobuf.Any.encode(message.event, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.serverHandshake != null && Object.hasOwnProperty.call(message, "serverHandshake"))
                        $root.qbychat.websocket.protocol.ServerHandshake.encode(message.serverHandshake, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ClientboundMessage message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ClientboundMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.IClientboundMessage} message ClientboundMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientboundMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClientboundMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.ClientboundMessage} ClientboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientboundMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.ClientboundMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.account = reader.string();
                                break;
                            }
                        case 2: {
                                message.response = $root.qbychat.websocket.protocol.Response.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.event = $root.google.protobuf.Any.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.serverHandshake = $root.qbychat.websocket.protocol.ServerHandshake.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClientboundMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.ClientboundMessage} ClientboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientboundMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClientboundMessage message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientboundMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.account != null && message.hasOwnProperty("account")) {
                        properties._account = 1;
                        if (!$util.isString(message.account))
                            return "account: string expected";
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        properties.content = 1;
                        {
                            let error = $root.qbychat.websocket.protocol.Response.verify(message.response);
                            if (error)
                                return "response." + error;
                        }
                    }
                    if (message.event != null && message.hasOwnProperty("event")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            let error = $root.google.protobuf.Any.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                    }
                    if (message.serverHandshake != null && message.hasOwnProperty("serverHandshake")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            let error = $root.qbychat.websocket.protocol.ServerHandshake.verify(message.serverHandshake);
                            if (error)
                                return "serverHandshake." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ClientboundMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.ClientboundMessage} ClientboundMessage
                 */
                ClientboundMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.ClientboundMessage)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.ClientboundMessage();
                    if (object.account != null)
                        message.account = String(object.account);
                    if (object.response != null) {
                        if (typeof object.response !== "object")
                            throw TypeError(".qbychat.websocket.protocol.ClientboundMessage.response: object expected");
                        message.response = $root.qbychat.websocket.protocol.Response.fromObject(object.response);
                    }
                    if (object.event != null) {
                        if (typeof object.event !== "object")
                            throw TypeError(".qbychat.websocket.protocol.ClientboundMessage.event: object expected");
                        message.event = $root.google.protobuf.Any.fromObject(object.event);
                    }
                    if (object.serverHandshake != null) {
                        if (typeof object.serverHandshake !== "object")
                            throw TypeError(".qbychat.websocket.protocol.ClientboundMessage.serverHandshake: object expected");
                        message.serverHandshake = $root.qbychat.websocket.protocol.ServerHandshake.fromObject(object.serverHandshake);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ClientboundMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.ClientboundMessage} message ClientboundMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientboundMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.account != null && message.hasOwnProperty("account")) {
                        object.account = message.account;
                        if (options.oneofs)
                            object._account = "account";
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        object.response = $root.qbychat.websocket.protocol.Response.toObject(message.response, options);
                        if (options.oneofs)
                            object.content = "response";
                    }
                    if (message.event != null && message.hasOwnProperty("event")) {
                        object.event = $root.google.protobuf.Any.toObject(message.event, options);
                        if (options.oneofs)
                            object.content = "event";
                    }
                    if (message.serverHandshake != null && message.hasOwnProperty("serverHandshake")) {
                        object.serverHandshake = $root.qbychat.websocket.protocol.ServerHandshake.toObject(message.serverHandshake, options);
                        if (options.oneofs)
                            object.content = "serverHandshake";
                    }
                    return object;
                };

                /**
                 * Converts this ClientboundMessage to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientboundMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ClientboundMessage
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.ClientboundMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ClientboundMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.ClientboundMessage";
                };

                return ClientboundMessage;
            })();

            protocol.Response = (function() {

                /**
                 * Properties of a Response.
                 * @memberof qbychat.websocket.protocol
                 * @interface IResponse
                 * @property {string|null} [ticket] Response ticket
                 * @property {Uint8Array|null} [payload] Response payload
                 */

                /**
                 * Constructs a new Response.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a Response.
                 * @implements IResponse
                 * @constructor
                 * @param {qbychat.websocket.protocol.IResponse=} [properties] Properties to set
                 */
                function Response(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Response ticket.
                 * @member {string} ticket
                 * @memberof qbychat.websocket.protocol.Response
                 * @instance
                 */
                Response.prototype.ticket = "";

                /**
                 * Response payload.
                 * @member {Uint8Array} payload
                 * @memberof qbychat.websocket.protocol.Response
                 * @instance
                 */
                Response.prototype.payload = $util.newBuffer([]);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {qbychat.websocket.protocol.IResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.Response} Response instance
                 */
                Response.create = function create(properties) {
                    return new Response(properties);
                };

                /**
                 * Encodes the specified Response message. Does not implicitly {@link qbychat.websocket.protocol.Response.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {qbychat.websocket.protocol.IResponse} message Response message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Response.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticket);
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                    return writer;
                };

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.Response.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {qbychat.websocket.protocol.IResponse} message Response message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Response.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.Response();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ticket = reader.string();
                                break;
                            }
                        case 2: {
                                message.payload = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Response message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Response.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        if (!$util.isString(message.ticket))
                            return "ticket: string expected";
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    return null;
                };

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.Response} Response
                 */
                Response.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.Response)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.Response();
                    if (object.ticket != null)
                        message.ticket = String(object.ticket);
                    if (object.payload != null)
                        if (typeof object.payload === "string")
                            $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                        else if (object.payload.length >= 0)
                            message.payload = object.payload;
                    return message;
                };

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {qbychat.websocket.protocol.Response} message Response
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Response.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.ticket = "";
                        if (options.bytes === String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    }
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        object.ticket = message.ticket;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    return object;
                };

                /**
                 * Converts this Response to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.Response
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Response
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.Response
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.Response";
                };

                return Response;
            })();

            protocol.ServerboundMessage = (function() {

                /**
                 * Properties of a ServerboundMessage.
                 * @memberof qbychat.websocket.protocol
                 * @interface IServerboundMessage
                 * @property {string|null} [account] ServerboundMessage account
                 * @property {qbychat.websocket.protocol.IClientHandshake|null} [clientHandshake] ServerboundMessage clientHandshake
                 * @property {qbychat.websocket.protocol.IRequest|null} [request] ServerboundMessage request
                 */

                /**
                 * Constructs a new ServerboundMessage.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a ServerboundMessage.
                 * @implements IServerboundMessage
                 * @constructor
                 * @param {qbychat.websocket.protocol.IServerboundMessage=} [properties] Properties to set
                 */
                function ServerboundMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ServerboundMessage account.
                 * @member {string|null|undefined} account
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @instance
                 */
                ServerboundMessage.prototype.account = null;

                /**
                 * ServerboundMessage clientHandshake.
                 * @member {qbychat.websocket.protocol.IClientHandshake|null|undefined} clientHandshake
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @instance
                 */
                ServerboundMessage.prototype.clientHandshake = null;

                /**
                 * ServerboundMessage request.
                 * @member {qbychat.websocket.protocol.IRequest|null|undefined} request
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @instance
                 */
                ServerboundMessage.prototype.request = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ServerboundMessage.prototype, "_account", {
                    get: $util.oneOfGetter($oneOfFields = ["account"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * ServerboundMessage content.
                 * @member {"clientHandshake"|"request"|undefined} content
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @instance
                 */
                Object.defineProperty(ServerboundMessage.prototype, "content", {
                    get: $util.oneOfGetter($oneOfFields = ["clientHandshake", "request"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ServerboundMessage instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.IServerboundMessage=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.ServerboundMessage} ServerboundMessage instance
                 */
                ServerboundMessage.create = function create(properties) {
                    return new ServerboundMessage(properties);
                };

                /**
                 * Encodes the specified ServerboundMessage message. Does not implicitly {@link qbychat.websocket.protocol.ServerboundMessage.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.IServerboundMessage} message ServerboundMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServerboundMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
                    if (message.clientHandshake != null && Object.hasOwnProperty.call(message, "clientHandshake"))
                        $root.qbychat.websocket.protocol.ClientHandshake.encode(message.clientHandshake, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                        $root.qbychat.websocket.protocol.Request.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ServerboundMessage message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ServerboundMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.IServerboundMessage} message ServerboundMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServerboundMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ServerboundMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.ServerboundMessage} ServerboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServerboundMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.ServerboundMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.account = reader.string();
                                break;
                            }
                        case 2: {
                                message.clientHandshake = $root.qbychat.websocket.protocol.ClientHandshake.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.request = $root.qbychat.websocket.protocol.Request.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ServerboundMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.ServerboundMessage} ServerboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServerboundMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ServerboundMessage message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServerboundMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.account != null && message.hasOwnProperty("account")) {
                        properties._account = 1;
                        if (!$util.isString(message.account))
                            return "account: string expected";
                    }
                    if (message.clientHandshake != null && message.hasOwnProperty("clientHandshake")) {
                        properties.content = 1;
                        {
                            let error = $root.qbychat.websocket.protocol.ClientHandshake.verify(message.clientHandshake);
                            if (error)
                                return "clientHandshake." + error;
                        }
                    }
                    if (message.request != null && message.hasOwnProperty("request")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            let error = $root.qbychat.websocket.protocol.Request.verify(message.request);
                            if (error)
                                return "request." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ServerboundMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.ServerboundMessage} ServerboundMessage
                 */
                ServerboundMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.ServerboundMessage)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.ServerboundMessage();
                    if (object.account != null)
                        message.account = String(object.account);
                    if (object.clientHandshake != null) {
                        if (typeof object.clientHandshake !== "object")
                            throw TypeError(".qbychat.websocket.protocol.ServerboundMessage.clientHandshake: object expected");
                        message.clientHandshake = $root.qbychat.websocket.protocol.ClientHandshake.fromObject(object.clientHandshake);
                    }
                    if (object.request != null) {
                        if (typeof object.request !== "object")
                            throw TypeError(".qbychat.websocket.protocol.ServerboundMessage.request: object expected");
                        message.request = $root.qbychat.websocket.protocol.Request.fromObject(object.request);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ServerboundMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {qbychat.websocket.protocol.ServerboundMessage} message ServerboundMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServerboundMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.account != null && message.hasOwnProperty("account")) {
                        object.account = message.account;
                        if (options.oneofs)
                            object._account = "account";
                    }
                    if (message.clientHandshake != null && message.hasOwnProperty("clientHandshake")) {
                        object.clientHandshake = $root.qbychat.websocket.protocol.ClientHandshake.toObject(message.clientHandshake, options);
                        if (options.oneofs)
                            object.content = "clientHandshake";
                    }
                    if (message.request != null && message.hasOwnProperty("request")) {
                        object.request = $root.qbychat.websocket.protocol.Request.toObject(message.request, options);
                        if (options.oneofs)
                            object.content = "request";
                    }
                    return object;
                };

                /**
                 * Converts this ServerboundMessage to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServerboundMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ServerboundMessage
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.ServerboundMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServerboundMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.ServerboundMessage";
                };

                return ServerboundMessage;
            })();

            protocol.ClientHandshake = (function() {

                /**
                 * Properties of a ClientHandshake.
                 * @memberof qbychat.websocket.protocol
                 * @interface IClientHandshake
                 * @property {qbychat.websocket.protocol.IClientInfo|null} [clientInfo] ClientHandshake clientInfo
                 * @property {Uint8Array|null} [publicKey] ClientHandshake publicKey
                 * @property {Uint8Array|null} [aesKeySalt] ClientHandshake aesKeySalt
                 * @property {number|null} [aesKeyLength] ClientHandshake aesKeyLength
                 */

                /**
                 * Constructs a new ClientHandshake.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a ClientHandshake.
                 * @implements IClientHandshake
                 * @constructor
                 * @param {qbychat.websocket.protocol.IClientHandshake=} [properties] Properties to set
                 */
                function ClientHandshake(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClientHandshake clientInfo.
                 * @member {qbychat.websocket.protocol.IClientInfo|null|undefined} clientInfo
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @instance
                 */
                ClientHandshake.prototype.clientInfo = null;

                /**
                 * ClientHandshake publicKey.
                 * @member {Uint8Array|null|undefined} publicKey
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @instance
                 */
                ClientHandshake.prototype.publicKey = null;

                /**
                 * ClientHandshake aesKeySalt.
                 * @member {Uint8Array|null|undefined} aesKeySalt
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @instance
                 */
                ClientHandshake.prototype.aesKeySalt = null;

                /**
                 * ClientHandshake aesKeyLength.
                 * @member {number|null|undefined} aesKeyLength
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @instance
                 */
                ClientHandshake.prototype.aesKeyLength = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ClientHandshake.prototype, "_publicKey", {
                    get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ClientHandshake.prototype, "_aesKeySalt", {
                    get: $util.oneOfGetter($oneOfFields = ["aesKeySalt"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ClientHandshake.prototype, "_aesKeyLength", {
                    get: $util.oneOfGetter($oneOfFields = ["aesKeyLength"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ClientHandshake instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.IClientHandshake=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.ClientHandshake} ClientHandshake instance
                 */
                ClientHandshake.create = function create(properties) {
                    return new ClientHandshake(properties);
                };

                /**
                 * Encodes the specified ClientHandshake message. Does not implicitly {@link qbychat.websocket.protocol.ClientHandshake.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.IClientHandshake} message ClientHandshake message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientHandshake.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.clientInfo != null && Object.hasOwnProperty.call(message, "clientInfo"))
                        $root.qbychat.websocket.protocol.ClientInfo.encode(message.clientInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
                    if (message.aesKeySalt != null && Object.hasOwnProperty.call(message, "aesKeySalt"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.aesKeySalt);
                    if (message.aesKeyLength != null && Object.hasOwnProperty.call(message, "aesKeyLength"))
                        writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.aesKeyLength);
                    return writer;
                };

                /**
                 * Encodes the specified ClientHandshake message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ClientHandshake.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.IClientHandshake} message ClientHandshake message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientHandshake.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClientHandshake message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.ClientHandshake} ClientHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientHandshake.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.ClientHandshake();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.clientInfo = $root.qbychat.websocket.protocol.ClientInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.publicKey = reader.bytes();
                                break;
                            }
                        case 3: {
                                message.aesKeySalt = reader.bytes();
                                break;
                            }
                        case 4: {
                                message.aesKeyLength = reader.fixed32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClientHandshake message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.ClientHandshake} ClientHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientHandshake.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClientHandshake message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientHandshake.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.clientInfo != null && message.hasOwnProperty("clientInfo")) {
                        let error = $root.qbychat.websocket.protocol.ClientInfo.verify(message.clientInfo);
                        if (error)
                            return "clientInfo." + error;
                    }
                    if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                        properties._publicKey = 1;
                        if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                            return "publicKey: buffer expected";
                    }
                    if (message.aesKeySalt != null && message.hasOwnProperty("aesKeySalt")) {
                        properties._aesKeySalt = 1;
                        if (!(message.aesKeySalt && typeof message.aesKeySalt.length === "number" || $util.isString(message.aesKeySalt)))
                            return "aesKeySalt: buffer expected";
                    }
                    if (message.aesKeyLength != null && message.hasOwnProperty("aesKeyLength")) {
                        properties._aesKeyLength = 1;
                        if (!$util.isInteger(message.aesKeyLength))
                            return "aesKeyLength: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a ClientHandshake message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.ClientHandshake} ClientHandshake
                 */
                ClientHandshake.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.ClientHandshake)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.ClientHandshake();
                    if (object.clientInfo != null) {
                        if (typeof object.clientInfo !== "object")
                            throw TypeError(".qbychat.websocket.protocol.ClientHandshake.clientInfo: object expected");
                        message.clientInfo = $root.qbychat.websocket.protocol.ClientInfo.fromObject(object.clientInfo);
                    }
                    if (object.publicKey != null)
                        if (typeof object.publicKey === "string")
                            $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                        else if (object.publicKey.length >= 0)
                            message.publicKey = object.publicKey;
                    if (object.aesKeySalt != null)
                        if (typeof object.aesKeySalt === "string")
                            $util.base64.decode(object.aesKeySalt, message.aesKeySalt = $util.newBuffer($util.base64.length(object.aesKeySalt)), 0);
                        else if (object.aesKeySalt.length >= 0)
                            message.aesKeySalt = object.aesKeySalt;
                    if (object.aesKeyLength != null)
                        message.aesKeyLength = object.aesKeyLength >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ClientHandshake message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.ClientHandshake} message ClientHandshake
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientHandshake.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.clientInfo = null;
                    if (message.clientInfo != null && message.hasOwnProperty("clientInfo"))
                        object.clientInfo = $root.qbychat.websocket.protocol.ClientInfo.toObject(message.clientInfo, options);
                    if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                        object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                        if (options.oneofs)
                            object._publicKey = "publicKey";
                    }
                    if (message.aesKeySalt != null && message.hasOwnProperty("aesKeySalt")) {
                        object.aesKeySalt = options.bytes === String ? $util.base64.encode(message.aesKeySalt, 0, message.aesKeySalt.length) : options.bytes === Array ? Array.prototype.slice.call(message.aesKeySalt) : message.aesKeySalt;
                        if (options.oneofs)
                            object._aesKeySalt = "aesKeySalt";
                    }
                    if (message.aesKeyLength != null && message.hasOwnProperty("aesKeyLength")) {
                        object.aesKeyLength = message.aesKeyLength;
                        if (options.oneofs)
                            object._aesKeyLength = "aesKeyLength";
                    }
                    return object;
                };

                /**
                 * Converts this ClientHandshake to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientHandshake.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ClientHandshake
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ClientHandshake.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.ClientHandshake";
                };

                return ClientHandshake;
            })();

            protocol.ServerHandshake = (function() {

                /**
                 * Properties of a ServerHandshake.
                 * @memberof qbychat.websocket.protocol
                 * @interface IServerHandshake
                 * @property {Uint8Array|null} [publicKey] ServerHandshake publicKey
                 */

                /**
                 * Constructs a new ServerHandshake.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a ServerHandshake.
                 * @implements IServerHandshake
                 * @constructor
                 * @param {qbychat.websocket.protocol.IServerHandshake=} [properties] Properties to set
                 */
                function ServerHandshake(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ServerHandshake publicKey.
                 * @member {Uint8Array|null|undefined} publicKey
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @instance
                 */
                ServerHandshake.prototype.publicKey = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ServerHandshake.prototype, "_publicKey", {
                    get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ServerHandshake instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.IServerHandshake=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.ServerHandshake} ServerHandshake instance
                 */
                ServerHandshake.create = function create(properties) {
                    return new ServerHandshake(properties);
                };

                /**
                 * Encodes the specified ServerHandshake message. Does not implicitly {@link qbychat.websocket.protocol.ServerHandshake.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.IServerHandshake} message ServerHandshake message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServerHandshake.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
                    return writer;
                };

                /**
                 * Encodes the specified ServerHandshake message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ServerHandshake.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.IServerHandshake} message ServerHandshake message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServerHandshake.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ServerHandshake message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.ServerHandshake} ServerHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServerHandshake.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.ServerHandshake();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.publicKey = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ServerHandshake message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.ServerHandshake} ServerHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServerHandshake.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ServerHandshake message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServerHandshake.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                        properties._publicKey = 1;
                        if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                            return "publicKey: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a ServerHandshake message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.ServerHandshake} ServerHandshake
                 */
                ServerHandshake.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.ServerHandshake)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.ServerHandshake();
                    if (object.publicKey != null)
                        if (typeof object.publicKey === "string")
                            $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                        else if (object.publicKey.length >= 0)
                            message.publicKey = object.publicKey;
                    return message;
                };

                /**
                 * Creates a plain object from a ServerHandshake message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {qbychat.websocket.protocol.ServerHandshake} message ServerHandshake
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServerHandshake.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                        object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                        if (options.oneofs)
                            object._publicKey = "publicKey";
                    }
                    return object;
                };

                /**
                 * Converts this ServerHandshake to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServerHandshake.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ServerHandshake
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.ServerHandshake
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServerHandshake.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.ServerHandshake";
                };

                return ServerHandshake;
            })();

            protocol.ClientInfo = (function() {

                /**
                 * Properties of a ClientInfo.
                 * @memberof qbychat.websocket.protocol
                 * @interface IClientInfo
                 * @property {string|null} [name] ClientInfo name
                 * @property {string|null} [version] ClientInfo version
                 */

                /**
                 * Constructs a new ClientInfo.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a ClientInfo.
                 * @implements IClientInfo
                 * @constructor
                 * @param {qbychat.websocket.protocol.IClientInfo=} [properties] Properties to set
                 */
                function ClientInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClientInfo name.
                 * @member {string} name
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @instance
                 */
                ClientInfo.prototype.name = "";

                /**
                 * ClientInfo version.
                 * @member {string} version
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @instance
                 */
                ClientInfo.prototype.version = "";

                /**
                 * Creates a new ClientInfo instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {qbychat.websocket.protocol.IClientInfo=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.ClientInfo} ClientInfo instance
                 */
                ClientInfo.create = function create(properties) {
                    return new ClientInfo(properties);
                };

                /**
                 * Encodes the specified ClientInfo message. Does not implicitly {@link qbychat.websocket.protocol.ClientInfo.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {qbychat.websocket.protocol.IClientInfo} message ClientInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                    return writer;
                };

                /**
                 * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ClientInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {qbychat.websocket.protocol.IClientInfo} message ClientInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClientInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.ClientInfo} ClientInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.ClientInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.version = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.ClientInfo} ClientInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClientInfo message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    return null;
                };

                /**
                 * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.ClientInfo} ClientInfo
                 */
                ClientInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.ClientInfo)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.ClientInfo();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.version != null)
                        message.version = String(object.version);
                    return message;
                };

                /**
                 * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {qbychat.websocket.protocol.ClientInfo} message ClientInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.version = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    return object;
                };

                /**
                 * Converts this ClientInfo to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ClientInfo
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ClientInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.ClientInfo";
                };

                return ClientInfo;
            })();

            protocol.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof qbychat.websocket.protocol
                 * @interface IRequest
                 * @property {string|null} [ticket] Request ticket
                 * @property {string|null} [service] Request service
                 * @property {string|null} [method] Request method
                 * @property {Uint8Array|null} [payload] Request payload
                 */

                /**
                 * Constructs a new Request.
                 * @memberof qbychat.websocket.protocol
                 * @classdesc Represents a Request.
                 * @implements IRequest
                 * @constructor
                 * @param {qbychat.websocket.protocol.IRequest=} [properties] Properties to set
                 */
                function Request(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Request ticket.
                 * @member {string} ticket
                 * @memberof qbychat.websocket.protocol.Request
                 * @instance
                 */
                Request.prototype.ticket = "";

                /**
                 * Request service.
                 * @member {string} service
                 * @memberof qbychat.websocket.protocol.Request
                 * @instance
                 */
                Request.prototype.service = "";

                /**
                 * Request method.
                 * @member {string} method
                 * @memberof qbychat.websocket.protocol.Request
                 * @instance
                 */
                Request.prototype.method = "";

                /**
                 * Request payload.
                 * @member {Uint8Array} payload
                 * @memberof qbychat.websocket.protocol.Request
                 * @instance
                 */
                Request.prototype.payload = $util.newBuffer([]);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {qbychat.websocket.protocol.IRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.protocol.Request} Request instance
                 */
                Request.create = function create(properties) {
                    return new Request(properties);
                };

                /**
                 * Encodes the specified Request message. Does not implicitly {@link qbychat.websocket.protocol.Request.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {qbychat.websocket.protocol.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticket);
                    if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
                    if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
                    return writer;
                };

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.Request.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {qbychat.websocket.protocol.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.protocol.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.protocol.Request();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ticket = reader.string();
                                break;
                            }
                        case 2: {
                                message.service = reader.string();
                                break;
                            }
                        case 3: {
                                message.method = reader.string();
                                break;
                            }
                        case 4: {
                                message.payload = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.protocol.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Request message.
                 * @function verify
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Request.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        if (!$util.isString(message.ticket))
                            return "ticket: string expected";
                    if (message.service != null && message.hasOwnProperty("service"))
                        if (!$util.isString(message.service))
                            return "service: string expected";
                    if (message.method != null && message.hasOwnProperty("method"))
                        if (!$util.isString(message.method))
                            return "method: string expected";
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    return null;
                };

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.protocol.Request} Request
                 */
                Request.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.protocol.Request)
                        return object;
                    let message = new $root.qbychat.websocket.protocol.Request();
                    if (object.ticket != null)
                        message.ticket = String(object.ticket);
                    if (object.service != null)
                        message.service = String(object.service);
                    if (object.method != null)
                        message.method = String(object.method);
                    if (object.payload != null)
                        if (typeof object.payload === "string")
                            $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                        else if (object.payload.length >= 0)
                            message.payload = object.payload;
                    return message;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {qbychat.websocket.protocol.Request} message Request
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.ticket = "";
                        object.service = "";
                        object.method = "";
                        if (options.bytes === String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    }
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        object.ticket = message.ticket;
                    if (message.service != null && message.hasOwnProperty("service"))
                        object.service = message.service;
                    if (message.method != null && message.hasOwnProperty("method"))
                        object.method = message.method;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    return object;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.protocol.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Request
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.protocol.Request
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.protocol.Request";
                };

                return Request;
            })();

            return protocol;
        })();

        return websocket;
    })();

    return qbychat;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type_url = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Any
             * @function getTypeUrl
             * @memberof google.protobuf.Any
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Any.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Any";
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
