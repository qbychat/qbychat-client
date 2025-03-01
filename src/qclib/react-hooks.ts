import {useEffect, useState} from "react";
import {eventManger} from "./event-manager.ts";
import {accountManager} from "./account-manager.ts";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "./database.ts";

export function useActiveAccountId() {
    const [accountId, setAccountId] = useState<string | null>()

    useEffect(() => {
        const id = eventManger.registerEventHandler('switch-account', (account) => {
            setAccountId(account);
        });
        return () => {
            eventManger.removeEventHandler(id);
        }
    }, [])

    accountManager.getActiveAccount().then(activeAccount => {
        setAccountId(activeAccount);
    })
    return accountId;
}

export function useUser() {
    const accountId = useActiveAccountId();
    return useLiveQuery(async () => {
        if (!accountId) return null;
        return db.accounts.where('remoteId').equals(accountId).first()
    }, [accountId]);
}

export function useChats() {
    const accountId = useActiveAccountId();
    return useLiveQuery(async () => {
        if (!accountId) return [];
        return db.chats.where('account').equals(accountId).toArray();
    }, [accountId]);
}