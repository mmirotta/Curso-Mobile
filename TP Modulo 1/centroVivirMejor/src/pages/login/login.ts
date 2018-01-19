import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
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
              public loadingCtrl: LoadingController, public alertCtrl: AlertController, public storage: Storage) {
  }

  ingresar(){
    let usuario = null;

    this.storage.get(this.email).then((val) =>{
      usuario = JSON.parse(val);
      console.log(usuario);
    
      if ((usuario != null) && (usuario.clave == this.clave))
      {
        let loader = this.loadingCtrl.create({
          content: "Ingresando..",
          duration: 3000
        });
        loader.present().then(x => { 
          usuario.logueado = true;
          this.storage.set(usuario.email, JSON.stringify(usuario));
          this.storage.set("logueado", usuario.email);
          this.navCtrl.setRoot(HomePage);
        });
      }else{
        let toast = this.toastCtrl.create({
          message: "Datos ingresados incorrectos",
          duration: 3000,
          position: "top"
        });
    
        toast.present();
      }
    });

    
  }

  redireccionar(){
    this.navCtrl.setRoot(RegistroPage);
  }
}