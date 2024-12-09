import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolRegistrarPageRoutingModule } from './rol-registrar-routing.module';

import { RolRegistrarPage } from './rol-registrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolRegistrarPageRoutingModule
  ],
  declarations: [RolRegistrarPage]
})
export class RolRegistrarPageModule {}
