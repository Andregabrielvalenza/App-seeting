import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxMessageDosPage } from './inbox-message-dos.page';

const routes: Routes = [
  {
    path: '',
    component: InboxMessageDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxMessageDosPageRoutingModule {}
