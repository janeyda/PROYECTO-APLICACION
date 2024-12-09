import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuarolPage } from './actuarol.page';

const routes: Routes = [
  {
    path: '',
    component: ActuarolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuarolPageRoutingModule {}
