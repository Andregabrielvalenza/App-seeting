import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearContrasenaPageRoutingModule } from './crear-contrasena-routing.module';

import { CrearContrasenaPage } from './crear-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearContrasenaPageRoutingModule
  ],
  declarations: [CrearContrasenaPage]
})
export class CrearContrasenaPageModule {}
