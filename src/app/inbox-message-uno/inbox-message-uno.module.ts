import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxMessageUnoPageRoutingModule } from './inbox-message-uno-routing.module';

import { InboxMessageUnoPage } from './inbox-message-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxMessageUnoPageRoutingModule
  ],
  declarations: [InboxMessageUnoPage]
})
export class InboxMessageUnoPageModule {}
