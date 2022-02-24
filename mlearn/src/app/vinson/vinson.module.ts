import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinsonPageRoutingModule } from './vinson-routing.module';

import { VinsonPage } from './vinson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinsonPageRoutingModule
  ],
  declarations: [VinsonPage]
})
export class VinsonPageModule {}
