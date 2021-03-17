import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmineditbookingPageRoutingModule } from './admineditbooking-routing.module';

import { AdmineditbookingPage } from './admineditbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmineditbookingPageRoutingModule
  ],
  declarations: [AdmineditbookingPage]
})
export class AdmineditbookingPageModule {}
