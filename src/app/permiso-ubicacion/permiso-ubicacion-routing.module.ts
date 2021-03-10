import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermisoUbicacionPage } from './permiso-ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: PermisoUbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermisoUbicacionPageRoutingModule {}
