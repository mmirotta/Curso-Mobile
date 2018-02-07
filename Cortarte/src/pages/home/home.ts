import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicioPage } from '../servicio/servicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  servicios = [];
  pet:any;

  constructor(public navCtrl: NavController) {
    this.servicios.push({ nombre: 'Corte Hombre', precio: 290, precioDescuento: 250, tiempo: '30min' });
    this.servicios.push({ nombre: 'Corte Mujer', precio: 320, precioDescuento: 280, tiempo: '45min' });
    this.servicios.push({ nombre: 'Color Hombre', precio: 500, precioDescuento: 450, tiempo: '45min' });
    this.servicios.push({ nombre: 'Color Mujer', precio: 500, precioDescuento: 450, tiempo: '30min' });
    this.servicios.push({ nombre: 'Recorte Barba', precio: 100, precioDescuento: 50, tiempo: '15min' });

    this.pet = "servicios";
  }

  verServicio(servicio){
    this.navCtrl.push(ServicioPage, {"servicio": servicio});
  }

}
