import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormInterestsPage } from './register-form-interests.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormInterestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormInterestsPageRoutingModule {}
