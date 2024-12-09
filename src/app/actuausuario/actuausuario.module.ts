import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuausuarioPageRoutingModule } from './actuausuario-routing.module';

import { ActuausuarioPage } from './actuausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuausuarioPageRoutingModule
  ],
  declarations: [ActuausuarioPage]
})
export class ActuausuarioPageModule {}
