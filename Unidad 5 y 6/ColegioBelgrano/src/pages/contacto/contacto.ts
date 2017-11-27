import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  NombreApellido: string;
  Telefono: string;
  Email: string;
  Descripcion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  Aceptar(){
    let toast = this.toastCtrl.create({
      message: "Datos ingresados incorrectos",
      duration: 3000,
      position: "top"
    });

    toast.present();
    console.log('Nombre y Apellido: ' + this.NombreApellido + '. Teléfono: ' + this.Telefono + '. Email: ' + this.Email + '. Descripción: ' + this.Descripcion);
  }
}
