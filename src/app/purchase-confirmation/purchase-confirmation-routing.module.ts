import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseConfirmationPage } from './purchase-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseConfirmationPageRoutingModule {}
