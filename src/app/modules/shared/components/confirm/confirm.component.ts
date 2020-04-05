import { Component, ElementRef, HostListener } from '@angular/core';
import { ConfirmService } from '../../services';
import { ConfirmButton, ConfirmDialog } from '../../interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  buttons: ConfirmButton[];
  header: string;
  message: string;

  constructor(private confirmService: ConfirmService, private el: ElementRef) {
    this.confirmService.closeSubject.subscribe(() => {
      this.close();
    });
    this.confirmService.confirmDataSubject.subscribe(
      ({ header, message, buttons }: ConfirmDialog) => {
        this.show();
        this.buttons = buttons;
        this.header = header || 'Confirm';
        this.message = message;
      }
    );
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (target.tagName !== 'BUTTON' && target.className !== 'confirm-dialog') {
      this.close();
    }
  }

  executeAction(button: ConfirmButton): void {
    button.action();
  }

  close(): void {
    this.el.nativeElement.style.display = 'none';
  }

  private show(): void {
    this.el.nativeElement.style.display = 'block';
  }
}
