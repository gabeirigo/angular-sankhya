import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  public message = null;
  public color = null;

  constructor() {

    setTimeout(() => {
      this.message = null;
      this.color = null;
    }, 4500);

  }

}
