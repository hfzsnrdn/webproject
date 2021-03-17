import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutsalPageRoutingModule } from './futsal-routing.module';

import { FutsalPage } from './futsal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutsalPageRoutingModule
  ],
  declarations: [FutsalPage]
})
export class FutsalPageModule {}
