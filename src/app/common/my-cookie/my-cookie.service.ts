import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCookieService {

  constructor() { }

  setCookie(name: string, value: string, expirationDays: number) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  deleteCookie(name: string) {
    const expiration = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = `${name}=; ${expiration}; path=/`;
  }

}
