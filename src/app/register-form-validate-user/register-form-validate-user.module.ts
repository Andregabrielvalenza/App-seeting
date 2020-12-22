import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormValidateUserPageRoutingModule } from './register-form-validate-user-routing.module';

import { RegisterFormValidateUserPage } from './register-form-validate-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormValidateUserPageRoutingModule
  ],
  declarations: [RegisterFormValidateUserPage]
})
export class RegisterFormValidateUserPageModule {}
