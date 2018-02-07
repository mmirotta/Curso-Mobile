import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the TurnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turno',
  templateUrl: 'turno.html',
})
export class TurnoPage {

  servicios = [];


  dia: string;
  horario: string;
  peluquero: string;
  servicio: string;
  descuento: boolean = false;
  turnoReservado: any;
  usuario: any;
  turnos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    var vieneServicio = this.navParams.get("servicio");
    if (vieneServicio != null) {
      this.servicio = vieneServicio.nombre;
      this.descuento = true;
    }

    this.servicios.push({ nombre: 'Corte Hombre', precio: 290, precioDescuento: 250, tiempo: '30min' });
    this.servicios.push({ nombre: 'Corte Mujer', precio: 320, precioDescuento: 280, tiempo: '45min' });
    this.servicios.push({ nombre: 'Color Hombre', precio: 500, precioDescuento: 450, tiempo: '45min' });
    this.servicios.push({ nombre: 'Color Mujer', precio: 500, precioDescuento: 450, tiempo: '30min' });
    this.servicios.push({ nombre: 'Recorte Barba', precio: 100, precioDescuento: 50, tiempo: '15min' });

    this.storage.get('logueado').then((val) => {
      this.storage.get(val).then((usuario) => {
        this.usuario = JSON.parse(usuario);
      });
    });

    this.storage.forEach((value, key) => {
      if (key.includes("turno")) {
        this.turnos.push(JSON.parse(value));
      }
    });
  }

  Reservar() {
    this.turnoReservado = null;
    if (this.turnos != undefined) {
      this.turnos.forEach((value) => {
        if (value.dia == this.dia && value.horario == this.horario && value.peluquero == this.peluquero) {
          this.turnoReservado = value;
        }
      });
    }
    let loader = this.loadingCtrl.create({
      content: "Reservando..",
      duration: 3000
    });
    loader.present().then(x => {
      setTimeout(() => {
        if (this.turnoReservado == null) {
          var precio = this.servicios.find(x => x.nombre == this.servicio);
          let turno = {
            dia: this.dia,
            horario: this.horario,
            peluquero: this.peluquero,
            servicio: this.servicio,
            precio: precio.precioDescuento,
            usuario: this.usuario.nombre
          }

          this.storage.set("turno" + this.usuario + this.dia + this.horario, JSON.stringify(turno));
       
          let toastCreacion = this.toastCtrl.create({
            message: 'Gracias por reservar su turno.',
            duration: 3000,
            position: "top"
          });
  
          toastCreacion.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Turno Reservado',
            subTitle: 'El dia ' + this.dia + ' a las ' + this.horario + " se encuentra reservado.",
            buttons: ['OK']
          });
          alert.present();
        }
      }, 4000);
    });

  }
}
