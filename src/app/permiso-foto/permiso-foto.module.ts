import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermisoFotoPageRoutingModule } from './permiso-foto-routing.module';

import { PermisoFotoPage } from './permiso-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermisoFotoPageRoutingModule
  ],
  declarations: [PermisoFotoPage]
})
export class PermisoFotoPageModule {}
