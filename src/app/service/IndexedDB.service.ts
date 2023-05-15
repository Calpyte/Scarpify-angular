import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable()
export class IndexedDBService {
  private dbName = 'my-db';
  private storeName = 'my-store';
  private keyName = 'refresh-token';

  constructor() {
    this.init();
  }

  init(): void {
    const request = indexedDB.open(this.dbName);
    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore(this.storeName);
      objectStore.createIndex(this.keyName, this.keyName, { unique: true });
    };
  }

  setRefreshToken(token: string): Observable<void> {
    return from(
      new Promise<void>((resolve, reject) => {
        const db = indexedDB.open(this.dbName);
        db.onsuccess = async (event: any) => {
          const database = event.target.result;
          const transaction = database.transaction([this.storeName], 'readwrite');
          const objectStore = transaction.objectStore(this.storeName);
          const encryptionKey = await this.getEncryptionKey();
          const encryptedToken = this.encryptToken(token, encryptionKey);
          objectStore.put(encryptedToken, this.keyName);
          transaction.oncomplete = () => {
            resolve();
          };
          transaction.onerror = () => {
            reject();
          };
        };
      })
    );
  }

  getAccessToken(): Observable<string> {
    return from(
      new Promise<string>((resolve, reject) => {
        const db = indexedDB.open(this.dbName);
        db.onsuccess = (event: any) => {
          const database = event.target.result;
          const transaction = database.transaction([this.storeName], 'readonly');
          const objectStore = transaction.objectStore(this.storeName);
          const request = objectStore.get(this.keyName);
          request.onsuccess = async () => {
            const encryptionKey = await this.getEncryptionKey();
            const encryptedToken = request.result;
            const decryptedToken = this.decryptToken(encryptedToken, encryptionKey);
            resolve(decryptedToken);
          };
          request.onerror = () => {
            reject();
          };
        };
      })
    );
  }

  private async encryptToken(token: string, encryptionKey: CryptoKey): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(token);
    return await crypto.subtle.encrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, encryptionKey, data);
  }

  private async decryptToken(encryptedToken: ArrayBuffer, encryptionKey: CryptoKey): Promise<string> {
    return await new Promise<string>((resolve) => {
      crypto.subtle
        .decrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, encryptionKey, encryptedToken)
        .then((decrypted) => {
          const decoder = new TextDecoder();
          const token = decoder.decode(decrypted);
          resolve(token);
        });
    });
  }

  private async getEncryptionKey(): Promise<CryptoKey> {
    const encryptionKey = localStorage.getItem('encryption-key');
    if (encryptionKey) {
      return JSON.parse(encryptionKey);
    } else {
      const key = crypto.getRandomValues(new Uint8Array(16));
      const algorithm = { name: 'AES-GCM', length: 128 };
      return await crypto.subtle.importKey('raw', key, algorithm, true, ['encrypt', 'decrypt']).then((importedKey) => {
        localStorage.setItem('encryption-key', JSON.stringify(importedKey));
        return importedKey;
      });
    }
  }

}
