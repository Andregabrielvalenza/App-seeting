import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormYourselfPage } from './register-form-yourself.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormYourselfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormYourselfPageRoutingModule {}
