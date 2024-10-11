// client/src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <app-header-product></app-header-product>
  `,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
