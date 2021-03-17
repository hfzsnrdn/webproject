import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermncondPageRoutingModule } from './termncond-routing.module';

import { TermncondPage } from './termncond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermncondPageRoutingModule
  ],
  declarations: [TermncondPage]
})
export class TermncondPageModule {}
