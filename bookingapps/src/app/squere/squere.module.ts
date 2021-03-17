import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquerePageRoutingModule } from './squere-routing.module';

import { SquerePage } from './squere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquerePageRoutingModule
  ],
  declarations: [SquerePage]
})
export class SquerePageModule {}
