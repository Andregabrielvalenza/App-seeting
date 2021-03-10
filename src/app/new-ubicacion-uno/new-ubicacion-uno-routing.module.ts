import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUbicacionUnoPage } from './new-ubicacion-uno.page';

const routes: Routes = [
  {
    path: '',
    component: NewUbicacionUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUbicacionUnoPageRoutingModule {}
