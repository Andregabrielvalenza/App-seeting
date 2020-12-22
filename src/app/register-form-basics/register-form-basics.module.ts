import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormBasicsPageRoutingModule } from './register-form-basics-routing.module';

import { RegisterFormBasicsPage } from './register-form-basics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormBasicsPageRoutingModule
  ],
  declarations: [RegisterFormBasicsPage]
})
export class RegisterFormBasicsPageModule {}
