import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisCursosPage } from './mis-cursos';

@NgModule({
  declarations: [
    MisCursosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisCursosPage),
  ],
})
export class MisCursosPageModule {}
