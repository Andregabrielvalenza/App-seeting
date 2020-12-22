import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionMenuPage } from './action-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ActionMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionMenuPageRoutingModule {}
