import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquirymPage } from './enquirym.page';

const routes: Routes = [
  {
    path: '',
    component: EnquirymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquirymPageRoutingModule {}
