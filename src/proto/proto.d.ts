import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace qbychat. */
export namespace qbychat {

    /** Namespace websocket. */
    namespace websocket {

        /** Namespace protocol. */
        namespace protocol {

            /** Properties of a ClientboundMessage. */
            interface IClientboundMessage {

                /** ClientboundMessage account */
                account?: (string|null);

                /** ClientboundMessage response */
                response?: (qbychat.websocket.protocol.IResponse|null);

                /** ClientboundMessage event */
                event?: (google.protobuf.IAny|null);

                /** ClientboundMessage serverHandshake */
                serverHandshake?: (qbychat.websocket.protocol.IServerHandshake|null);
            }

            /** Represents a ClientboundMessage. */
            class ClientboundMessage implements IClientboundMessage {

                /**
                 * Constructs a new ClientboundMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IClientboundMessage);

                /** ClientboundMessage account. */
                public account?: (string|null);

                /** ClientboundMessage response. */
                public response?: (qbychat.websocket.protocol.IResponse|null);

                /** ClientboundMessage event. */
                public event?: (google.protobuf.IAny|null);

                /** ClientboundMessage serverHandshake. */
                public serverHandshake?: (qbychat.websocket.protocol.IServerHandshake|null);

                /** ClientboundMessage content. */
                public content?: ("response"|"event"|"serverHandshake");

                /**
                 * Creates a new ClientboundMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClientboundMessage instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IClientboundMessage): qbychat.websocket.protocol.ClientboundMessage;

                /**
                 * Encodes the specified ClientboundMessage message. Does not implicitly {@link qbychat.websocket.protocol.ClientboundMessage.verify|verify} messages.
                 * @param message ClientboundMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IClientboundMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClientboundMessage message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ClientboundMessage.verify|verify} messages.
                 * @param message ClientboundMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IClientboundMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClientboundMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClientboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.ClientboundMessage;

                /**
                 * Decodes a ClientboundMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClientboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.ClientboundMessage;

                /**
                 * Verifies a ClientboundMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClientboundMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClientboundMessage
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.ClientboundMessage;

                /**
                 * Creates a plain object from a ClientboundMessage message. Also converts values to other types if specified.
                 * @param message ClientboundMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.ClientboundMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClientboundMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ClientboundMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response ticket */
                ticket?: (string|null);

                /** Response payload */
                payload?: (Uint8Array|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IResponse);

                /** Response ticket. */
                public ticket: string;

                /** Response payload. */
                public payload: Uint8Array;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IResponse): qbychat.websocket.protocol.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link qbychat.websocket.protocol.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Response
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ServerboundMessage. */
            interface IServerboundMessage {

                /** ServerboundMessage account */
                account?: (string|null);

                /** ServerboundMessage clientHandshake */
                clientHandshake?: (qbychat.websocket.protocol.IClientHandshake|null);

                /** ServerboundMessage request */
                request?: (qbychat.websocket.protocol.IRequest|null);
            }

            /** Represents a ServerboundMessage. */
            class ServerboundMessage implements IServerboundMessage {

                /**
                 * Constructs a new ServerboundMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IServerboundMessage);

                /** ServerboundMessage account. */
                public account?: (string|null);

                /** ServerboundMessage clientHandshake. */
                public clientHandshake?: (qbychat.websocket.protocol.IClientHandshake|null);

                /** ServerboundMessage request. */
                public request?: (qbychat.websocket.protocol.IRequest|null);

                /** ServerboundMessage content. */
                public content?: ("clientHandshake"|"request");

                /**
                 * Creates a new ServerboundMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServerboundMessage instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IServerboundMessage): qbychat.websocket.protocol.ServerboundMessage;

                /**
                 * Encodes the specified ServerboundMessage message. Does not implicitly {@link qbychat.websocket.protocol.ServerboundMessage.verify|verify} messages.
                 * @param message ServerboundMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IServerboundMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServerboundMessage message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ServerboundMessage.verify|verify} messages.
                 * @param message ServerboundMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IServerboundMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServerboundMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServerboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.ServerboundMessage;

                /**
                 * Decodes a ServerboundMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServerboundMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.ServerboundMessage;

                /**
                 * Verifies a ServerboundMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServerboundMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServerboundMessage
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.ServerboundMessage;

                /**
                 * Creates a plain object from a ServerboundMessage message. Also converts values to other types if specified.
                 * @param message ServerboundMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.ServerboundMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServerboundMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServerboundMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ClientHandshake. */
            interface IClientHandshake {

                /** ClientHandshake clientInfo */
                clientInfo?: (qbychat.websocket.protocol.IClientInfo|null);

                /** ClientHandshake publicKey */
                publicKey?: (Uint8Array|null);

                /** ClientHandshake aesKeySalt */
                aesKeySalt?: (Uint8Array|null);

