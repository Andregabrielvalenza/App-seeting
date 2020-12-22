import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxReportUserPage } from './inbox-report-user.page';

const routes: Routes = [
  {
    path: '',
    component: InboxReportUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxReportUserPageRoutingModule {}
