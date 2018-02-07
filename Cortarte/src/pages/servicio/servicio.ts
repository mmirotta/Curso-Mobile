import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TurnoPage } from '../turno/turno';

/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
})
export class ServicioPage {

  servicio:{};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.servicio = this.navParams.get("servicio");
  }

  Reservar(){
    this.navCtrl.setRoot(TurnoPage, {"servicio": this.servicio});
  }

}
