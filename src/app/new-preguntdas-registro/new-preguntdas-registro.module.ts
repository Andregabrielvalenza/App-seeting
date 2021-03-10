import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPreguntdasRegistroPageRoutingModule } from './new-preguntdas-registro-routing.module';

import { NewPreguntdasRegistroPage } from './new-preguntdas-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPreguntdasRegistroPageRoutingModule
  ],
  declarations: [NewPreguntdasRegistroPage]
})
export class NewPreguntdasRegistroPageModule {}
