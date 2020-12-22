import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanesGoPhotofeedPage } from './planes-go-photofeed.page';

const routes: Routes = [
  {
    path: '',
    component: PlanesGoPhotofeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesGoPhotofeedPageRoutingModule {}
