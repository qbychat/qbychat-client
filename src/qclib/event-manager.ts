import {v4 as uuidv4} from "uuid";

interface EventHandler {
    type: string;
    dispatcher: (account: string | null | undefined, message: unknown | null) => Promise<void> | void;
}

class EventManager {
    eventHandlers: Map<string, EventHandler> = new Map();

    /**
     * Register an event handler
     *
     * @param eventName event name
     * @param dispatcher event handler
     * @return handler id
     * */
    registerEventHandler(eventName: string, dispatcher: (account: string | null | undefined, message: unknown | null) => Promise<void> | void): string {
        const id = uuidv4();
        console.log(`Register event handler for event ${eventName} (${id})`);
        this.eventHandlers.set(id, {
            type: eventName,
            dispatcher: dispatcher
        });
        return id;
    }

    removeEventHandler(id: string): void {
        this.eventHandlers.delete(id);
    }

    async publishEvent(eventName: string, message: unknown | null, account: string | null = null): Promise<void> {
        for (const handler of eventManger.eventHandlers.values()) {
            if (handler.type === eventName) {
                // handle
                await handler.dispatcher(account, message)
            }
        }
    }
}

const eventManger = new EventManager();

export { eventManger };