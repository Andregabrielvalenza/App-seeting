import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseConfirmationPageRoutingModule } from './purchase-confirmation-routing.module';

import { PurchaseConfirmationPage } from './purchase-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseConfirmationPageRoutingModule
  ],
  declarations: [PurchaseConfirmationPage]
})
export class PurchaseConfirmationPageModule {}
