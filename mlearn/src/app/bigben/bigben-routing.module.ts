import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigbenPage } from './bigben.page';

const routes: Routes = [
  {
    path: '',
    component: BigbenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigbenPageRoutingModule {}
