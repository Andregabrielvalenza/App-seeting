import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormValidateUserVerifiedPage } from './register-form-validate-user-verified.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormValidateUserVerifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormValidateUserVerifiedPageRoutingModule {}
