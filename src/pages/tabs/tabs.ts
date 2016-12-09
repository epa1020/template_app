import { Component } from '@angular/core';

import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { HolaPage } from '../hola/hola';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = HolaPage;

  constructor() {

  }
}
