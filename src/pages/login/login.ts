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
      ['public_profile', 'email']
    ).then((res: FacebookLoginResponse) => {
      res.authResponse.userID
      this.fb.api(res.authResponse.userID + '/?fields=email,name', ['public_profile', 'email']).then((_res) => {
        this.result = _res;
      }).catch((err) => {
        this.result = err;
      });
    }).catch((err) => {
      this.result = err;
    });

  }

  loginGPlus(){
    this.gPlus.login({
      'webClientId': '166122884478-ejrov4r0p9b4grheseh9u9eqha8bbvjp.apps.googleusercontent.com',
      'offline': true
    }).then((res) => {
      this.result = res;
    }).catch((err) => {
      this.result = err;
    });
  }

}
