import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormAppearancePageRoutingModule } from './register-form-appearance-routing.module';

import { RegisterFormAppearancePage } from './register-form-appearance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormAppearancePageRoutingModule
  ],
  declarations: [RegisterFormAppearancePage]
})
export class RegisterFormAppearancePageModule {}
