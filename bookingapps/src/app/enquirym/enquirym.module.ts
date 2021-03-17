import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquirymPageRoutingModule } from './enquirym-routing.module';

import { EnquirymPage } from './enquirym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquirymPageRoutingModule
  ],
  declarations: [EnquirymPage]
})
export class EnquirymPageModule {}
