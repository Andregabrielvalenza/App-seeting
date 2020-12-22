import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormAppearanceDosPage } from './register-form-appearance-dos.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormAppearanceDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormAppearanceDosPageRoutingModule {}
