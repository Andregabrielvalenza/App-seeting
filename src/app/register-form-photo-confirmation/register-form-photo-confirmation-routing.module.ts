import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormPhotoConfirmationPage } from './register-form-photo-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormPhotoConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormPhotoConfirmationPageRoutingModule {}
