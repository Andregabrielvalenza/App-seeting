import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormPhotoValidationPageRoutingModule } from './register-form-photo-validation-routing.module';

import { RegisterFormPhotoValidationPage } from './register-form-photo-validation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormPhotoValidationPageRoutingModule
  ],
  declarations: [RegisterFormPhotoValidationPage]
})
export class RegisterFormPhotoValidationPageModule {}
