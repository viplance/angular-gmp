import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmDialog } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  closeSubject = new Subject();
  confirmDataSubject = new Subject();

  close(): void {
    this.closeSubject.next();
  }

  showConfirmDialog(data: ConfirmDialog): void {
    this.confirmDataSubject.next(data);
  }
}
