import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurnoPage } from './turno';

@NgModule({
  declarations: [
    TurnoPage,
  ],
  imports: [
    IonicPageModule.forChild(TurnoPage),
  ],
})
export class TurnoPageModule {}
