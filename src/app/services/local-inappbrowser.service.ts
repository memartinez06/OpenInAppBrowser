import { Injectable } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable( { providedIn:'root' } )
export class LocalInAppBrowserService {
  constructor(private iab: InAppBrowser) {}

  initBrowser(url: string) {
    try {
      const browser = this.iab.create(url, '_blank', {
        location: 'no',
        zoom: 'no',
        toolbar: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        cleardata: 'yes',
        enableViewportScale: 'yes'
      });
      browser.on('exit').subscribe(() => {
        browser.close();
      });
    } catch {}
  }
}
