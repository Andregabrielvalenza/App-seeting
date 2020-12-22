import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanesMalePage } from './planes-male.page';

const routes: Routes = [
  {
    path: '',
    component: PlanesMalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesMalePageRoutingModule {}
