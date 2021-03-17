import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmineditbookingPage } from './admineditbooking.page';

const routes: Routes = [
  {
    path: '',
    component: AdmineditbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmineditbookingPageRoutingModule {}
