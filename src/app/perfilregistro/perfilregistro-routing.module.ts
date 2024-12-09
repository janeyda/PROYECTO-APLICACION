import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilregistroPage } from './perfilregistro.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilregistroPageRoutingModule {}
