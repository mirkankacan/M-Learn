import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BigbenPageRoutingModule } from './bigben-routing.module';

import { BigbenPage } from './bigben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BigbenPageRoutingModule
  ],
  declarations: [BigbenPage]
})
export class BigbenPageModule {}
