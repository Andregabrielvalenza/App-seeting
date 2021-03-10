import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxMessageUnoPage } from './inbox-message-uno.page';

const routes: Routes = [
  {
    path: '',
    component: InboxMessageUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxMessageUnoPageRoutingModule {}
