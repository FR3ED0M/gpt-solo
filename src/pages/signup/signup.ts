// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../../services/auth.service';

// @IonicPage()
@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
    private navCtrl: NavController,
    private auth: AuthService
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  
signup() {
  let data = this.form.value;
  let credentials = {
    email: data.email,
    password: data.password
  };
  this.auth.signUp(credentials).then(
    () => this.navCtrl.setRoot(TabsPage),
    error => this.signupError = error.message
  );
}

}


// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the SignupPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-signup',
//   templateUrl: 'signup.html',
// })
// export class SignupPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SignupPage');
//   }

// }
