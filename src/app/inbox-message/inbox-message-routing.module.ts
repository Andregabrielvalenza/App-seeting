import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxMessagePage } from './inbox-message.page';

const routes: Routes = [
  {
    path: '',
    component: InboxMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxMessagePageRoutingModule {}
