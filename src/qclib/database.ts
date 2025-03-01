import Dexie, {type EntityTable} from 'dexie';

interface Account {
    id: number | undefined;

    remoteId: string;
    username: string;
    nickname: string;
    bio: string;
    roles: number[];
}

interface Chat {
    id: number | undefined;
    account: string;

    remoteId: string;
    name: string | null | undefined;
    title: string;
    description: string | null | undefined;
    type: number;
}

const db = new Dexie('QbyChatDatabase') as Dexie & {
    accounts: EntityTable<Account, 'id'>;
    chats: EntityTable<Chat, 'id'>;
};

db.version(1).stores({
    accounts: '++id, remoteId, username, nickname, bio, roles',
    chats: '++id, account, remoteId, name, title, description, type'
});

export type {Account, Chat};
export {db};