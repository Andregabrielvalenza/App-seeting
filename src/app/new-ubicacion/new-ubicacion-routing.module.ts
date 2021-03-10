import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUbicacionPage } from './new-ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: NewUbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUbicacionPageRoutingModule {}
