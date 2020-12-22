import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesMalePageRoutingModule } from './planes-male-routing.module';

import { PlanesMalePage } from './planes-male.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesMalePageRoutingModule
  ],
  declarations: [PlanesMalePage]
})
export class PlanesMalePageModule {}
