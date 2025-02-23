export async function getECDHPublicKeyFromBytes(publicKeyBytes: Uint8Array): Promise<CryptoKey> {
    return await crypto.subtle.importKey(
        "spki",
        publicKeyBytes,
        { name: "ECDH", namedCurve: "P-256" },
        true,
        []
    );
}

export async function generateECDHKeyPair(): Promise<CryptoKeyPair> {
    return await crypto.subtle.generateKey(
        { name: "ECDH", namedCurve: "P-256" },
        true,
        ["deriveKey", "deriveBits"]
    );
}

export function generateSalt(length: number = 16): Uint8Array {
    const salt = new Uint8Array(length);
    window.crypto.getRandomValues(salt);
    return salt;
}

export async function exportPublicKey(publicKey: CryptoKey): Promise<Uint8Array> {
    const exported = await crypto.subtle.exportKey("spki", publicKey);
    return new Uint8Array(exported);
}

export async function exportPrivateKey(privateKey: CryptoKey): Promise<Uint8Array> {
    const exported = await crypto.subtle.exportKey("pkcs8", privateKey);
    return new Uint8Array(exported);
}

export async function computeSharedSecret(privateKey: CryptoKey, publicKey: CryptoKey): Promise<ArrayBuffer> {
    return await crypto.subtle.deriveBits(
        { name: "ECDH", public: publicKey },
        privateKey,
        256
    );
}

export async function bytesToAESKey(keyBytes: Uint8Array): Promise<CryptoKey> {
    return await crypto.subtle.importKey(
        "raw",
        keyBytes,
        { name: "AES-GCM" },
        true,
        ["encrypt", "decrypt"]
    );
}

export async function encryptAESGCM(data: Uint8Array, secretKey: CryptoKey): Promise<Uint8Array> {
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12字节 IV
    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        secretKey,
        data
    );

    return new Uint8Array([...iv, ...new Uint8Array(encrypted)]); // [IV (12 bytes)] + [密文]
}

export async function decryptAESGCM(encryptedData: Uint8Array, secretKey: CryptoKey): Promise<Uint8Array> {
    const iv = encryptedData.slice(0, 12); // 提取 IV
    const ciphertext = encryptedData.slice(12); // 提取密文

    const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        secretKey,
        ciphertext
    );

    return new Uint8Array(decrypted);
}

export async function hkdfSha256(inputKeyMaterial: Uint8Array, salt: Uint8Array, info: Uint8Array, outputLength: number): Promise<Uint8Array> {
    const baseKey = await crypto.subtle.importKey(
        "raw",
        inputKeyMaterial,
        { name: "HKDF" },
        false,
        ["deriveKey", "deriveBits"]
    );

    const derivedBits = await crypto.subtle.deriveBits(
        { name: "HKDF", hash: "SHA-256", salt: salt, info: info },
        baseKey,
        outputLength * 8
    );

    return new Uint8Array(derivedBits);
}
