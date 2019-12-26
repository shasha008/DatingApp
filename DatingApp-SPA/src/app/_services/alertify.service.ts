import { Injectable } from '@angular/core';
import * as aleryify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

  confirm(message: string, okCallback: () => any) {
    aleryify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      } else {}
    });
  }
  success(message: string) {
    aleryify.success(message);
  }

  error(message: string) {
    aleryify.error(message);
  }

  warning(message: string) {
    aleryify.warning(message);
  }

  message(message: string) {
    aleryify.message(message);
  }
}
