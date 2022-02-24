import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdaPageRoutingModule } from './ida-routing.module';

import { IdaPage } from './ida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdaPageRoutingModule
  ],
  declarations: [IdaPage]
})
export class IdaPageModule {}
