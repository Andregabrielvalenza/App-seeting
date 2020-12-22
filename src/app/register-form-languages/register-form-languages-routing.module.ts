import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormLanguagesPage } from './register-form-languages.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormLanguagesPageRoutingModule {}
