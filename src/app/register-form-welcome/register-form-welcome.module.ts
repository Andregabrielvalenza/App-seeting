import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormWelcomePageRoutingModule } from './register-form-welcome-routing.module';

import { RegisterFormWelcomePage } from './register-form-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormWelcomePageRoutingModule
  ],
  declarations: [RegisterFormWelcomePage]
})
export class RegisterFormWelcomePageModule {}
