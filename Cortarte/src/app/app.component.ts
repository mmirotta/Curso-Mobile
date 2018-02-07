import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TurnoPage } from '../pages/turno/turno';
import { Storage } from '@ionic/storage';
import { VerTurnosPage } from '../pages/ver-turnos/ver-turnos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();

    this.statusBar.backgroundColorByHexString("#fe5e16");

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'md-home' },
      { title: 'Solicitar turno', component: TurnoPage, icon:'md-clipboard' },
      { title: 'Reservas', component: VerTurnosPage, icon:'md-calendar' },
      { title: 'Salir', component: LoginPage, icon:'md-exit' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component != LoginPage)
    {
      this.storage.get("logueado").then((val) =>{
        this.nav.setRoot(page.component);
        console.log(val);
      });
    }
    else{
      this.storage.set("logueado", "");
      this.nav.setRoot(page.component);
    }
  }
}
