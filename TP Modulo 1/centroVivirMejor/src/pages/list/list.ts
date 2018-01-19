import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  fechaConsumo:string = "";
  alimento:string = "";
  estado:string = "0";
  tipo:string = "0";
  mensaje:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage) {
    var self = this; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
          self.mensaje = xhttp.responseText;
        }
    };
    
    xhttp.open("GET", "./assets/mensajes/ajaxMensaje.txt", true);
    xhttp.send();

   
  }

  IngresarConsumo(){
    let usuario = this.navParams.get('usuario');
    let consumo = {
      fechaConsumo: this.fechaConsumo,  
      alimento: this.alimento,
      estado: this.estado,
      tipo: this.tipo,
      usuario: usuario
    }
    
    this.storage.set("ingreso" + this.fechaConsumo, JSON.stringify(consumo));

    let toast = this.toastCtrl.create({
      message: this.mensaje,
      duration: 3000,
      position: "top"
    });

    toast.present();
  }


}
