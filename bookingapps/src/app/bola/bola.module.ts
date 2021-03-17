import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolaPageRoutingModule } from './bola-routing.module';

import { BolaPage } from './bola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolaPageRoutingModule
  ],
  declarations: [BolaPage]
})
export class BolaPageModule {}
