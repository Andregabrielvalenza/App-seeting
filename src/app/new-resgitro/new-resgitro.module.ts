import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewResgitroPageRoutingModule } from './new-resgitro-routing.module';

import { NewResgitroPage } from './new-resgitro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewResgitroPageRoutingModule
  ],
  declarations: [NewResgitroPage]
})
export class NewResgitroPageModule {}
