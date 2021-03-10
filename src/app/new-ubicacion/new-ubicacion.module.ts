import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUbicacionPageRoutingModule } from './new-ubicacion-routing.module';

import { NewUbicacionPage } from './new-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUbicacionPageRoutingModule
  ],
  declarations: [NewUbicacionPage]
})
export class NewUbicacionPageModule {}
