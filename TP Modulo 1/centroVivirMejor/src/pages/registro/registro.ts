import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  Nombre:string = "";
  Apellido:string = "";
  Email:string = "";
  Clave:string = "";
  RepitaClave:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
              public toastCtrl: ToastController, public storage: Storage) {
  }

  Aceptar(){
    if (this.Nombre == ""){
      this.mensajeAlerta("El nombre es obligatorio.");
    }
    else if (this.Apellido == ""){
      this.mensajeAlerta("El apellido es obligatorio.");
    }
    else if (this.Email == ""){
      this.mensajeAlerta("El email es obligatorio.");
    }
    else if (this.Clave != this.RepitaClave || this.Clave == "" || this.RepitaClave == ""){
      this.mensajeAlerta("Las contraseñas no coinciden.");
      this.Clave = "";
      this.RepitaClave = "";
    }
    else{
      let usuario = {
        nombre: this.Nombre,  
        apellido: this.Apellido,
        email: this.Email,
        clave: this.Clave,
        repitaClave: this.RepitaClave,
        logueado: false
      }

      this.storage.set(usuario.email, JSON.stringify(usuario));

      let toast = this.toastCtrl.create({
        message: "Registro ingresado exitosamente.",
        duration: 3000,
        position: "top"
      });
  
      toast.present();
    }

  }

  mensajeAlerta(mensaje){
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

  redireccionar(){
    this.navCtrl.setRoot(LoginPage);
  }

}
