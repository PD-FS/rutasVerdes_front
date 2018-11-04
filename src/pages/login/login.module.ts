import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild()
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule { }
