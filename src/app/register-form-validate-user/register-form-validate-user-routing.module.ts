import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormValidateUserPage } from './register-form-validate-user.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormValidateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormValidateUserPageRoutingModule {}
