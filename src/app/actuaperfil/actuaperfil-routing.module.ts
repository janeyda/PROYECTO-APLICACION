import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuaperfilPage } from './actuaperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ActuaperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuaperfilPageRoutingModule {}
