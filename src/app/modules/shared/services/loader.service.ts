import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loaderState = new BehaviorSubject(false);

  setLoaderState(state: boolean): void {
    this.loaderState.next(state);
  }
}
