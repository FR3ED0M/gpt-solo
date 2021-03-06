import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;

  constructor() {

  }
}
