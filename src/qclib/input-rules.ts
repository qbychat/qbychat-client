import axios from "axios";

interface QbyChatRules {
    usernameRegex: string;
    usernameRule: string;
}

export async function fetchRules(connectionUrl: string): Promise<QbyChatRules> {
    return axios.get(`${connectionUrl}/.well-known/qbychat/rules`)
}