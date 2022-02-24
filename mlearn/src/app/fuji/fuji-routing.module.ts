import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FujiPage } from './fuji.page';

const routes: Routes = [
  {
    path: '',
    component: FujiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FujiPageRoutingModule {}
