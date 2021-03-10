import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxMessageDosPageRoutingModule } from './inbox-message-dos-routing.module';

import { InboxMessageDosPage } from './inbox-message-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxMessageDosPageRoutingModule
  ],
  declarations: [InboxMessageDosPage]
})
export class InboxMessageDosPageModule {}
