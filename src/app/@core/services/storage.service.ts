import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public set(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }

  public removeItem(key: string) {
    return localStorage.removeItem(key);
  }

  public clear() {
    return localStorage.clear();
  }
}
