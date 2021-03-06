import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollingService {

  private styleTag: HTMLStyleElement;

  constructor() {
      this.styleTag = this.buildStyleElement();
  }

  public disable(): void {
      document.body.appendChild( this.styleTag );
  }

  public enable(): void {
      document.body.removeChild( this.styleTag );
  }

  private buildStyleElement(): HTMLStyleElement {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.setAttribute( 'data-debug', 'Injected by WindowScrolling service.' );
      style.textContent = `
          body {
              width: 100%!important;
              position: fixed!important;
              overflow: hidden!important;
              height: 100%!important;
          }
      `;

      return( style );

  }

}
