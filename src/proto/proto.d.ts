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

                /** ClientHandshake aesKeyInfo */
                aesKeyInfo?: (Uint8Array|null);
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

                /** ClientHandshake aesKeyInfo. */
                public aesKeyInfo?: (Uint8Array|null);

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

                /** ClientInfo platform */
                platform?: (qbychat.websocket.protocol.Platform|null);

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

                /** ClientInfo platform. */
                public platform: qbychat.websocket.protocol.Platform;

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

            /** Platform enum. */
            enum Platform {
                LINUX = 0,
                WINDOWS = 1,
                OSX = 2,
                ANDROID = 3,
                IOS = 4,
                UNKNOWN = 5
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

        /** Namespace auth. */
        namespace auth {

            /** Properties of a TokenLoginRequest. */
            interface ITokenLoginRequest {

                /** TokenLoginRequest token */
                token?: (string|null);
            }

            /** Represents a TokenLoginRequest. */
            class TokenLoginRequest implements ITokenLoginRequest {

                /**
                 * Constructs a new TokenLoginRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.auth.ITokenLoginRequest);

                /** TokenLoginRequest token. */
                public token: string;

                /**
                 * Creates a new TokenLoginRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenLoginRequest instance
                 */
                public static create(properties?: qbychat.websocket.auth.ITokenLoginRequest): qbychat.websocket.auth.TokenLoginRequest;

                /**
                 * Encodes the specified TokenLoginRequest message. Does not implicitly {@link qbychat.websocket.auth.TokenLoginRequest.verify|verify} messages.
                 * @param message TokenLoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.auth.ITokenLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TokenLoginRequest message, length delimited. Does not implicitly {@link qbychat.websocket.auth.TokenLoginRequest.verify|verify} messages.
                 * @param message TokenLoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.auth.ITokenLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenLoginRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.auth.TokenLoginRequest;

                /**
                 * Decodes a TokenLoginRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TokenLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.auth.TokenLoginRequest;

                /**
                 * Verifies a TokenLoginRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TokenLoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TokenLoginRequest
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.auth.TokenLoginRequest;

                /**
                 * Creates a plain object from a TokenLoginRequest message. Also converts values to other types if specified.
                 * @param message TokenLoginRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.auth.TokenLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TokenLoginRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TokenLoginRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenLoginResponse. */
            interface ITokenLoginResponse {

                /** TokenLoginResponse status */
                status?: (qbychat.websocket.auth.LoginStatus|null);
            }

            /** Represents a TokenLoginResponse. */
            class TokenLoginResponse implements ITokenLoginResponse {

                /**
                 * Constructs a new TokenLoginResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.auth.ITokenLoginResponse);

                /** TokenLoginResponse status. */
                public status: qbychat.websocket.auth.LoginStatus;

                /**
                 * Creates a new TokenLoginResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenLoginResponse instance
                 */
                public static create(properties?: qbychat.websocket.auth.ITokenLoginResponse): qbychat.websocket.auth.TokenLoginResponse;

                /**
                 * Encodes the specified TokenLoginResponse message. Does not implicitly {@link qbychat.websocket.auth.TokenLoginResponse.verify|verify} messages.
                 * @param message TokenLoginResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.auth.ITokenLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TokenLoginResponse message, length delimited. Does not implicitly {@link qbychat.websocket.auth.TokenLoginResponse.verify|verify} messages.
                 * @param message TokenLoginResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.auth.ITokenLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenLoginResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.auth.TokenLoginResponse;

                /**
                 * Decodes a TokenLoginResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TokenLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.auth.TokenLoginResponse;

                /**
                 * Verifies a TokenLoginResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TokenLoginResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TokenLoginResponse
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.auth.TokenLoginResponse;

                /**
                 * Creates a plain object from a TokenLoginResponse message. Also converts values to other types if specified.
                 * @param message TokenLoginResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.auth.TokenLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TokenLoginResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TokenLoginResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** LoginStatus enum. */
            enum LoginStatus {
                SUCCESS = 0,
                TOKEN_EXPIRED = 1,
                BAD_TOKEN = 2,
                USER_NOT_FOUND = 3,
                BAD_PASSWORD = 4
            }

            /** Properties of a UsernamePasswordLoginRequest. */
            interface IUsernamePasswordLoginRequest {

                /** UsernamePasswordLoginRequest username */
                username?: (string|null);

                /** UsernamePasswordLoginRequest password */
                password?: (string|null);
            }

            /** Represents a UsernamePasswordLoginRequest. */
            class UsernamePasswordLoginRequest implements IUsernamePasswordLoginRequest {

                /**
                 * Constructs a new UsernamePasswordLoginRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.auth.IUsernamePasswordLoginRequest);

                /** UsernamePasswordLoginRequest username. */
                public username: string;

                /** UsernamePasswordLoginRequest password. */
                public password: string;

                /**
                 * Creates a new UsernamePasswordLoginRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UsernamePasswordLoginRequest instance
                 */
                public static create(properties?: qbychat.websocket.auth.IUsernamePasswordLoginRequest): qbychat.websocket.auth.UsernamePasswordLoginRequest;

                /**
                 * Encodes the specified UsernamePasswordLoginRequest message. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginRequest.verify|verify} messages.
                 * @param message UsernamePasswordLoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.auth.IUsernamePasswordLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UsernamePasswordLoginRequest message, length delimited. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginRequest.verify|verify} messages.
                 * @param message UsernamePasswordLoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.auth.IUsernamePasswordLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UsernamePasswordLoginRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UsernamePasswordLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.auth.UsernamePasswordLoginRequest;

                /**
                 * Decodes a UsernamePasswordLoginRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UsernamePasswordLoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.auth.UsernamePasswordLoginRequest;

                /**
                 * Verifies a UsernamePasswordLoginRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UsernamePasswordLoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UsernamePasswordLoginRequest
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.auth.UsernamePasswordLoginRequest;

                /**
                 * Creates a plain object from a UsernamePasswordLoginRequest message. Also converts values to other types if specified.
                 * @param message UsernamePasswordLoginRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.auth.UsernamePasswordLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UsernamePasswordLoginRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UsernamePasswordLoginRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UsernamePasswordLoginResponse. */
            interface IUsernamePasswordLoginResponse {

                /** UsernamePasswordLoginResponse status */
                status?: (qbychat.websocket.auth.LoginStatus|null);
            }

            /** Represents a UsernamePasswordLoginResponse. */
            class UsernamePasswordLoginResponse implements IUsernamePasswordLoginResponse {

                /**
                 * Constructs a new UsernamePasswordLoginResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.auth.IUsernamePasswordLoginResponse);

                /** UsernamePasswordLoginResponse status. */
                public status: qbychat.websocket.auth.LoginStatus;

                /**
                 * Creates a new UsernamePasswordLoginResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UsernamePasswordLoginResponse instance
                 */
                public static create(properties?: qbychat.websocket.auth.IUsernamePasswordLoginResponse): qbychat.websocket.auth.UsernamePasswordLoginResponse;

                /**
                 * Encodes the specified UsernamePasswordLoginResponse message. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginResponse.verify|verify} messages.
                 * @param message UsernamePasswordLoginResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.auth.IUsernamePasswordLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UsernamePasswordLoginResponse message, length delimited. Does not implicitly {@link qbychat.websocket.auth.UsernamePasswordLoginResponse.verify|verify} messages.
                 * @param message UsernamePasswordLoginResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.auth.IUsernamePasswordLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UsernamePasswordLoginResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UsernamePasswordLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.auth.UsernamePasswordLoginResponse;

                /**
                 * Decodes a UsernamePasswordLoginResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UsernamePasswordLoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.auth.UsernamePasswordLoginResponse;

                /**
                 * Verifies a UsernamePasswordLoginResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UsernamePasswordLoginResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UsernamePasswordLoginResponse
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.auth.UsernamePasswordLoginResponse;

                /**
                 * Creates a plain object from a UsernamePasswordLoginResponse message. Also converts values to other types if specified.
                 * @param message UsernamePasswordLoginResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.auth.UsernamePasswordLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UsernamePasswordLoginResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UsernamePasswordLoginResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenUpdateEvent. */
            interface ITokenUpdateEvent {

                /** TokenUpdateEvent token */
                token?: (string|null);

                /** TokenUpdateEvent expireAt */
                expireAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a TokenUpdateEvent. */
            class TokenUpdateEvent implements ITokenUpdateEvent {

                /**
                 * Constructs a new TokenUpdateEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.auth.ITokenUpdateEvent);

                /** TokenUpdateEvent token. */
                public token: string;

                /** TokenUpdateEvent expireAt. */
                public expireAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new TokenUpdateEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenUpdateEvent instance
                 */
                public static create(properties?: qbychat.websocket.auth.ITokenUpdateEvent): qbychat.websocket.auth.TokenUpdateEvent;

                /**
                 * Encodes the specified TokenUpdateEvent message. Does not implicitly {@link qbychat.websocket.auth.TokenUpdateEvent.verify|verify} messages.
                 * @param message TokenUpdateEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.auth.ITokenUpdateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TokenUpdateEvent message, length delimited. Does not implicitly {@link qbychat.websocket.auth.TokenUpdateEvent.verify|verify} messages.
                 * @param message TokenUpdateEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.auth.ITokenUpdateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenUpdateEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenUpdateEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.auth.TokenUpdateEvent;

                /**
                 * Decodes a TokenUpdateEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TokenUpdateEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.auth.TokenUpdateEvent;

                /**
                 * Verifies a TokenUpdateEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TokenUpdateEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TokenUpdateEvent
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.auth.TokenUpdateEvent;

                /**
                 * Creates a plain object from a TokenUpdateEvent message. Also converts values to other types if specified.
                 * @param message TokenUpdateEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.auth.TokenUpdateEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TokenUpdateEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TokenUpdateEvent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace user. */
        namespace user {

            /** Properties of a RegisterRequest. */
            interface IRegisterRequest {

                /** RegisterRequest username */
                username?: (string|null);

                /** RegisterRequest password */
                password?: (string|null);
            }

            /** Represents a RegisterRequest. */
            class RegisterRequest implements IRegisterRequest {

                /**
                 * Constructs a new RegisterRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.user.IRegisterRequest);

                /** RegisterRequest username. */
                public username: string;

                /** RegisterRequest password. */
                public password: string;

                /**
                 * Creates a new RegisterRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegisterRequest instance
                 */
                public static create(properties?: qbychat.websocket.user.IRegisterRequest): qbychat.websocket.user.RegisterRequest;

                /**
                 * Encodes the specified RegisterRequest message. Does not implicitly {@link qbychat.websocket.user.RegisterRequest.verify|verify} messages.
                 * @param message RegisterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.user.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link qbychat.websocket.user.RegisterRequest.verify|verify} messages.
                 * @param message RegisterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.user.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegisterRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegisterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.user.RegisterRequest;

                /**
                 * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegisterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.user.RegisterRequest;

                /**
                 * Verifies a RegisterRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegisterRequest
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.user.RegisterRequest;

                /**
                 * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
                 * @param message RegisterRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.user.RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegisterRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RegisterRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RegisterResponse. */
            interface IRegisterResponse {

                /** RegisterResponse status */
                status?: (qbychat.websocket.user.RegisterStatus|null);

                /** RegisterResponse message */
                message?: (string|null);
            }

            /** Represents a RegisterResponse. */
            class RegisterResponse implements IRegisterResponse {

                /**
                 * Constructs a new RegisterResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.user.IRegisterResponse);

                /** RegisterResponse status. */
                public status: qbychat.websocket.user.RegisterStatus;

                /** RegisterResponse message. */
                public message?: (string|null);

                /**
                 * Creates a new RegisterResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegisterResponse instance
                 */
                public static create(properties?: qbychat.websocket.user.IRegisterResponse): qbychat.websocket.user.RegisterResponse;

                /**
                 * Encodes the specified RegisterResponse message. Does not implicitly {@link qbychat.websocket.user.RegisterResponse.verify|verify} messages.
                 * @param message RegisterResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.user.IRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link qbychat.websocket.user.RegisterResponse.verify|verify} messages.
                 * @param message RegisterResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.user.IRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegisterResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegisterResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.user.RegisterResponse;

                /**
                 * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegisterResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.user.RegisterResponse;

                /**
                 * Verifies a RegisterResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegisterResponse
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.user.RegisterResponse;

                /**
                 * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
                 * @param message RegisterResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.user.RegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegisterResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RegisterResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** RegisterStatus enum. */
            enum RegisterStatus {
                SUCCESS = 0,
                USERNAME_EXISTS = 1,
                BAD_USERNAME = 2
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

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
