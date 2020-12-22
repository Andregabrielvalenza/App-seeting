import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesGoPhotofeedPageRoutingModule } from './planes-go-photofeed-routing.module';

import { PlanesGoPhotofeedPage } from './planes-go-photofeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesGoPhotofeedPageRoutingModule
  ],
  declarations: [PlanesGoPhotofeedPage]
})
export class PlanesGoPhotofeedPageModule {}
