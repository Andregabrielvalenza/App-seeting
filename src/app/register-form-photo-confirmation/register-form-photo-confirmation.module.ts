import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormPhotoConfirmationPageRoutingModule } from './register-form-photo-confirmation-routing.module';

import { RegisterFormPhotoConfirmationPage } from './register-form-photo-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormPhotoConfirmationPageRoutingModule
  ],
  declarations: [RegisterFormPhotoConfirmationPage]
})
export class RegisterFormPhotoConfirmationPageModule {}
