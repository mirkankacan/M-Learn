import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinabaluPageRoutingModule } from './kinabalu-routing.module';

import { KinabaluPage } from './kinabalu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KinabaluPageRoutingModule
  ],
  declarations: [KinabaluPage]
})
export class KinabaluPageModule {}
