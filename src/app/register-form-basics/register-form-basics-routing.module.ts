import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormBasicsPage } from './register-form-basics.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormBasicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormBasicsPageRoutingModule {}
