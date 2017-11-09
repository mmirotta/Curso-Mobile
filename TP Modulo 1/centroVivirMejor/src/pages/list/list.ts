import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  estado:string = "0";
  tipo:string = "0";
  mensaje:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
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
    let toast = this.toastCtrl.create({
      message: this.mensaje,
      duration: 3000,
      position: "top"
    });

    toast.present();
  }


}
