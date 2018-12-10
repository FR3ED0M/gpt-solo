import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; // this works as the initializeApp component
  nav: any;

  constructor(platform: 
      Platform, 
      statusBar: StatusBar, 
      splashScreen: SplashScreen, 
      private auth: AuthService) 
      {
        
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
    });
  }
  

  login() {
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  logout() {
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

}
