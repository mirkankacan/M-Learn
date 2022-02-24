import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FujiPageRoutingModule } from './fuji-routing.module';

import { FujiPage } from './fuji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FujiPageRoutingModule
  ],
  declarations: [FujiPage]
})
export class FujiPageModule {}
