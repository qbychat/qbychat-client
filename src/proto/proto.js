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
                 * @property {Uint8Array|null} [aesKeyInfo] ClientHandshake aesKeyInfo
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

                /**
                 * ClientHandshake aesKeyInfo.
                 * @member {Uint8Array|null|undefined} aesKeyInfo
                 * @memberof qbychat.websocket.protocol.ClientHandshake
                 * @instance
                 */
                ClientHandshake.prototype.aesKeyInfo = null;

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

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ClientHandshake.prototype, "_aesKeyInfo", {
                    get: $util.oneOfGetter($oneOfFields = ["aesKeyInfo"]),
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
                    if (message.aesKeyInfo != null && Object.hasOwnProperty.call(message, "aesKeyInfo"))
                        writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.aesKeyInfo);
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
                        case 5: {
                                message.aesKeyInfo = reader.bytes();
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
                    if (message.aesKeyInfo != null && message.hasOwnProperty("aesKeyInfo")) {
                        properties._aesKeyInfo = 1;
                        if (!(message.aesKeyInfo && typeof message.aesKeyInfo.length === "number" || $util.isString(message.aesKeyInfo)))
                            return "aesKeyInfo: buffer expected";
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
                    if (object.aesKeyInfo != null)
                        if (typeof object.aesKeyInfo === "string")
                            $util.base64.decode(object.aesKeyInfo, message.aesKeyInfo = $util.newBuffer($util.base64.length(object.aesKeyInfo)), 0);
                        else if (object.aesKeyInfo.length >= 0)
                            message.aesKeyInfo = object.aesKeyInfo;
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
                    if (message.aesKeyInfo != null && message.hasOwnProperty("aesKeyInfo")) {
                        object.aesKeyInfo = options.bytes === String ? $util.base64.encode(message.aesKeyInfo, 0, message.aesKeyInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.aesKeyInfo) : message.aesKeyInfo;
                        if (options.oneofs)
                            object._aesKeyInfo = "aesKeyInfo";
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
                 * @property {string|null} [installationId] ClientInfo installationId
                 * @property {string|null} [name] ClientInfo name
                 * @property {qbychat.websocket.protocol.Platform|null} [platform] ClientInfo platform
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
                 * ClientInfo installationId.
                 * @member {string} installationId
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @instance
                 */
                ClientInfo.prototype.installationId = "";

                /**
                 * ClientInfo name.
                 * @member {string} name
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @instance
                 */
                ClientInfo.prototype.name = "";

                /**
                 * ClientInfo platform.
                 * @member {qbychat.websocket.protocol.Platform} platform
                 * @memberof qbychat.websocket.protocol.ClientInfo
                 * @instance
                 */
                ClientInfo.prototype.platform = 0;

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
                    if (message.installationId != null && Object.hasOwnProperty.call(message, "installationId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.installationId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platform);
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
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
                                message.installationId = reader.string();
                                break;
                            }
                        case 2: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.platform = reader.int32();
                                break;
                            }
                        case 4: {
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
                    if (message.installationId != null && message.hasOwnProperty("installationId"))
                        if (!$util.isString(message.installationId))
                            return "installationId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.platform != null && message.hasOwnProperty("platform"))
                        switch (message.platform) {
                        default:
                            return "platform: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
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
                    if (object.installationId != null)
                        message.installationId = String(object.installationId);
                    if (object.name != null)
                        message.name = String(object.name);
                    switch (object.platform) {
                    default:
                        if (typeof object.platform === "number") {
                            message.platform = object.platform;
                            break;
                        }
                        break;
                    case "LINUX":
                    case 0:
                        message.platform = 0;
                        break;
                    case "WINDOWS":
                    case 1:
                        message.platform = 1;
                        break;
                    case "OSX":
                    case 2:
                        message.platform = 2;
                        break;
                    case "ANDROID":
                    case 3:
                        message.platform = 3;
                        break;
                    case "IOS":
                    case 4:
                        message.platform = 4;
                        break;
                    case "UNKNOWN":
                    case 5:
                        message.platform = 5;
                        break;
                    }
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
                        object.installationId = "";
                        object.name = "";
                        object.platform = options.enums === String ? "LINUX" : 0;
                        object.version = "";
                    }
                    if (message.installationId != null && message.hasOwnProperty("installationId"))
                        object.installationId = message.installationId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.platform != null && message.hasOwnProperty("platform"))
                        object.platform = options.enums === String ? $root.qbychat.websocket.protocol.Platform[message.platform] === undefined ? message.platform : $root.qbychat.websocket.protocol.Platform[message.platform] : message.platform;
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

            /**
             * Platform enum.
             * @name qbychat.websocket.protocol.Platform
             * @enum {number}
             * @property {number} LINUX=0 LINUX value
             * @property {number} WINDOWS=1 WINDOWS value
             * @property {number} OSX=2 OSX value
             * @property {number} ANDROID=3 ANDROID value
             * @property {number} IOS=4 IOS value
             * @property {number} UNKNOWN=5 UNKNOWN value
             */
            protocol.Platform = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "LINUX"] = 0;
                values[valuesById[1] = "WINDOWS"] = 1;
                values[valuesById[2] = "OSX"] = 2;
                values[valuesById[3] = "ANDROID"] = 3;
                values[valuesById[4] = "IOS"] = 4;
                values[valuesById[5] = "UNKNOWN"] = 5;
                return values;
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

        websocket.auth = (function() {

            /**
             * Namespace auth.
             * @memberof qbychat.websocket
             * @namespace
             */
            const auth = {};

            auth.TokenLoginRequest = (function() {

                /**
                 * Properties of a TokenLoginRequest.
                 * @memberof qbychat.websocket.auth
                 * @interface ITokenLoginRequest
                 * @property {string|null} [token] TokenLoginRequest token
                 */

                /**
                 * Constructs a new TokenLoginRequest.
                 * @memberof qbychat.websocket.auth
                 * @classdesc Represents a TokenLoginRequest.
                 * @implements ITokenLoginRequest
                 * @constructor
                 * @param {qbychat.websocket.auth.ITokenLoginRequest=} [properties] Properties to set
                 */
                function TokenLoginRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TokenLoginRequest token.
                 * @member {string} token
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @instance
                 */
                TokenLoginRequest.prototype.token = "";

                /**
                 * Creates a new TokenLoginRequest instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.ITokenLoginRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.auth.TokenLoginRequest} TokenLoginRequest instance
                 */
                TokenLoginRequest.create = function create(properties) {
                    return new TokenLoginRequest(properties);
                };

                /**
                 * Encodes the specified TokenLoginRequest message. Does not implicitly {@link qbychat.websocket.auth.TokenLoginRequest.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.ITokenLoginRequest} message TokenLoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TokenLoginRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                    return writer;
                };

                /**
                 * Encodes the specified TokenLoginRequest message, length delimited. Does not implicitly {@link qbychat.websocket.auth.TokenLoginRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.ITokenLoginRequest} message TokenLoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TokenLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TokenLoginRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.auth.TokenLoginRequest} TokenLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TokenLoginRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.auth.TokenLoginRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.token = reader.string();
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
                 * Decodes a TokenLoginRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.auth.TokenLoginRequest} TokenLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TokenLoginRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TokenLoginRequest message.
                 * @function verify
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TokenLoginRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    return null;
                };

                /**
                 * Creates a TokenLoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.auth.TokenLoginRequest} TokenLoginRequest
                 */
                TokenLoginRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.auth.TokenLoginRequest)
                        return object;
                    let message = new $root.qbychat.websocket.auth.TokenLoginRequest();
                    if (object.token != null)
                        message.token = String(object.token);
                    return message;
                };

                /**
                 * Creates a plain object from a TokenLoginRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.TokenLoginRequest} message TokenLoginRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TokenLoginRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.token = "";
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    return object;
                };

                /**
                 * Converts this TokenLoginRequest to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TokenLoginRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for TokenLoginRequest
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.auth.TokenLoginRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                TokenLoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.auth.TokenLoginRequest";
                };

                return TokenLoginRequest;
            })();

            auth.TokenLoginResponse = (function() {

                /**
                 * Properties of a TokenLoginResponse.
                 * @memberof qbychat.websocket.auth
                 * @interface ITokenLoginResponse
                 * @property {qbychat.websocket.auth.LoginStatus|null} [status] TokenLoginResponse status
                 */

                /**
                 * Constructs a new TokenLoginResponse.
                 * @memberof qbychat.websocket.auth
                 * @classdesc Represents a TokenLoginResponse.
                 * @implements ITokenLoginResponse
                 * @constructor
                 * @param {qbychat.websocket.auth.ITokenLoginResponse=} [properties] Properties to set
                 */
                function TokenLoginResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TokenLoginResponse status.
                 * @member {qbychat.websocket.auth.LoginStatus} status
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @instance
                 */
                TokenLoginResponse.prototype.status = 0;

                /**
                 * Creates a new TokenLoginResponse instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.ITokenLoginResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.auth.TokenLoginResponse} TokenLoginResponse instance
                 */
                TokenLoginResponse.create = function create(properties) {
                    return new TokenLoginResponse(properties);
                };

                /**
                 * Encodes the specified TokenLoginResponse message. Does not implicitly {@link qbychat.websocket.auth.TokenLoginResponse.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.ITokenLoginResponse} message TokenLoginResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TokenLoginResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified TokenLoginResponse message, length delimited. Does not implicitly {@link qbychat.websocket.auth.TokenLoginResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.ITokenLoginResponse} message TokenLoginResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TokenLoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TokenLoginResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.auth.TokenLoginResponse} TokenLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TokenLoginResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.auth.TokenLoginResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.status = reader.int32();
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
                 * Decodes a TokenLoginResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.auth.TokenLoginResponse} TokenLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TokenLoginResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TokenLoginResponse message.
                 * @function verify
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TokenLoginResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 5:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a TokenLoginResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.auth.TokenLoginResponse} TokenLoginResponse
                 */
                TokenLoginResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.auth.TokenLoginResponse)
                        return object;
                    let message = new $root.qbychat.websocket.auth.TokenLoginResponse();
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "SUCCESS":
                    case 0:
                        message.status = 0;
                        break;
                    case "SESSION_TERMINATED":
                    case 5:
                        message.status = 5;
                        break;
                    case "TOKEN_EXPIRED":
                    case 1:
                        message.status = 1;
                        break;
                    case "BAD_TOKEN":
                    case 2:
                        message.status = 2;
                        break;
                    case "USER_NOT_FOUND":
                    case 3:
                        message.status = 3;
                        break;
                    case "BAD_PASSWORD":
                    case 4:
                        message.status = 4;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TokenLoginResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.TokenLoginResponse} message TokenLoginResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TokenLoginResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "SUCCESS" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.qbychat.websocket.auth.LoginStatus[message.status] === undefined ? message.status : $root.qbychat.websocket.auth.LoginStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this TokenLoginResponse to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TokenLoginResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for TokenLoginResponse
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.auth.TokenLoginResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                TokenLoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.auth.TokenLoginResponse";
                };

                return TokenLoginResponse;
            })();

            /**
             * LoginStatus enum.
             * @name qbychat.websocket.auth.LoginStatus
             * @enum {number}
             * @property {number} SUCCESS=0 SUCCESS value
             * @property {number} SESSION_TERMINATED=5 SESSION_TERMINATED value
             * @property {number} TOKEN_EXPIRED=1 TOKEN_EXPIRED value
             * @property {number} BAD_TOKEN=2 BAD_TOKEN value
             * @property {number} USER_NOT_FOUND=3 USER_NOT_FOUND value
             * @property {number} BAD_PASSWORD=4 BAD_PASSWORD value
             */
            auth.LoginStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SUCCESS"] = 0;
                values[valuesById[5] = "SESSION_TERMINATED"] = 5;
                values[valuesById[1] = "TOKEN_EXPIRED"] = 1;
                values[valuesById[2] = "BAD_TOKEN"] = 2;
                values[valuesById[3] = "USER_NOT_FOUND"] = 3;
                values[valuesById[4] = "BAD_PASSWORD"] = 4;
                return values;
            })();

            auth.UsernamePasswordLoginRequest = (function() {

                /**
                 * Properties of a UsernamePasswordLoginRequest.
                 * @memberof qbychat.websocket.auth
                 * @interface IUsernamePasswordLoginRequest
                 * @property {string|null} [username] UsernamePasswordLoginRequest username
                 * @property {string|null} [password] UsernamePasswordLoginRequest password
                 */

                /**
                 * Constructs a new UsernamePasswordLoginRequest.
                 * @memberof qbychat.websocket.auth
                 * @classdesc Represents a UsernamePasswordLoginRequest.
                 * @implements IUsernamePasswordLoginRequest
                 * @constructor
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginRequest=} [properties] Properties to set
                 */
                function UsernamePasswordLoginRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UsernamePasswordLoginRequest username.
                 * @member {string} username
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @instance
                 */
                UsernamePasswordLoginRequest.prototype.username = "";

                /**
                 * UsernamePasswordLoginRequest password.
                 * @member {string} password
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @instance
                 */
                UsernamePasswordLoginRequest.prototype.password = "";

                /**
                 * Creates a new UsernamePasswordLoginRequest instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginRequest} UsernamePasswordLoginRequest instance
                 */
                UsernamePasswordLoginRequest.create = function create(properties) {
                    return new UsernamePasswordLoginRequest(properties);
                };

                /**
                 * Encodes the specified UsernamePasswordLoginRequest message. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginRequest.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginRequest} message UsernamePasswordLoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UsernamePasswordLoginRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified UsernamePasswordLoginRequest message, length delimited. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginRequest} message UsernamePasswordLoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UsernamePasswordLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UsernamePasswordLoginRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginRequest} UsernamePasswordLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UsernamePasswordLoginRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.auth.UsernamePasswordLoginRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.username = reader.string();
                                break;
                            }
                        case 2: {
                                message.password = reader.string();
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
                 * Decodes a UsernamePasswordLoginRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginRequest} UsernamePasswordLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UsernamePasswordLoginRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UsernamePasswordLoginRequest message.
                 * @function verify
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UsernamePasswordLoginRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates a UsernamePasswordLoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginRequest} UsernamePasswordLoginRequest
                 */
                UsernamePasswordLoginRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.auth.UsernamePasswordLoginRequest)
                        return object;
                    let message = new $root.qbychat.websocket.auth.UsernamePasswordLoginRequest();
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a UsernamePasswordLoginRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {qbychat.websocket.auth.UsernamePasswordLoginRequest} message UsernamePasswordLoginRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UsernamePasswordLoginRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.username = "";
                        object.password = "";
                    }
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this UsernamePasswordLoginRequest to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UsernamePasswordLoginRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UsernamePasswordLoginRequest
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UsernamePasswordLoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.auth.UsernamePasswordLoginRequest";
                };

                return UsernamePasswordLoginRequest;
            })();

            auth.UsernamePasswordLoginResponse = (function() {

                /**
                 * Properties of a UsernamePasswordLoginResponse.
                 * @memberof qbychat.websocket.auth
                 * @interface IUsernamePasswordLoginResponse
                 * @property {qbychat.websocket.auth.LoginStatus|null} [status] UsernamePasswordLoginResponse status
                 */

                /**
                 * Constructs a new UsernamePasswordLoginResponse.
                 * @memberof qbychat.websocket.auth
                 * @classdesc Represents a UsernamePasswordLoginResponse.
                 * @implements IUsernamePasswordLoginResponse
                 * @constructor
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginResponse=} [properties] Properties to set
                 */
                function UsernamePasswordLoginResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UsernamePasswordLoginResponse status.
                 * @member {qbychat.websocket.auth.LoginStatus} status
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @instance
                 */
                UsernamePasswordLoginResponse.prototype.status = 0;

                /**
                 * Creates a new UsernamePasswordLoginResponse instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginResponse} UsernamePasswordLoginResponse instance
                 */
                UsernamePasswordLoginResponse.create = function create(properties) {
                    return new UsernamePasswordLoginResponse(properties);
                };

                /**
                 * Encodes the specified UsernamePasswordLoginResponse message. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginResponse.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginResponse} message UsernamePasswordLoginResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UsernamePasswordLoginResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified UsernamePasswordLoginResponse message, length delimited. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.IUsernamePasswordLoginResponse} message UsernamePasswordLoginResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UsernamePasswordLoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UsernamePasswordLoginResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginResponse} UsernamePasswordLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UsernamePasswordLoginResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.auth.UsernamePasswordLoginResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.status = reader.int32();
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
                 * Decodes a UsernamePasswordLoginResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginResponse} UsernamePasswordLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UsernamePasswordLoginResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UsernamePasswordLoginResponse message.
                 * @function verify
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UsernamePasswordLoginResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 5:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a UsernamePasswordLoginResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.auth.UsernamePasswordLoginResponse} UsernamePasswordLoginResponse
                 */
                UsernamePasswordLoginResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.auth.UsernamePasswordLoginResponse)
                        return object;
                    let message = new $root.qbychat.websocket.auth.UsernamePasswordLoginResponse();
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "SUCCESS":
                    case 0:
                        message.status = 0;
                        break;
                    case "SESSION_TERMINATED":
                    case 5:
                        message.status = 5;
                        break;
                    case "TOKEN_EXPIRED":
                    case 1:
                        message.status = 1;
                        break;
                    case "BAD_TOKEN":
                    case 2:
                        message.status = 2;
                        break;
                    case "USER_NOT_FOUND":
                    case 3:
                        message.status = 3;
                        break;
                    case "BAD_PASSWORD":
                    case 4:
                        message.status = 4;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UsernamePasswordLoginResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {qbychat.websocket.auth.UsernamePasswordLoginResponse} message UsernamePasswordLoginResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UsernamePasswordLoginResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "SUCCESS" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.qbychat.websocket.auth.LoginStatus[message.status] === undefined ? message.status : $root.qbychat.websocket.auth.LoginStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this UsernamePasswordLoginResponse to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UsernamePasswordLoginResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UsernamePasswordLoginResponse
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.auth.UsernamePasswordLoginResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UsernamePasswordLoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.auth.UsernamePasswordLoginResponse";
                };

                return UsernamePasswordLoginResponse;
            })();

            auth.TokenUpdateEvent = (function() {

                /**
                 * Properties of a TokenUpdateEvent.
                 * @memberof qbychat.websocket.auth
                 * @interface ITokenUpdateEvent
                 * @property {string|null} [token] TokenUpdateEvent token
                 * @property {google.protobuf.ITimestamp|null} [expireAt] TokenUpdateEvent expireAt
                 */

                /**
                 * Constructs a new TokenUpdateEvent.
                 * @memberof qbychat.websocket.auth
                 * @classdesc Represents a TokenUpdateEvent.
                 * @implements ITokenUpdateEvent
                 * @constructor
                 * @param {qbychat.websocket.auth.ITokenUpdateEvent=} [properties] Properties to set
                 */
                function TokenUpdateEvent(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TokenUpdateEvent token.
                 * @member {string} token
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @instance
                 */
                TokenUpdateEvent.prototype.token = "";

                /**
                 * TokenUpdateEvent expireAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} expireAt
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @instance
                 */
                TokenUpdateEvent.prototype.expireAt = null;

                /**
                 * Creates a new TokenUpdateEvent instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {qbychat.websocket.auth.ITokenUpdateEvent=} [properties] Properties to set
                 * @returns {qbychat.websocket.auth.TokenUpdateEvent} TokenUpdateEvent instance
                 */
                TokenUpdateEvent.create = function create(properties) {
                    return new TokenUpdateEvent(properties);
                };

                /**
                 * Encodes the specified TokenUpdateEvent message. Does not implicitly {@link qbychat.websocket.auth.TokenUpdateEvent.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {qbychat.websocket.auth.ITokenUpdateEvent} message TokenUpdateEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TokenUpdateEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                    if (message.expireAt != null && Object.hasOwnProperty.call(message, "expireAt"))
                        $root.google.protobuf.Timestamp.encode(message.expireAt, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified TokenUpdateEvent message, length delimited. Does not implicitly {@link qbychat.websocket.auth.TokenUpdateEvent.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {qbychat.websocket.auth.ITokenUpdateEvent} message TokenUpdateEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TokenUpdateEvent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TokenUpdateEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.auth.TokenUpdateEvent} TokenUpdateEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TokenUpdateEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.auth.TokenUpdateEvent();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.token = reader.string();
                                break;
                            }
                        case 2: {
                                message.expireAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                 * Decodes a TokenUpdateEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.auth.TokenUpdateEvent} TokenUpdateEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TokenUpdateEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TokenUpdateEvent message.
                 * @function verify
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TokenUpdateEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.expireAt != null && message.hasOwnProperty("expireAt")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.expireAt);
                        if (error)
                            return "expireAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a TokenUpdateEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.auth.TokenUpdateEvent} TokenUpdateEvent
                 */
                TokenUpdateEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.auth.TokenUpdateEvent)
                        return object;
                    let message = new $root.qbychat.websocket.auth.TokenUpdateEvent();
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.expireAt != null) {
                        if (typeof object.expireAt !== "object")
                            throw TypeError(".qbychat.websocket.auth.TokenUpdateEvent.expireAt: object expected");
                        message.expireAt = $root.google.protobuf.Timestamp.fromObject(object.expireAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TokenUpdateEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {qbychat.websocket.auth.TokenUpdateEvent} message TokenUpdateEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TokenUpdateEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.token = "";
                        object.expireAt = null;
                    }
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                        object.expireAt = $root.google.protobuf.Timestamp.toObject(message.expireAt, options);
                    return object;
                };

                /**
                 * Converts this TokenUpdateEvent to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TokenUpdateEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for TokenUpdateEvent
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.auth.TokenUpdateEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                TokenUpdateEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.auth.TokenUpdateEvent";
                };

                return TokenUpdateEvent;
            })();

            return auth;
        })();

        websocket.chat = (function() {

            /**
             * Namespace chat.
             * @memberof qbychat.websocket
             * @namespace
             */
            const chat = {};

            chat.Chat = (function() {

                /**
                 * Properties of a Chat.
                 * @memberof qbychat.websocket.chat
                 * @interface IChat
                 * @property {string|null} [chatId] Chat chatId
                 * @property {string|null} [name] Chat name
                 * @property {string|null} [title] Chat title
                 * @property {string|null} [description] Chat description
                 * @property {qbychat.websocket.chat.ChatType|null} [type] Chat type
                 */

                /**
                 * Constructs a new Chat.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents a Chat.
                 * @implements IChat
                 * @constructor
                 * @param {qbychat.websocket.chat.IChat=} [properties] Properties to set
                 */
                function Chat(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Chat chatId.
                 * @member {string} chatId
                 * @memberof qbychat.websocket.chat.Chat
                 * @instance
                 */
                Chat.prototype.chatId = "";

                /**
                 * Chat name.
                 * @member {string|null|undefined} name
                 * @memberof qbychat.websocket.chat.Chat
                 * @instance
                 */
                Chat.prototype.name = null;

                /**
                 * Chat title.
                 * @member {string} title
                 * @memberof qbychat.websocket.chat.Chat
                 * @instance
                 */
                Chat.prototype.title = "";

                /**
                 * Chat description.
                 * @member {string|null|undefined} description
                 * @memberof qbychat.websocket.chat.Chat
                 * @instance
                 */
                Chat.prototype.description = null;

                /**
                 * Chat type.
                 * @member {qbychat.websocket.chat.ChatType} type
                 * @memberof qbychat.websocket.chat.Chat
                 * @instance
                 */
                Chat.prototype.type = 0;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Chat.prototype, "_name", {
                    get: $util.oneOfGetter($oneOfFields = ["name"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Chat.prototype, "_description", {
                    get: $util.oneOfGetter($oneOfFields = ["description"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Chat instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {qbychat.websocket.chat.IChat=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.Chat} Chat instance
                 */
                Chat.create = function create(properties) {
                    return new Chat(properties);
                };

                /**
                 * Encodes the specified Chat message. Does not implicitly {@link qbychat.websocket.chat.Chat.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {qbychat.websocket.chat.IChat} message Chat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified Chat message, length delimited. Does not implicitly {@link qbychat.websocket.chat.Chat.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {qbychat.websocket.chat.IChat} message Chat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Chat message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.Chat} Chat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.Chat();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.chatId = reader.string();
                                break;
                            }
                        case 2: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.title = reader.string();
                                break;
                            }
                        case 4: {
                                message.description = reader.string();
                                break;
                            }
                        case 5: {
                                message.type = reader.int32();
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
                 * Decodes a Chat message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.Chat} Chat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Chat message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Chat.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.chatId != null && message.hasOwnProperty("chatId"))
                        if (!$util.isString(message.chatId))
                            return "chatId: string expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        properties._name = 1;
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    }
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.description != null && message.hasOwnProperty("description")) {
                        properties._description = 1;
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a Chat message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.Chat} Chat
                 */
                Chat.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.Chat)
                        return object;
                    let message = new $root.qbychat.websocket.chat.Chat();
                    if (object.chatId != null)
                        message.chatId = String(object.chatId);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.description != null)
                        message.description = String(object.description);
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "GROUP":
                    case 0:
                        message.type = 0;
                        break;
                    case "CHANNEL":
                    case 1:
                        message.type = 1;
                        break;
                    case "PRIVATE_MESSAGE":
                    case 2:
                        message.type = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Chat message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {qbychat.websocket.chat.Chat} message Chat
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Chat.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.chatId = "";
                        object.title = "";
                        object.type = options.enums === String ? "GROUP" : 0;
                    }
                    if (message.chatId != null && message.hasOwnProperty("chatId"))
                        object.chatId = message.chatId;
                    if (message.name != null && message.hasOwnProperty("name")) {
                        object.name = message.name;
                        if (options.oneofs)
                            object._name = "name";
                    }
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.description != null && message.hasOwnProperty("description")) {
                        object.description = message.description;
                        if (options.oneofs)
                            object._description = "description";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.qbychat.websocket.chat.ChatType[message.type] === undefined ? message.type : $root.qbychat.websocket.chat.ChatType[message.type] : message.type;
                    return object;
                };

                /**
                 * Converts this Chat to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.Chat
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Chat.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Chat
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.Chat
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.Chat";
                };

                return Chat;
            })();

            /**
             * ChatType enum.
             * @name qbychat.websocket.chat.ChatType
             * @enum {number}
             * @property {number} GROUP=0 GROUP value
             * @property {number} CHANNEL=1 CHANNEL value
             * @property {number} PRIVATE_MESSAGE=2 PRIVATE_MESSAGE value
             */
            chat.ChatType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "GROUP"] = 0;
                values[valuesById[1] = "CHANNEL"] = 1;
                values[valuesById[2] = "PRIVATE_MESSAGE"] = 2;
                return values;
            })();

            chat.SyncRequest = (function() {

                /**
                 * Properties of a SyncRequest.
                 * @memberof qbychat.websocket.chat
                 * @interface ISyncRequest
                 */

                /**
                 * Constructs a new SyncRequest.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents a SyncRequest.
                 * @implements ISyncRequest
                 * @constructor
                 * @param {qbychat.websocket.chat.ISyncRequest=} [properties] Properties to set
                 */
                function SyncRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new SyncRequest instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {qbychat.websocket.chat.ISyncRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.SyncRequest} SyncRequest instance
                 */
                SyncRequest.create = function create(properties) {
                    return new SyncRequest(properties);
                };

                /**
                 * Encodes the specified SyncRequest message. Does not implicitly {@link qbychat.websocket.chat.SyncRequest.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {qbychat.websocket.chat.ISyncRequest} message SyncRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified SyncRequest message, length delimited. Does not implicitly {@link qbychat.websocket.chat.SyncRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {qbychat.websocket.chat.ISyncRequest} message SyncRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.SyncRequest} SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.SyncRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.SyncRequest} SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyncRequest message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyncRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a SyncRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.SyncRequest} SyncRequest
                 */
                SyncRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.SyncRequest)
                        return object;
                    return new $root.qbychat.websocket.chat.SyncRequest();
                };

                /**
                 * Creates a plain object from a SyncRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {qbychat.websocket.chat.SyncRequest} message SyncRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyncRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this SyncRequest to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyncRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SyncRequest
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.SyncRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SyncRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.SyncRequest";
                };

                return SyncRequest;
            })();

            chat.SyncResponse = (function() {

                /**
                 * Properties of a SyncResponse.
                 * @memberof qbychat.websocket.chat
                 * @interface ISyncResponse
                 * @property {Array.<qbychat.websocket.chat.IChat>|null} [chats] SyncResponse chats
                 */

                /**
                 * Constructs a new SyncResponse.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents a SyncResponse.
                 * @implements ISyncResponse
                 * @constructor
                 * @param {qbychat.websocket.chat.ISyncResponse=} [properties] Properties to set
                 */
                function SyncResponse(properties) {
                    this.chats = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SyncResponse chats.
                 * @member {Array.<qbychat.websocket.chat.IChat>} chats
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @instance
                 */
                SyncResponse.prototype.chats = $util.emptyArray;

                /**
                 * Creates a new SyncResponse instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {qbychat.websocket.chat.ISyncResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.SyncResponse} SyncResponse instance
                 */
                SyncResponse.create = function create(properties) {
                    return new SyncResponse(properties);
                };

                /**
                 * Encodes the specified SyncResponse message. Does not implicitly {@link qbychat.websocket.chat.SyncResponse.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {qbychat.websocket.chat.ISyncResponse} message SyncResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chats != null && message.chats.length)
                        for (let i = 0; i < message.chats.length; ++i)
                            $root.qbychat.websocket.chat.Chat.encode(message.chats[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SyncResponse message, length delimited. Does not implicitly {@link qbychat.websocket.chat.SyncResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {qbychat.websocket.chat.ISyncResponse} message SyncResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyncResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.SyncResponse} SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.SyncResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.chats && message.chats.length))
                                    message.chats = [];
                                message.chats.push($root.qbychat.websocket.chat.Chat.decode(reader, reader.uint32()));
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
                 * Decodes a SyncResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.SyncResponse} SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyncResponse message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyncResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chats != null && message.hasOwnProperty("chats")) {
                        if (!Array.isArray(message.chats))
                            return "chats: array expected";
                        for (let i = 0; i < message.chats.length; ++i) {
                            let error = $root.qbychat.websocket.chat.Chat.verify(message.chats[i]);
                            if (error)
                                return "chats." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SyncResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.SyncResponse} SyncResponse
                 */
                SyncResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.SyncResponse)
                        return object;
                    let message = new $root.qbychat.websocket.chat.SyncResponse();
                    if (object.chats) {
                        if (!Array.isArray(object.chats))
                            throw TypeError(".qbychat.websocket.chat.SyncResponse.chats: array expected");
                        message.chats = [];
                        for (let i = 0; i < object.chats.length; ++i) {
                            if (typeof object.chats[i] !== "object")
                                throw TypeError(".qbychat.websocket.chat.SyncResponse.chats: object expected");
                            message.chats[i] = $root.qbychat.websocket.chat.Chat.fromObject(object.chats[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SyncResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {qbychat.websocket.chat.SyncResponse} message SyncResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyncResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.chats = [];
                    if (message.chats && message.chats.length) {
                        object.chats = [];
                        for (let j = 0; j < message.chats.length; ++j)
                            object.chats[j] = $root.qbychat.websocket.chat.Chat.toObject(message.chats[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SyncResponse to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyncResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SyncResponse
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.SyncResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SyncResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.SyncResponse";
                };

                return SyncResponse;
            })();

            chat.CreateGroupRequest = (function() {

                /**
                 * Properties of a CreateGroupRequest.
                 * @memberof qbychat.websocket.chat
                 * @interface ICreateGroupRequest
                 * @property {string|null} [title] CreateGroupRequest title
                 */

                /**
                 * Constructs a new CreateGroupRequest.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents a CreateGroupRequest.
                 * @implements ICreateGroupRequest
                 * @constructor
                 * @param {qbychat.websocket.chat.ICreateGroupRequest=} [properties] Properties to set
                 */
                function CreateGroupRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupRequest title.
                 * @member {string} title
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @instance
                 */
                CreateGroupRequest.prototype.title = "";

                /**
                 * Creates a new CreateGroupRequest instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {qbychat.websocket.chat.ICreateGroupRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.CreateGroupRequest} CreateGroupRequest instance
                 */
                CreateGroupRequest.create = function create(properties) {
                    return new CreateGroupRequest(properties);
                };

                /**
                 * Encodes the specified CreateGroupRequest message. Does not implicitly {@link qbychat.websocket.chat.CreateGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {qbychat.websocket.chat.ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                    return writer;
                };

                /**
                 * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link qbychat.websocket.chat.CreateGroupRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {qbychat.websocket.chat.ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.CreateGroupRequest} CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.CreateGroupRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.title = reader.string();
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
                 * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.CreateGroupRequest} CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateGroupRequest message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateGroupRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    return null;
                };

                /**
                 * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.CreateGroupRequest} CreateGroupRequest
                 */
                CreateGroupRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.CreateGroupRequest)
                        return object;
                    let message = new $root.qbychat.websocket.chat.CreateGroupRequest();
                    if (object.title != null)
                        message.title = String(object.title);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {qbychat.websocket.chat.CreateGroupRequest} message CreateGroupRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateGroupRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.title = "";
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    return object;
                };

                /**
                 * Converts this CreateGroupRequest to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateGroupRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateGroupRequest
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.CreateGroupRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateGroupRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.CreateGroupRequest";
                };

                return CreateGroupRequest;
            })();

            chat.CreateGroupResponse = (function() {

                /**
                 * Properties of a CreateGroupResponse.
                 * @memberof qbychat.websocket.chat
                 * @interface ICreateGroupResponse
                 */

                /**
                 * Constructs a new CreateGroupResponse.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents a CreateGroupResponse.
                 * @implements ICreateGroupResponse
                 * @constructor
                 * @param {qbychat.websocket.chat.ICreateGroupResponse=} [properties] Properties to set
                 */
                function CreateGroupResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new CreateGroupResponse instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {qbychat.websocket.chat.ICreateGroupResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.CreateGroupResponse} CreateGroupResponse instance
                 */
                CreateGroupResponse.create = function create(properties) {
                    return new CreateGroupResponse(properties);
                };

                /**
                 * Encodes the specified CreateGroupResponse message. Does not implicitly {@link qbychat.websocket.chat.CreateGroupResponse.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {qbychat.websocket.chat.ICreateGroupResponse} message CreateGroupResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified CreateGroupResponse message, length delimited. Does not implicitly {@link qbychat.websocket.chat.CreateGroupResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {qbychat.websocket.chat.ICreateGroupResponse} message CreateGroupResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateGroupResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.CreateGroupResponse} CreateGroupResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.CreateGroupResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CreateGroupResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.CreateGroupResponse} CreateGroupResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateGroupResponse message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateGroupResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a CreateGroupResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.CreateGroupResponse} CreateGroupResponse
                 */
                CreateGroupResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.CreateGroupResponse)
                        return object;
                    return new $root.qbychat.websocket.chat.CreateGroupResponse();
                };

                /**
                 * Creates a plain object from a CreateGroupResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {qbychat.websocket.chat.CreateGroupResponse} message CreateGroupResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateGroupResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this CreateGroupResponse to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateGroupResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateGroupResponse
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.CreateGroupResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateGroupResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.CreateGroupResponse";
                };

                return CreateGroupResponse;
            })();

            chat.AddChatEvent = (function() {

                /**
                 * Properties of an AddChatEvent.
                 * @memberof qbychat.websocket.chat
                 * @interface IAddChatEvent
                 * @property {qbychat.websocket.chat.IChat|null} [chat] AddChatEvent chat
                 */

                /**
                 * Constructs a new AddChatEvent.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents an AddChatEvent.
                 * @implements IAddChatEvent
                 * @constructor
                 * @param {qbychat.websocket.chat.IAddChatEvent=} [properties] Properties to set
                 */
                function AddChatEvent(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AddChatEvent chat.
                 * @member {qbychat.websocket.chat.IChat|null|undefined} chat
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @instance
                 */
                AddChatEvent.prototype.chat = null;

                /**
                 * Creates a new AddChatEvent instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.IAddChatEvent=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.AddChatEvent} AddChatEvent instance
                 */
                AddChatEvent.create = function create(properties) {
                    return new AddChatEvent(properties);
                };

                /**
                 * Encodes the specified AddChatEvent message. Does not implicitly {@link qbychat.websocket.chat.AddChatEvent.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.IAddChatEvent} message AddChatEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddChatEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
                        $root.qbychat.websocket.chat.Chat.encode(message.chat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AddChatEvent message, length delimited. Does not implicitly {@link qbychat.websocket.chat.AddChatEvent.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.IAddChatEvent} message AddChatEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddChatEvent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AddChatEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.AddChatEvent} AddChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddChatEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.AddChatEvent();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.chat = $root.qbychat.websocket.chat.Chat.decode(reader, reader.uint32());
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
                 * Decodes an AddChatEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.AddChatEvent} AddChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddChatEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AddChatEvent message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AddChatEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chat != null && message.hasOwnProperty("chat")) {
                        let error = $root.qbychat.websocket.chat.Chat.verify(message.chat);
                        if (error)
                            return "chat." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AddChatEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.AddChatEvent} AddChatEvent
                 */
                AddChatEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.AddChatEvent)
                        return object;
                    let message = new $root.qbychat.websocket.chat.AddChatEvent();
                    if (object.chat != null) {
                        if (typeof object.chat !== "object")
                            throw TypeError(".qbychat.websocket.chat.AddChatEvent.chat: object expected");
                        message.chat = $root.qbychat.websocket.chat.Chat.fromObject(object.chat);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AddChatEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.AddChatEvent} message AddChatEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddChatEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.chat = null;
                    if (message.chat != null && message.hasOwnProperty("chat"))
                        object.chat = $root.qbychat.websocket.chat.Chat.toObject(message.chat, options);
                    return object;
                };

                /**
                 * Converts this AddChatEvent to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AddChatEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AddChatEvent
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.AddChatEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AddChatEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.AddChatEvent";
                };

                return AddChatEvent;
            })();

            chat.RemoveChatEvent = (function() {

                /**
                 * Properties of a RemoveChatEvent.
                 * @memberof qbychat.websocket.chat
                 * @interface IRemoveChatEvent
                 * @property {qbychat.websocket.chat.IChat|null} [chat] RemoveChatEvent chat
                 */

                /**
                 * Constructs a new RemoveChatEvent.
                 * @memberof qbychat.websocket.chat
                 * @classdesc Represents a RemoveChatEvent.
                 * @implements IRemoveChatEvent
                 * @constructor
                 * @param {qbychat.websocket.chat.IRemoveChatEvent=} [properties] Properties to set
                 */
                function RemoveChatEvent(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RemoveChatEvent chat.
                 * @member {qbychat.websocket.chat.IChat|null|undefined} chat
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @instance
                 */
                RemoveChatEvent.prototype.chat = null;

                /**
                 * Creates a new RemoveChatEvent instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.IRemoveChatEvent=} [properties] Properties to set
                 * @returns {qbychat.websocket.chat.RemoveChatEvent} RemoveChatEvent instance
                 */
                RemoveChatEvent.create = function create(properties) {
                    return new RemoveChatEvent(properties);
                };

                /**
                 * Encodes the specified RemoveChatEvent message. Does not implicitly {@link qbychat.websocket.chat.RemoveChatEvent.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.IRemoveChatEvent} message RemoveChatEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveChatEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
                        $root.qbychat.websocket.chat.Chat.encode(message.chat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RemoveChatEvent message, length delimited. Does not implicitly {@link qbychat.websocket.chat.RemoveChatEvent.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.IRemoveChatEvent} message RemoveChatEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveChatEvent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RemoveChatEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.chat.RemoveChatEvent} RemoveChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveChatEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.chat.RemoveChatEvent();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.chat = $root.qbychat.websocket.chat.Chat.decode(reader, reader.uint32());
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
                 * Decodes a RemoveChatEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.chat.RemoveChatEvent} RemoveChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveChatEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RemoveChatEvent message.
                 * @function verify
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RemoveChatEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chat != null && message.hasOwnProperty("chat")) {
                        let error = $root.qbychat.websocket.chat.Chat.verify(message.chat);
                        if (error)
                            return "chat." + error;
                    }
                    return null;
                };

                /**
                 * Creates a RemoveChatEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.chat.RemoveChatEvent} RemoveChatEvent
                 */
                RemoveChatEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.chat.RemoveChatEvent)
                        return object;
                    let message = new $root.qbychat.websocket.chat.RemoveChatEvent();
                    if (object.chat != null) {
                        if (typeof object.chat !== "object")
                            throw TypeError(".qbychat.websocket.chat.RemoveChatEvent.chat: object expected");
                        message.chat = $root.qbychat.websocket.chat.Chat.fromObject(object.chat);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RemoveChatEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {qbychat.websocket.chat.RemoveChatEvent} message RemoveChatEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveChatEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.chat = null;
                    if (message.chat != null && message.hasOwnProperty("chat"))
                        object.chat = $root.qbychat.websocket.chat.Chat.toObject(message.chat, options);
                    return object;
                };

                /**
                 * Converts this RemoveChatEvent to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveChatEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RemoveChatEvent
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.chat.RemoveChatEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RemoveChatEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.chat.RemoveChatEvent";
                };

                return RemoveChatEvent;
            })();

            return chat;
        })();

        websocket.user = (function() {

            /**
             * Namespace user.
             * @memberof qbychat.websocket
             * @namespace
             */
            const user = {};

            user.RegisterRequest = (function() {

                /**
                 * Properties of a RegisterRequest.
                 * @memberof qbychat.websocket.user
                 * @interface IRegisterRequest
                 * @property {string|null} [username] RegisterRequest username
                 * @property {string|null} [password] RegisterRequest password
                 */

                /**
                 * Constructs a new RegisterRequest.
                 * @memberof qbychat.websocket.user
                 * @classdesc Represents a RegisterRequest.
                 * @implements IRegisterRequest
                 * @constructor
                 * @param {qbychat.websocket.user.IRegisterRequest=} [properties] Properties to set
                 */
                function RegisterRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RegisterRequest username.
                 * @member {string} username
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @instance
                 */
                RegisterRequest.prototype.username = "";

                /**
                 * RegisterRequest password.
                 * @member {string} password
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @instance
                 */
                RegisterRequest.prototype.password = "";

                /**
                 * Creates a new RegisterRequest instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {qbychat.websocket.user.IRegisterRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.user.RegisterRequest} RegisterRequest instance
                 */
                RegisterRequest.create = function create(properties) {
                    return new RegisterRequest(properties);
                };

                /**
                 * Encodes the specified RegisterRequest message. Does not implicitly {@link qbychat.websocket.user.RegisterRequest.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {qbychat.websocket.user.IRegisterRequest} message RegisterRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RegisterRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link qbychat.websocket.user.RegisterRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {qbychat.websocket.user.IRegisterRequest} message RegisterRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RegisterRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.user.RegisterRequest} RegisterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RegisterRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.user.RegisterRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.username = reader.string();
                                break;
                            }
                        case 2: {
                                message.password = reader.string();
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
                 * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.user.RegisterRequest} RegisterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RegisterRequest message.
                 * @function verify
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RegisterRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.user.RegisterRequest} RegisterRequest
                 */
                RegisterRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.user.RegisterRequest)
                        return object;
                    let message = new $root.qbychat.websocket.user.RegisterRequest();
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {qbychat.websocket.user.RegisterRequest} message RegisterRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RegisterRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.username = "";
                        object.password = "";
                    }
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this RegisterRequest to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RegisterRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RegisterRequest
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.user.RegisterRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RegisterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.user.RegisterRequest";
                };

                return RegisterRequest;
            })();

            user.RegisterResponse = (function() {

                /**
                 * Properties of a RegisterResponse.
                 * @memberof qbychat.websocket.user
                 * @interface IRegisterResponse
                 * @property {qbychat.websocket.user.RegisterStatus|null} [status] RegisterResponse status
                 * @property {string|null} [message] RegisterResponse message
                 */

                /**
                 * Constructs a new RegisterResponse.
                 * @memberof qbychat.websocket.user
                 * @classdesc Represents a RegisterResponse.
                 * @implements IRegisterResponse
                 * @constructor
                 * @param {qbychat.websocket.user.IRegisterResponse=} [properties] Properties to set
                 */
                function RegisterResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RegisterResponse status.
                 * @member {qbychat.websocket.user.RegisterStatus} status
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @instance
                 */
                RegisterResponse.prototype.status = 0;

                /**
                 * RegisterResponse message.
                 * @member {string|null|undefined} message
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @instance
                 */
                RegisterResponse.prototype.message = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(RegisterResponse.prototype, "_message", {
                    get: $util.oneOfGetter($oneOfFields = ["message"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new RegisterResponse instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {qbychat.websocket.user.IRegisterResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.user.RegisterResponse} RegisterResponse instance
                 */
                RegisterResponse.create = function create(properties) {
                    return new RegisterResponse(properties);
                };

                /**
                 * Encodes the specified RegisterResponse message. Does not implicitly {@link qbychat.websocket.user.RegisterResponse.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {qbychat.websocket.user.IRegisterResponse} message RegisterResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RegisterResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                    return writer;
                };

                /**
                 * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link qbychat.websocket.user.RegisterResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {qbychat.websocket.user.IRegisterResponse} message RegisterResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RegisterResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.user.RegisterResponse} RegisterResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RegisterResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.user.RegisterResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.status = reader.int32();
                                break;
                            }
                        case 2: {
                                message.message = reader.string();
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
                 * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.user.RegisterResponse} RegisterResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RegisterResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RegisterResponse message.
                 * @function verify
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RegisterResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.message != null && message.hasOwnProperty("message")) {
                        properties._message = 1;
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.user.RegisterResponse} RegisterResponse
                 */
                RegisterResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.user.RegisterResponse)
                        return object;
                    let message = new $root.qbychat.websocket.user.RegisterResponse();
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "SUCCESS":
                    case 0:
                        message.status = 0;
                        break;
                    case "USERNAME_EXISTS":
                    case 1:
                        message.status = 1;
                        break;
                    case "BAD_USERNAME":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };

                /**
                 * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {qbychat.websocket.user.RegisterResponse} message RegisterResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RegisterResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "SUCCESS" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.qbychat.websocket.user.RegisterStatus[message.status] === undefined ? message.status : $root.qbychat.websocket.user.RegisterStatus[message.status] : message.status;
                    if (message.message != null && message.hasOwnProperty("message")) {
                        object.message = message.message;
                        if (options.oneofs)
                            object._message = "message";
                    }
                    return object;
                };

                /**
                 * Converts this RegisterResponse to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RegisterResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RegisterResponse
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.user.RegisterResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RegisterResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.user.RegisterResponse";
                };

                return RegisterResponse;
            })();

            /**
             * RegisterStatus enum.
             * @name qbychat.websocket.user.RegisterStatus
             * @enum {number}
             * @property {number} SUCCESS=0 SUCCESS value
             * @property {number} USERNAME_EXISTS=1 USERNAME_EXISTS value
             * @property {number} BAD_USERNAME=2 BAD_USERNAME value
             */
            user.RegisterStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SUCCESS"] = 0;
                values[valuesById[1] = "USERNAME_EXISTS"] = 1;
                values[valuesById[2] = "BAD_USERNAME"] = 2;
                return values;
            })();

            user.User = (function() {

                /**
                 * Properties of a User.
                 * @memberof qbychat.websocket.user
                 * @interface IUser
                 * @property {string|null} [username] User username
                 * @property {string|null} [nickname] User nickname
                 * @property {string|null} [bio] User bio
                 * @property {Array.<qbychat.websocket.user.Role>|null} [roles] User roles
                 * @property {google.protobuf.ITimestamp|null} [createdAt] User createdAt
                 */

                /**
                 * Constructs a new User.
                 * @memberof qbychat.websocket.user
                 * @classdesc Represents a User.
                 * @implements IUser
                 * @constructor
                 * @param {qbychat.websocket.user.IUser=} [properties] Properties to set
                 */
                function User(properties) {
                    this.roles = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * User username.
                 * @member {string} username
                 * @memberof qbychat.websocket.user.User
                 * @instance
                 */
                User.prototype.username = "";

                /**
                 * User nickname.
                 * @member {string} nickname
                 * @memberof qbychat.websocket.user.User
                 * @instance
                 */
                User.prototype.nickname = "";

                /**
                 * User bio.
                 * @member {string|null|undefined} bio
                 * @memberof qbychat.websocket.user.User
                 * @instance
                 */
                User.prototype.bio = null;

                /**
                 * User roles.
                 * @member {Array.<qbychat.websocket.user.Role>} roles
                 * @memberof qbychat.websocket.user.User
                 * @instance
                 */
                User.prototype.roles = $util.emptyArray;

                /**
                 * User createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof qbychat.websocket.user.User
                 * @instance
                 */
                User.prototype.createdAt = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(User.prototype, "_bio", {
                    get: $util.oneOfGetter($oneOfFields = ["bio"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(User.prototype, "_createdAt", {
                    get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new User instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {qbychat.websocket.user.IUser=} [properties] Properties to set
                 * @returns {qbychat.websocket.user.User} User instance
                 */
                User.create = function create(properties) {
                    return new User(properties);
                };

                /**
                 * Encodes the specified User message. Does not implicitly {@link qbychat.websocket.user.User.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {qbychat.websocket.user.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                    if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                    if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.bio);
                    if (message.roles != null && message.roles.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (let i = 0; i < message.roles.length; ++i)
                            writer.int32(message.roles[i]);
                        writer.ldelim();
                    }
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link qbychat.websocket.user.User.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {qbychat.websocket.user.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.user.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.user.User();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.username = reader.string();
                                break;
                            }
                        case 2: {
                                message.nickname = reader.string();
                                break;
                            }
                        case 3: {
                                message.bio = reader.string();
                                break;
                            }
                        case 4: {
                                if (!(message.roles && message.roles.length))
                                    message.roles = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.roles.push(reader.int32());
                                } else
                                    message.roles.push(reader.int32());
                                break;
                            }
                        case 5: {
                                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.user.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a User message.
                 * @function verify
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                User.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        if (!$util.isString(message.nickname))
                            return "nickname: string expected";
                    if (message.bio != null && message.hasOwnProperty("bio")) {
                        properties._bio = 1;
                        if (!$util.isString(message.bio))
                            return "bio: string expected";
                    }
                    if (message.roles != null && message.hasOwnProperty("roles")) {
                        if (!Array.isArray(message.roles))
                            return "roles: array expected";
                        for (let i = 0; i < message.roles.length; ++i)
                            switch (message.roles[i]) {
                            default:
                                return "roles: enum value[] expected";
                            case 0:
                            case 1:
                                break;
                            }
                    }
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        properties._createdAt = 1;
                        {
                            let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                            if (error)
                                return "createdAt." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.user.User} User
                 */
                User.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.user.User)
                        return object;
                    let message = new $root.qbychat.websocket.user.User();
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.nickname != null)
                        message.nickname = String(object.nickname);
                    if (object.bio != null)
                        message.bio = String(object.bio);
                    if (object.roles) {
                        if (!Array.isArray(object.roles))
                            throw TypeError(".qbychat.websocket.user.User.roles: array expected");
                        message.roles = [];
                        for (let i = 0; i < object.roles.length; ++i)
                            switch (object.roles[i]) {
                            default:
                                if (typeof object.roles[i] === "number") {
                                    message.roles[i] = object.roles[i];
                                    break;
                                }
                            case "USER":
                            case 0:
                                message.roles[i] = 0;
                                break;
                            case "ADMIN":
                            case 1:
                                message.roles[i] = 1;
                                break;
                            }
                    }
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".qbychat.websocket.user.User.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {qbychat.websocket.user.User} message User
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                User.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.roles = [];
                    if (options.defaults) {
                        object.username = "";
                        object.nickname = "";
                    }
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        object.nickname = message.nickname;
                    if (message.bio != null && message.hasOwnProperty("bio")) {
                        object.bio = message.bio;
                        if (options.oneofs)
                            object._bio = "bio";
                    }
                    if (message.roles && message.roles.length) {
                        object.roles = [];
                        for (let j = 0; j < message.roles.length; ++j)
                            object.roles[j] = options.enums === String ? $root.qbychat.websocket.user.Role[message.roles[j]] === undefined ? message.roles[j] : $root.qbychat.websocket.user.Role[message.roles[j]] : message.roles[j];
                    }
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                        if (options.oneofs)
                            object._createdAt = "createdAt";
                    }
                    return object;
                };

                /**
                 * Converts this User to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.user.User
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                User.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for User
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.user.User
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.user.User";
                };

                return User;
            })();

            /**
             * Role enum.
             * @name qbychat.websocket.user.Role
             * @enum {number}
             * @property {number} USER=0 USER value
             * @property {number} ADMIN=1 ADMIN value
             */
            user.Role = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER"] = 0;
                values[valuesById[1] = "ADMIN"] = 1;
                return values;
            })();

            user.SyncRequest = (function() {

                /**
                 * Properties of a SyncRequest.
                 * @memberof qbychat.websocket.user
                 * @interface ISyncRequest
                 */

                /**
                 * Constructs a new SyncRequest.
                 * @memberof qbychat.websocket.user
                 * @classdesc Represents a SyncRequest.
                 * @implements ISyncRequest
                 * @constructor
                 * @param {qbychat.websocket.user.ISyncRequest=} [properties] Properties to set
                 */
                function SyncRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new SyncRequest instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {qbychat.websocket.user.ISyncRequest=} [properties] Properties to set
                 * @returns {qbychat.websocket.user.SyncRequest} SyncRequest instance
                 */
                SyncRequest.create = function create(properties) {
                    return new SyncRequest(properties);
                };

                /**
                 * Encodes the specified SyncRequest message. Does not implicitly {@link qbychat.websocket.user.SyncRequest.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {qbychat.websocket.user.ISyncRequest} message SyncRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified SyncRequest message, length delimited. Does not implicitly {@link qbychat.websocket.user.SyncRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {qbychat.websocket.user.ISyncRequest} message SyncRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.user.SyncRequest} SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.user.SyncRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.user.SyncRequest} SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyncRequest message.
                 * @function verify
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyncRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a SyncRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.user.SyncRequest} SyncRequest
                 */
                SyncRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.user.SyncRequest)
                        return object;
                    return new $root.qbychat.websocket.user.SyncRequest();
                };

                /**
                 * Creates a plain object from a SyncRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {qbychat.websocket.user.SyncRequest} message SyncRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyncRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this SyncRequest to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyncRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SyncRequest
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.user.SyncRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SyncRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.user.SyncRequest";
                };

                return SyncRequest;
            })();

            user.SyncResponse = (function() {

                /**
                 * Properties of a SyncResponse.
                 * @memberof qbychat.websocket.user
                 * @interface ISyncResponse
                 * @property {qbychat.websocket.user.IUser|null} [user] SyncResponse user
                 */

                /**
                 * Constructs a new SyncResponse.
                 * @memberof qbychat.websocket.user
                 * @classdesc Represents a SyncResponse.
                 * @implements ISyncResponse
                 * @constructor
                 * @param {qbychat.websocket.user.ISyncResponse=} [properties] Properties to set
                 */
                function SyncResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SyncResponse user.
                 * @member {qbychat.websocket.user.IUser|null|undefined} user
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @instance
                 */
                SyncResponse.prototype.user = null;

                /**
                 * Creates a new SyncResponse instance using the specified properties.
                 * @function create
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {qbychat.websocket.user.ISyncResponse=} [properties] Properties to set
                 * @returns {qbychat.websocket.user.SyncResponse} SyncResponse instance
                 */
                SyncResponse.create = function create(properties) {
                    return new SyncResponse(properties);
                };

                /**
                 * Encodes the specified SyncResponse message. Does not implicitly {@link qbychat.websocket.user.SyncResponse.verify|verify} messages.
                 * @function encode
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {qbychat.websocket.user.ISyncResponse} message SyncResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                        $root.qbychat.websocket.user.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SyncResponse message, length delimited. Does not implicitly {@link qbychat.websocket.user.SyncResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {qbychat.websocket.user.ISyncResponse} message SyncResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyncResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {qbychat.websocket.user.SyncResponse} SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.qbychat.websocket.user.SyncResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.user = $root.qbychat.websocket.user.User.decode(reader, reader.uint32());
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
                 * Decodes a SyncResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {qbychat.websocket.user.SyncResponse} SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyncResponse message.
                 * @function verify
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyncResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        let error = $root.qbychat.websocket.user.User.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    return null;
                };

                /**
                 * Creates a SyncResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {qbychat.websocket.user.SyncResponse} SyncResponse
                 */
                SyncResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.qbychat.websocket.user.SyncResponse)
                        return object;
                    let message = new $root.qbychat.websocket.user.SyncResponse();
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".qbychat.websocket.user.SyncResponse.user: object expected");
                        message.user = $root.qbychat.websocket.user.User.fromObject(object.user);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SyncResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {qbychat.websocket.user.SyncResponse} message SyncResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyncResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.user = null;
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.qbychat.websocket.user.User.toObject(message.user, options);
                    return object;
                };

                /**
                 * Converts this SyncResponse to JSON.
                 * @function toJSON
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyncResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SyncResponse
                 * @function getTypeUrl
                 * @memberof qbychat.websocket.user.SyncResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SyncResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/qbychat.websocket.user.SyncResponse";
                };

                return SyncResponse;
            })();

            return user;
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

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
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
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
