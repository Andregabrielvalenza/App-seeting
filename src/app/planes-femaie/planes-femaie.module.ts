import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesFemaiePageRoutingModule } from './planes-femaie-routing.module';

import { PlanesFemaiePage } from './planes-femaie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesFemaiePageRoutingModule
  ],
  declarations: [PlanesFemaiePage]
})
export class PlanesFemaiePageModule {}
