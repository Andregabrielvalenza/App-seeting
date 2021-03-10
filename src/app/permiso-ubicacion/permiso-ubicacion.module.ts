import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermisoUbicacionPageRoutingModule } from './permiso-ubicacion-routing.module';

import { PermisoUbicacionPage } from './permiso-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermisoUbicacionPageRoutingModule
  ],
  declarations: [PermisoUbicacionPage]
})
export class PermisoUbicacionPageModule {}
