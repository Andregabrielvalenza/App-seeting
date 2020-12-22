import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormLanguagesPageRoutingModule } from './register-form-languages-routing.module';

import { RegisterFormLanguagesPage } from './register-form-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormLanguagesPageRoutingModule
  ],
  declarations: [RegisterFormLanguagesPage]
})
export class RegisterFormLanguagesPageModule {}