                /** ClientHandshake aesKeyLength */
                aesKeyLength?: (number|null);
            }

            /** Represents a ClientHandshake. */
            class ClientHandshake implements IClientHandshake {

                /**
                 * Constructs a new ClientHandshake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IClientHandshake);

                /** ClientHandshake clientInfo. */
                public clientInfo?: (qbychat.websocket.protocol.IClientInfo|null);

                /** ClientHandshake publicKey. */
                public publicKey?: (Uint8Array|null);

                /** ClientHandshake aesKeySalt. */
                public aesKeySalt?: (Uint8Array|null);

                /** ClientHandshake aesKeyLength. */
                public aesKeyLength?: (number|null);

                /**
                 * Creates a new ClientHandshake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClientHandshake instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IClientHandshake): qbychat.websocket.protocol.ClientHandshake;

                /**
                 * Encodes the specified ClientHandshake message. Does not implicitly {@link qbychat.websocket.protocol.ClientHandshake.verify|verify} messages.
                 * @param message ClientHandshake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IClientHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClientHandshake message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ClientHandshake.verify|verify} messages.
                 * @param message ClientHandshake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IClientHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClientHandshake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClientHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.ClientHandshake;

                /**
                 * Decodes a ClientHandshake message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClientHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.ClientHandshake;

                /**
                 * Verifies a ClientHandshake message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClientHandshake message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClientHandshake
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.ClientHandshake;

                /**
                 * Creates a plain object from a ClientHandshake message. Also converts values to other types if specified.
                 * @param message ClientHandshake
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.ClientHandshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClientHandshake to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ClientHandshake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ServerHandshake. */
            interface IServerHandshake {

                /** ServerHandshake publicKey */
                publicKey?: (Uint8Array|null);
            }

            /** Represents a ServerHandshake. */
            class ServerHandshake implements IServerHandshake {

                /**
                 * Constructs a new ServerHandshake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IServerHandshake);

                /** ServerHandshake publicKey. */
                public publicKey?: (Uint8Array|null);

                /**
                 * Creates a new ServerHandshake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServerHandshake instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IServerHandshake): qbychat.websocket.protocol.ServerHandshake;

                /**
                 * Encodes the specified ServerHandshake message. Does not implicitly {@link qbychat.websocket.protocol.ServerHandshake.verify|verify} messages.
                 * @param message ServerHandshake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IServerHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServerHandshake message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ServerHandshake.verify|verify} messages.
                 * @param message ServerHandshake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IServerHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServerHandshake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServerHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.ServerHandshake;

                /**
                 * Decodes a ServerHandshake message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServerHandshake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.ServerHandshake;

                /**
                 * Verifies a ServerHandshake message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServerHandshake message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServerHandshake
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.ServerHandshake;

                /**
                 * Creates a plain object from a ServerHandshake message. Also converts values to other types if specified.
                 * @param message ServerHandshake
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.ServerHandshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServerHandshake to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServerHandshake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ClientInfo. */
            interface IClientInfo {

                /** ClientInfo name */
                name?: (string|null);

                /** ClientInfo version */
                version?: (string|null);
            }

            /** Represents a ClientInfo. */
            class ClientInfo implements IClientInfo {

                /**
                 * Constructs a new ClientInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IClientInfo);

                /** ClientInfo name. */
                public name: string;

                /** ClientInfo version. */
                public version: string;

                /**
                 * Creates a new ClientInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClientInfo instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IClientInfo): qbychat.websocket.protocol.ClientInfo;

                /**
                 * Encodes the specified ClientInfo message. Does not implicitly {@link qbychat.websocket.protocol.ClientInfo.verify|verify} messages.
                 * @param message ClientInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.ClientInfo.verify|verify} messages.
                 * @param message ClientInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClientInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClientInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.ClientInfo;

                /**
                 * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClientInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.ClientInfo;

                /**
                 * Verifies a ClientInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClientInfo
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.ClientInfo;

                /**
                 * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
                 * @param message ClientInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.ClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClientInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ClientInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Request. */
            interface IRequest {

                /** Request ticket */
                ticket?: (string|null);

                /** Request service */
                service?: (string|null);

                /** Request method */
                method?: (string|null);

                /** Request payload */
                payload?: (Uint8Array|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.protocol.IRequest);

                /** Request ticket. */
                public ticket: string;

                /** Request service. */
                public service: string;

                /** Request method. */
                public method: string;

                /** Request payload. */
                public payload: Uint8Array;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: qbychat.websocket.protocol.IRequest): qbychat.websocket.protocol.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link qbychat.websocket.protocol.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.protocol.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link qbychat.websocket.protocol.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.protocol.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.protocol.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.protocol.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.protocol.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.protocol.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Request
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
