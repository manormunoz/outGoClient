import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  result: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private gPlus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginFb(){
    this.fb.login(
      ['public_profile', 'user_friends', 'email']
    ).then((res: FacebookLoginResponse) => {
      this.result = res;
    }).catch((err) => {
      this.result = err;
    });

  }

  loginGPlus(){
    this.gPlus.login({
      'webClientId': '1014425556157-l27cn7k2qqq6sut9s9kkv40a5dn42mue.apps.googleusercontent.com',
      'offline': true
    }).then((res) => {
      this.result = res;
    }).catch((err) => {
      this.result = err;
    });
  }

}
