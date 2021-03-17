import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermncondPage } from './termncond.page';

const routes: Routes = [
  {
    path: '',
    component: TermncondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermncondPageRoutingModule {}
