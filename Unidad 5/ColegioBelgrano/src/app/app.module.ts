import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MisTabsPage } from '../pages/mis-tabs/mis-tabs';
import { InicioPage } from '../pages/inicio/inicio';
import { MisCursosPage } from '../pages/mis-cursos/mis-cursos';
import { ContactoPage } from '../pages/contacto/contacto';
import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';

@NgModule({
  declarations: [
    MyApp,
    MisTabsPage,
    InicioPage,
    MisCursosPage,
    ContactoPage,
    QuienesSomosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabsPage,
    InicioPage,
    MisCursosPage,
    ContactoPage,
    QuienesSomosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
