import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormWelcomePage } from './register-form-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormWelcomePageRoutingModule {}
