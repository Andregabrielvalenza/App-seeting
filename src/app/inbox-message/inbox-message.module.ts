import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxMessagePageRoutingModule } from './inbox-message-routing.module';

import { InboxMessagePage } from './inbox-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxMessagePageRoutingModule
  ],
  declarations: [InboxMessagePage]
})
export class InboxMessagePageModule {}
