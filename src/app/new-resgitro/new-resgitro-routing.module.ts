import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewResgitroPage } from './new-resgitro.page';

const routes: Routes = [
  {
    path: '',
    component: NewResgitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewResgitroPageRoutingModule {}
