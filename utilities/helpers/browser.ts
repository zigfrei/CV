export function isBrowserWithLocalStorage() {
  return typeof window !== 'undefined' && window.localStorage !== undefined;
}

export function getLocalStorageItem(key: string) {
  if (isBrowserWithLocalStorage()) {
    return window.localStorage.getItem(key);
  }
  return null;
}
