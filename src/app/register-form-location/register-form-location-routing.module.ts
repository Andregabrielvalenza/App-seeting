import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormLocationPage } from './register-form-location.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormLocationPageRoutingModule {}
