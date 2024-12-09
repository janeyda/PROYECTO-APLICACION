import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuaperfilPageRoutingModule } from './actuaperfil-routing.module';

import { ActuaperfilPage } from './actuaperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuaperfilPageRoutingModule
  ],
  declarations: [ActuaperfilPage]
})
export class ActuaperfilPageModule {}
