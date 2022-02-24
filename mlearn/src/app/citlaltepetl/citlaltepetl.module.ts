import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitlaltepetlPageRoutingModule } from './citlaltepetl-routing.module';

import { CitlaltepetlPage } from './citlaltepetl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitlaltepetlPageRoutingModule
  ],
  declarations: [CitlaltepetlPage]
})
export class CitlaltepetlPageModule {}
