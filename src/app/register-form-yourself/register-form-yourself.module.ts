import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormYourselfPageRoutingModule } from './register-form-yourself-routing.module';

import { RegisterFormYourselfPage } from './register-form-yourself.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormYourselfPageRoutingModule
  ],
  declarations: [RegisterFormYourselfPage]
})
export class RegisterFormYourselfPageModule {}
