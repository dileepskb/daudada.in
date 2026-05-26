import { AES, enc } from "crypto-js";

const SECRET_KEY = "formio";

const getStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
};

/**
 * Encrypt data
 */
export const encrypt = (data: any): string => {
  return AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
};

/**
 * Decrypt data
 */
export const decrypt = (data: string | null) => {
  try {
    if (!data) return null;

    const bytes = AES.decrypt(data, SECRET_KEY);

    const decrypted = bytes.toString(enc.Utf8);

    if (!decrypted) return null;

    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decrypt error:", error);
    return null;
  }
};

/**
 * Set item in localStorage
 */
export const setItem = (
  key: string,
  value: any
) => {
  const storage = getStorage();

  if (!storage) return;

  const encryptedValue = encrypt(value);

  storage.setItem(key, encryptedValue);
};

/**
 * Get item from localStorage
 */
export const getItem = (key: string) => {
  const storage = getStorage();

  if (!storage) return null;

  const value = storage.getItem(key);

  return decrypt(value);
};

/**
 * Remove item from localStorage
 */
export const removeItem = (key: string) => {
  const storage = getStorage();

  if (!storage) return;

  storage.removeItem(key);
};

/**
 * Clear localStorage
 */
export const clearStorage = () => {
  const storage = getStorage();

  if (!storage) return;

  storage.clear();
};