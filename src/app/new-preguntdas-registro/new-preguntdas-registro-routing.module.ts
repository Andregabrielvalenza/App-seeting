import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPreguntdasRegistroPage } from './new-preguntdas-registro.page';

const routes: Routes = [
  {
    path: '',
    component: NewPreguntdasRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPreguntdasRegistroPageRoutingModule {}
