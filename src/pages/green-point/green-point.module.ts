import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreenPointPage } from './green-point';

@NgModule({
  declarations: [
    GreenPointPage,
  ],
  imports: [
    IonicPageModule.forChild(GreenPointPage),
  ],
})
export class GreenPointPageModule {}
