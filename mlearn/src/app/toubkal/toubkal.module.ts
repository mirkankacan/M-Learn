import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToubkalPageRoutingModule } from './toubkal-routing.module';

import { ToubkalPage } from './toubkal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToubkalPageRoutingModule
  ],
  declarations: [ToubkalPage]
})
export class ToubkalPageModule {}
