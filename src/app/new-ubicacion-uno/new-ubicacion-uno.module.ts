import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUbicacionUnoPageRoutingModule } from './new-ubicacion-uno-routing.module';

import { NewUbicacionUnoPage } from './new-ubicacion-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUbicacionUnoPageRoutingModule
  ],
  declarations: [NewUbicacionUnoPage]
})
export class NewUbicacionUnoPageModule {}
