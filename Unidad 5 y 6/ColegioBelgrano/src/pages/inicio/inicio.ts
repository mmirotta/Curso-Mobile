import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage'
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  quienesSomos = QuienesSomosPage;
  login = LoginPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ngOnInit(){
    this.storage.forEach((value, key) =>{
      console.log("VALOR: " + value + ". CLAVE: " + key);
    })
  }

  salir(){
    this.navCtrl.push(this.login);
  }

}
