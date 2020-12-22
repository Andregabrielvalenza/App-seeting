import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxReportUserPageRoutingModule } from './inbox-report-user-routing.module';

import { InboxReportUserPage } from './inbox-report-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxReportUserPageRoutingModule
  ],
  declarations: [InboxReportUserPage]
})
export class InboxReportUserPageModule {}
