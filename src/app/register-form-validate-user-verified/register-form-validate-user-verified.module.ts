import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormValidateUserVerifiedPageRoutingModule } from './register-form-validate-user-verified-routing.module';

import { RegisterFormValidateUserVerifiedPage } from './register-form-validate-user-verified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormValidateUserVerifiedPageRoutingModule
  ],
  declarations: [RegisterFormValidateUserVerifiedPage]
})
export class RegisterFormValidateUserVerifiedPageModule {}
