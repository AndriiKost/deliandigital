import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  public clipboardMessage = false;

  constructor() { }

  appearClipboardMessage() {
    if (this.clipboardMessage) {
      return;
    } else {
      this.clipboardMessage = true;
      setTimeout(() => { this.clipboardMessage = false; }, 3000);
    }
  }

}
