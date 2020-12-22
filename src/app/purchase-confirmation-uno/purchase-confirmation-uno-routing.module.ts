import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseConfirmationUnoPage } from './purchase-confirmation-uno.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseConfirmationUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseConfirmationUnoPageRoutingModule {}
