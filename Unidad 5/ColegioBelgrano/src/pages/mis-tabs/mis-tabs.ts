import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { MisCursosPage } from '../mis-cursos/mis-cursos';
import { ContactoPage } from '../contacto/contacto';


/**
 * Generated class for the MisTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})
export class MisTabsPage {

  inicioRoot = InicioPage;
  misCursosRoot = MisCursosPage;
  contactoRoot = ContactoPage;


  constructor(public navCtrl: NavController) {}

}
