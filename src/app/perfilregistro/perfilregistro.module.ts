import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilregistroPageRoutingModule } from './perfilregistro-routing.module';

import { PerfilregistroPage } from './perfilregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilregistroPageRoutingModule
  ],
  declarations: [PerfilregistroPage]
})
export class PerfilregistroPageModule {}
