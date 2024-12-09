import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolRegistrarPage } from './rol-registrar.page';

const routes: Routes = [
  {
    path: '',
    component: RolRegistrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolRegistrarPageRoutingModule {}
