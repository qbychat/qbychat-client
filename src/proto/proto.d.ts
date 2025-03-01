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

                /** ClientInfo installationId */
                installationId?: (string|null);

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

                /** ClientInfo installationId. */
                public installationId: string;

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
                SESSION_TERMINATED = 5,
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

        /** Namespace chat. */
        namespace chat {

            /** Properties of a Chat. */
            interface IChat {

                /** Chat chatId */
                chatId?: (string|null);

                /** Chat name */
                name?: (string|null);

                /** Chat title */
                title?: (string|null);

                /** Chat description */
                description?: (string|null);

                /** Chat type */
                type?: (qbychat.websocket.chat.ChatType|null);
            }

            /** Represents a Chat. */
            class Chat implements IChat {

                /**
                 * Constructs a new Chat.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.IChat);

                /** Chat chatId. */
                public chatId: string;

                /** Chat name. */
                public name?: (string|null);

                /** Chat title. */
                public title: string;

                /** Chat description. */
                public description?: (string|null);

                /** Chat type. */
                public type: qbychat.websocket.chat.ChatType;

                /**
                 * Creates a new Chat instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Chat instance
                 */
                public static create(properties?: qbychat.websocket.chat.IChat): qbychat.websocket.chat.Chat;

                /**
                 * Encodes the specified Chat message. Does not implicitly {@link qbychat.websocket.chat.Chat.verify|verify} messages.
                 * @param message Chat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Chat message, length delimited. Does not implicitly {@link qbychat.websocket.chat.Chat.verify|verify} messages.
                 * @param message Chat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.Chat;

                /**
                 * Decodes a Chat message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Chat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.Chat;

                /**
                 * Verifies a Chat message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Chat message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Chat
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.Chat;

                /**
                 * Creates a plain object from a Chat message. Also converts values to other types if specified.
                 * @param message Chat
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Chat to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Chat
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ChatType enum. */
            enum ChatType {
                GROUP = 0,
                CHANNEL = 1,
                PRIVATE_MESSAGE = 2
            }

            /** Properties of a SyncRequest. */
            interface ISyncRequest {
            }

            /** Represents a SyncRequest. */
            class SyncRequest implements ISyncRequest {

                /**
                 * Constructs a new SyncRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.ISyncRequest);

                /**
                 * Creates a new SyncRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SyncRequest instance
                 */
                public static create(properties?: qbychat.websocket.chat.ISyncRequest): qbychat.websocket.chat.SyncRequest;

                /**
                 * Encodes the specified SyncRequest message. Does not implicitly {@link qbychat.websocket.chat.SyncRequest.verify|verify} messages.
                 * @param message SyncRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.ISyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SyncRequest message, length delimited. Does not implicitly {@link qbychat.websocket.chat.SyncRequest.verify|verify} messages.
                 * @param message SyncRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.ISyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.SyncRequest;

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.SyncRequest;

                /**
                 * Verifies a SyncRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SyncRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SyncRequest
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.SyncRequest;

                /**
                 * Creates a plain object from a SyncRequest message. Also converts values to other types if specified.
                 * @param message SyncRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.SyncRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SyncRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SyncRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SyncResponse. */
            interface ISyncResponse {

                /** SyncResponse chats */
                chats?: (qbychat.websocket.chat.IChat[]|null);
            }

            /** Represents a SyncResponse. */
            class SyncResponse implements ISyncResponse {

                /**
                 * Constructs a new SyncResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.ISyncResponse);

                /** SyncResponse chats. */
                public chats: qbychat.websocket.chat.IChat[];

                /**
                 * Creates a new SyncResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SyncResponse instance
                 */
                public static create(properties?: qbychat.websocket.chat.ISyncResponse): qbychat.websocket.chat.SyncResponse;

                /**
                 * Encodes the specified SyncResponse message. Does not implicitly {@link qbychat.websocket.chat.SyncResponse.verify|verify} messages.
                 * @param message SyncResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.ISyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SyncResponse message, length delimited. Does not implicitly {@link qbychat.websocket.chat.SyncResponse.verify|verify} messages.
                 * @param message SyncResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.ISyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SyncResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.SyncResponse;

                /**
                 * Decodes a SyncResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.SyncResponse;

                /**
                 * Verifies a SyncResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SyncResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SyncResponse
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.SyncResponse;

                /**
                 * Creates a plain object from a SyncResponse message. Also converts values to other types if specified.
                 * @param message SyncResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.SyncResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SyncResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SyncResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateGroupRequest. */
            interface ICreateGroupRequest {

                /** CreateGroupRequest title */
                title?: (string|null);
            }

            /** Represents a CreateGroupRequest. */
            class CreateGroupRequest implements ICreateGroupRequest {

                /**
                 * Constructs a new CreateGroupRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.ICreateGroupRequest);

                /** CreateGroupRequest title. */
                public title: string;

                /**
                 * Creates a new CreateGroupRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateGroupRequest instance
                 */
                public static create(properties?: qbychat.websocket.chat.ICreateGroupRequest): qbychat.websocket.chat.CreateGroupRequest;

                /**
                 * Encodes the specified CreateGroupRequest message. Does not implicitly {@link qbychat.websocket.chat.CreateGroupRequest.verify|verify} messages.
                 * @param message CreateGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link qbychat.websocket.chat.CreateGroupRequest.verify|verify} messages.
                 * @param message CreateGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateGroupRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.CreateGroupRequest;

                /**
                 * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.CreateGroupRequest;

                /**
                 * Verifies a CreateGroupRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateGroupRequest
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.CreateGroupRequest;

                /**
                 * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
                 * @param message CreateGroupRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.CreateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateGroupRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateGroupRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateGroupResponse. */
            interface ICreateGroupResponse {
            }

            /** Represents a CreateGroupResponse. */
            class CreateGroupResponse implements ICreateGroupResponse {

                /**
                 * Constructs a new CreateGroupResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.ICreateGroupResponse);

                /**
                 * Creates a new CreateGroupResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateGroupResponse instance
                 */
                public static create(properties?: qbychat.websocket.chat.ICreateGroupResponse): qbychat.websocket.chat.CreateGroupResponse;

                /**
                 * Encodes the specified CreateGroupResponse message. Does not implicitly {@link qbychat.websocket.chat.CreateGroupResponse.verify|verify} messages.
                 * @param message CreateGroupResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.ICreateGroupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateGroupResponse message, length delimited. Does not implicitly {@link qbychat.websocket.chat.CreateGroupResponse.verify|verify} messages.
                 * @param message CreateGroupResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.ICreateGroupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateGroupResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateGroupResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.CreateGroupResponse;

                /**
                 * Decodes a CreateGroupResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateGroupResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.CreateGroupResponse;

                /**
                 * Verifies a CreateGroupResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateGroupResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateGroupResponse
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.CreateGroupResponse;

                /**
                 * Creates a plain object from a CreateGroupResponse message. Also converts values to other types if specified.
                 * @param message CreateGroupResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.CreateGroupResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateGroupResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateGroupResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AddChatEvent. */
            interface IAddChatEvent {

                /** AddChatEvent chat */
                chat?: (qbychat.websocket.chat.IChat|null);
            }

            /** Represents an AddChatEvent. */
            class AddChatEvent implements IAddChatEvent {

                /**
                 * Constructs a new AddChatEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.IAddChatEvent);

                /** AddChatEvent chat. */
                public chat?: (qbychat.websocket.chat.IChat|null);

                /**
                 * Creates a new AddChatEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddChatEvent instance
                 */
                public static create(properties?: qbychat.websocket.chat.IAddChatEvent): qbychat.websocket.chat.AddChatEvent;

                /**
                 * Encodes the specified AddChatEvent message. Does not implicitly {@link qbychat.websocket.chat.AddChatEvent.verify|verify} messages.
                 * @param message AddChatEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.IAddChatEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddChatEvent message, length delimited. Does not implicitly {@link qbychat.websocket.chat.AddChatEvent.verify|verify} messages.
                 * @param message AddChatEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.IAddChatEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddChatEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.AddChatEvent;

                /**
                 * Decodes an AddChatEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.AddChatEvent;

                /**
                 * Verifies an AddChatEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddChatEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddChatEvent
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.AddChatEvent;

                /**
                 * Creates a plain object from an AddChatEvent message. Also converts values to other types if specified.
                 * @param message AddChatEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.AddChatEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddChatEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AddChatEvent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RemoveChatEvent. */
            interface IRemoveChatEvent {

                /** RemoveChatEvent chat */
                chat?: (qbychat.websocket.chat.IChat|null);
            }

            /** Represents a RemoveChatEvent. */
            class RemoveChatEvent implements IRemoveChatEvent {

                /**
                 * Constructs a new RemoveChatEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.chat.IRemoveChatEvent);

                /** RemoveChatEvent chat. */
                public chat?: (qbychat.websocket.chat.IChat|null);

                /**
                 * Creates a new RemoveChatEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveChatEvent instance
                 */
                public static create(properties?: qbychat.websocket.chat.IRemoveChatEvent): qbychat.websocket.chat.RemoveChatEvent;

                /**
                 * Encodes the specified RemoveChatEvent message. Does not implicitly {@link qbychat.websocket.chat.RemoveChatEvent.verify|verify} messages.
                 * @param message RemoveChatEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.chat.IRemoveChatEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveChatEvent message, length delimited. Does not implicitly {@link qbychat.websocket.chat.RemoveChatEvent.verify|verify} messages.
                 * @param message RemoveChatEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.chat.IRemoveChatEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveChatEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.chat.RemoveChatEvent;

                /**
                 * Decodes a RemoveChatEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RemoveChatEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.chat.RemoveChatEvent;

                /**
                 * Verifies a RemoveChatEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RemoveChatEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RemoveChatEvent
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.chat.RemoveChatEvent;

                /**
                 * Creates a plain object from a RemoveChatEvent message. Also converts values to other types if specified.
                 * @param message RemoveChatEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.chat.RemoveChatEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveChatEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RemoveChatEvent
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

            /** Properties of a User. */
            interface IUser {

                /** User username */
                username?: (string|null);

                /** User nickname */
                nickname?: (string|null);

                /** User bio */
                bio?: (string|null);

                /** User roles */
                roles?: (qbychat.websocket.user.Role[]|null);

                /** User createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a User. */
            class User implements IUser {

                /**
                 * Constructs a new User.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.user.IUser);

                /** User username. */
                public username: string;

                /** User nickname. */
                public nickname: string;

                /** User bio. */
                public bio?: (string|null);

                /** User roles. */
                public roles: qbychat.websocket.user.Role[];

                /** User createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new User instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns User instance
                 */
                public static create(properties?: qbychat.websocket.user.IUser): qbychat.websocket.user.User;

                /**
                 * Encodes the specified User message. Does not implicitly {@link qbychat.websocket.user.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link qbychat.websocket.user.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.user.User;

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.user.User;

                /**
                 * Verifies a User message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns User
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.user.User;

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @param message User
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this User to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for User
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Role enum. */
            enum Role {
                USER = 0,
                ADMIN = 1
            }

            /** Properties of a SyncRequest. */
            interface ISyncRequest {
            }

            /** Represents a SyncRequest. */
            class SyncRequest implements ISyncRequest {

                /**
                 * Constructs a new SyncRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.user.ISyncRequest);

                /**
                 * Creates a new SyncRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SyncRequest instance
                 */
                public static create(properties?: qbychat.websocket.user.ISyncRequest): qbychat.websocket.user.SyncRequest;

                /**
                 * Encodes the specified SyncRequest message. Does not implicitly {@link qbychat.websocket.user.SyncRequest.verify|verify} messages.
                 * @param message SyncRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.user.ISyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SyncRequest message, length delimited. Does not implicitly {@link qbychat.websocket.user.SyncRequest.verify|verify} messages.
                 * @param message SyncRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.user.ISyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.user.SyncRequest;

                /**
                 * Decodes a SyncRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SyncRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.user.SyncRequest;

                /**
                 * Verifies a SyncRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SyncRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SyncRequest
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.user.SyncRequest;

                /**
                 * Creates a plain object from a SyncRequest message. Also converts values to other types if specified.
                 * @param message SyncRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.user.SyncRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SyncRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SyncRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SyncResponse. */
            interface ISyncResponse {

                /** SyncResponse user */
                user?: (qbychat.websocket.user.IUser|null);
            }

            /** Represents a SyncResponse. */
            class SyncResponse implements ISyncResponse {

                /**
                 * Constructs a new SyncResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: qbychat.websocket.user.ISyncResponse);

                /** SyncResponse user. */
                public user?: (qbychat.websocket.user.IUser|null);

                /**
                 * Creates a new SyncResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SyncResponse instance
                 */
                public static create(properties?: qbychat.websocket.user.ISyncResponse): qbychat.websocket.user.SyncResponse;

                /**
                 * Encodes the specified SyncResponse message. Does not implicitly {@link qbychat.websocket.user.SyncResponse.verify|verify} messages.
                 * @param message SyncResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: qbychat.websocket.user.ISyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SyncResponse message, length delimited. Does not implicitly {@link qbychat.websocket.user.SyncResponse.verify|verify} messages.
                 * @param message SyncResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: qbychat.websocket.user.ISyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SyncResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qbychat.websocket.user.SyncResponse;

                /**
                 * Decodes a SyncResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SyncResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qbychat.websocket.user.SyncResponse;

                /**
                 * Verifies a SyncResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SyncResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SyncResponse
                 */
                public static fromObject(object: { [k: string]: any }): qbychat.websocket.user.SyncResponse;

                /**
                 * Creates a plain object from a SyncResponse message. Also converts values to other types if specified.
                 * @param message SyncResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: qbychat.websocket.user.SyncResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SyncResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SyncResponse
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
