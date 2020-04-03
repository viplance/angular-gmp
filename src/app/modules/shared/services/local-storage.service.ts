import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  LOCAL_STORAGE_NAME = environment.localStorageName;
  updateLocal = new BehaviorSubject<object>(this.getLocal());

  // Store information in local storage
  setLocal(obj: object): void {
    let lS: object;
    lS = this.getLocal() as object;
    Object.assign(lS, obj);
    localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(lS));
    this.updateLocal.next(lS);
  }

  // Remove all information about application from local storage
  clearLocal(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_NAME);
  }

  // Get information from local storage
  getLocal(): object {
    let lS: object;

    try {
      lS = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_NAME));
    } catch (e) {
      lS = {};
    }

    if (lS === null) {
      lS = {};
    }

    return lS;
  }

  // Does information exsits in local storage?
  hasLocal(param: string = null): boolean {
    if (param) {
      return this.getLocal()[param];
    } else {
      return localStorage.getItem(this.LOCAL_STORAGE_NAME) !== null;
    }
  }
}
