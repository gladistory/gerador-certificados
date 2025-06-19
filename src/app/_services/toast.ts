import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class Toast {

  constructor(private toast: NgToastService) { }

  showSuccess(message: string, title: string) {
    this.toast.success(message, title, 3000);
  }

  showError(message: string, title: string) {
    this.toast.danger(message, title, 3000);
  }

  showInfo(message: string, title: string) {
    this.toast.info(message, title, 3000);
  }

  showWarning(message: string, title: string) {
    this.toast.warning(message, title, 3000);
  }


}
