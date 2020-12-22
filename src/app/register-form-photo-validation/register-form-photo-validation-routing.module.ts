import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormPhotoValidationPage } from './register-form-photo-validation.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormPhotoValidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormPhotoValidationPageRoutingModule {}
