import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmButton } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  closeSubject = new Subject();
  confirmDataSubject = new Subject();

  close(): void {
    this.closeSubject.next();
  }

  showConfirmDialog(data: { message: string; buttons: ConfirmButton[] }): void {
    this.confirmDataSubject.next(data);
  }
}
