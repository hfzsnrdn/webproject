import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquerePage } from './squere.page';

const routes: Routes = [
  {
    path: '',
    component: SquerePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquerePageRoutingModule {}
