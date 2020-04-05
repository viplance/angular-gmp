import { ConfirmButton } from './confirm-button.interface';

export interface ConfirmDialog {
  header?: string;
  message: string;
  buttons: ConfirmButton[];
}
