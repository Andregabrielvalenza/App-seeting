import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormAppearancePage } from './register-form-appearance.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormAppearancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormAppearancePageRoutingModule {}
