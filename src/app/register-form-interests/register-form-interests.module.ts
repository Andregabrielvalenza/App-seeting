import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormInterestsPageRoutingModule } from './register-form-interests-routing.module';

import { RegisterFormInterestsPage } from './register-form-interests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormInterestsPageRoutingModule
  ],
  declarations: [RegisterFormInterestsPage]
})
export class RegisterFormInterestsPageModule {}
