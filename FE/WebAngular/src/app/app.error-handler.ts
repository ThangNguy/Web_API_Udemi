import * as Raven from 'raven-js';
import { ErrorHandler, Inject, NgZone, isDevMode } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  constructor(
    private ngZone: NgZone) {
  }

  handleError(error: any): void {
    if (!isDevMode()) {
      Raven.captureException(error.originalError || error);
    } else {
      throw error;
    }

    this.ngZone.run(() => {
      // this.toastyService.error({
      //   title: 'Error',
      //   msg: 'An unexpected error happened.',
      //   theme: 'bootstrap',
      //   showClose: true,
      //   timeout: 5000
      // });
    });
  }
}