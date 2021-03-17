import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutsalPage } from './futsal.page';

const routes: Routes = [
  {
    path: '',
    component: FutsalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutsalPageRoutingModule {}
