import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearContrasenaPage } from './crear-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: CrearContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearContrasenaPageRoutingModule {}
