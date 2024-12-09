import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuarolPageRoutingModule } from './actuarol-routing.module';

import { ActuarolPage } from './actuarol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuarolPageRoutingModule
  ],
  declarations: [ActuarolPage]
})
export class ActuarolPageModule {}
