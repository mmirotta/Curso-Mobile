import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  num:number;
  mayorMenor:string = '...';
  numSecret:number = 0;
  intentos:number = 0;
  intentosRestantes:number = 5;
  juegoNuevo:boolean = false;
  juego:boolean = true;
  resultado:boolean = true;
  resultadoJuego:string;

  constructor(public navCtrl: NavController) {

  }

  nuevoJuego(){
    this.numSecret = this.numAleatorio(0,100);
    console.log(this.numSecret);
    this.juego = false;
    this.juegoNuevo = true;
    this.resultado = true;
    this.intentos = 0;
    this.intentosRestantes = 5;
    this.num = 0;
  }

  numAleatorio(a,b){
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  compruebaNumero(){
    var gano = false;
    if (this.num){
      if(this.numSecret < this.num)
      {
        this.mayorMenor = "Menor";
      } 
      else if (this.numSecret > this.num)
      {
        this.mayorMenor = "Mayor";
      }
      else
      {
        this.mayorMenor = "Adivinaste";
        gano = true;
        this.mostrarResultado("ganado");
      }
    }
    this.intentos += 1;
    this.intentosRestantes -=1;
    
    if (this.intentos == 5 && !gano){
      this.mostrarResultado("perdido");
    }
  }

  mostrarResultado(mensaje){
    this.resultado = false;
    this.juego = true;
    this.resultadoJuego = mensaje;
  }
}
