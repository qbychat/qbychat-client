import Dexie, { type EntityTable } from 'dexie';

interface Account {
    id: number | undefined;

    remoteId: string;
    username: string;
    nickname: string;
    bio: string;
    roles: number[];
}

const db = new Dexie('QbyChatDatabase') as Dexie & {
    accounts: EntityTable<
        Account,
        'id'
    >;
};

db.version(1).stores({
    accounts: '++id, remoteId, username, nickname, bio, roles'
});

export type { Account };
export { db };