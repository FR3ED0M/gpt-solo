import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // name = {
  //   first: 'firstName',
  //   last: 'laastName'
  // };

  constructor(public navCtrl: NavController) {
    
  }

  goToProfile(): void {
    this.navCtrl.push("ProfilePage");
  }


  // constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
  //   this.db.list('name').push(this.name);
  // }

}
