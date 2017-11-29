import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoPage } from '../curso/curso';

/**
 * Generated class for the MisCursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mis-cursos',
  templateUrl: 'mis-cursos.html',
})
export class MisCursosPage {

  curso = CursoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisCursosPage');
  }

}
