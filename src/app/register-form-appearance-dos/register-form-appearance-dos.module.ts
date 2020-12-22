import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormAppearanceDosPageRoutingModule } from './register-form-appearance-dos-routing.module';

import { RegisterFormAppearanceDosPage } from './register-form-appearance-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormAppearanceDosPageRoutingModule
  ],
  declarations: [RegisterFormAppearanceDosPage]
})
export class RegisterFormAppearanceDosPageModule {}
