import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the VerTurnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-turnos',
  templateUrl: 'ver-turnos.html',
})
export class VerTurnosPage {

  dia: string;
  peluquero: string;
  turnos = [];
  turnosBuscados = [];
  usuario: any;
  mensaje: string;
  sinResultados: boolean = false;
  misTurnos: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public loadingCtrl: LoadingController) {

    this.storage.forEach((value, key) => {
      if (key.includes("turno")) {
        this.turnos.push(JSON.parse(value));
      }
    });

    this.storage.get('logueado').then((val) => {
      this.storage.get(val).then((usuario) => {
        this.usuario = JSON.parse(usuario);
      });
    });

  }

  Buscar() {
    this.turnosBuscados = [];
    let loader = this.loadingCtrl.create({
      content: "Buscando..",
      duration: 3000
    });
    loader.present().then(x => {
      setTimeout(() => {
        this.turnos.forEach((value) => {
          var turno = value;
          if (this.misTurnos) {
            if (turno.usuario == this.usuario.nombre)
              this.turnosBuscados.push(value);
          }
          else {
            if (turno.dia == this.dia && turno.peluquero == this.peluquero)
              this.turnosBuscados.push(value);
          }
        });
        if (this.turnosBuscados.length != 0) {
          this.sinResultados = false;
        }
        else {
          this.mensaje = "Sin turnos reservados.";
          this.sinResultados = true;
        }
      }, 4000);
    });
  }

  Limpiar() {
    this.dia = "";
    this.peluquero = "";
    this.turnosBuscados = [];
  }

}
