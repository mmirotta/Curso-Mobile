import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController  } from 'ionic-angular';
import { MisTabsPage } from '../mis-tabs/mis-tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "";
  clave: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  informacion(){
    let alert = this.alertCtrl.create({
      title: 'Datos Ingreso',
      subTitle: 'Email: <b>admin@admin.com</b><br />Clave: <b>1234</b>',
      buttons: ['OK']
    });
    alert.present();
  }


  ingresar(){
    if (this.email == "admin@admin.com" && this.clave == "1234"){
      let loader = this.loadingCtrl.create({
        content: "Ingresando..",
        duration: 3000
      });
      loader.present().then(x => { this.navCtrl.push(MisTabsPage)});
      
    }else{
      let toast = this.toastCtrl.create({
        message: "Datos ingresados incorrectos",
        duration: 3000,
        position: "top"
      });
  
      toast.present();
    }
  }

}
