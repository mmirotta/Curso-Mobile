import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MisTabsPage } from '../pages/mis-tabs/mis-tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MisTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    statusBar.backgroundColorByHexString("#241363");

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
    });
  }
}
