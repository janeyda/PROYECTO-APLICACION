import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuausuarioPage } from './actuausuario.page';

const routes: Routes = [
  {
    path: '',
    component: ActuausuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuausuarioPageRoutingModule {}
