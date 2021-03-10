import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermisoFotoPage } from './permiso-foto.page';

const routes: Routes = [
  {
    path: '',
    component: PermisoFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermisoFotoPageRoutingModule {}
