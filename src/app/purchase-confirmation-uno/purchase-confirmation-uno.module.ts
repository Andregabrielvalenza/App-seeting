import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseConfirmationUnoPageRoutingModule } from './purchase-confirmation-uno-routing.module';

import { PurchaseConfirmationUnoPage } from './purchase-confirmation-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseConfirmationUnoPageRoutingModule
  ],
  declarations: [PurchaseConfirmationUnoPage]
})
export class PurchaseConfirmationUnoPageModule {}
