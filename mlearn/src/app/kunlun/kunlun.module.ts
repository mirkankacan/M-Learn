import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltynPageRoutingModule } from './kunlun-routing.module';

import { AltynPage } from './kunlun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltynPageRoutingModule
  ],
  declarations: [AltynPage]
})
export class KunlunPageModule {}
