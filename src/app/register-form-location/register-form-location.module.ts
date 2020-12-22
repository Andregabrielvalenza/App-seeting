import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormLocationPageRoutingModule } from './register-form-location-routing.module';

import { RegisterFormLocationPage } from './register-form-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormLocationPageRoutingModule
  ],
  declarations: [RegisterFormLocationPage]
})
export class RegisterFormLocationPageModule {}
