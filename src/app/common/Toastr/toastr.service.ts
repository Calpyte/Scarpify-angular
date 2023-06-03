import { Injectable } from '@angular/core';
import { ToastrService as Toastr } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  constructor(private toastr: Toastr) { }

  options: any = {
    extendedTimeOut: 1000, timeOut: 3000, easeTime: 300, positionClass: 'toast-top-center', closeButton: true
  }

  showSuccess(message: string = '', title: string = ''): void {
    this.toastr.success(message, title, this.options);
  }

  showError(message: string = '', title: string = ''): void {
    this.toastr.error(message, title, this.options);
  }

  showWarning(message: string, title: string): void {
    this.toastr.warning(message, title, this.options);
  }

  showInfo(message: string, title: string): void {
    this.toastr.info(message, title, this.options);
  }

  showCustomToastr(title: string, message: string): void {
    this.toastr.show(message, title, {
      enableHtml: true,
      // toastComponent: '<p></p>' as unknown as HTMLElement,
      toastClass: 'custom-toastr',
      positionClass: 'toast-top-right',
      timeOut: 3000,
      extendedTimeOut: 1000,
      closeButton: true,
      tapToDismiss: true,
      progressBar: true,
      onActivateTick: true,
      disableTimeOut: false,
      easeTime: 300
    });
  }
}
