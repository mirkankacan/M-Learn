import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltynPage } from './kunlun.page';

const routes: Routes = [
  {
    path: '',
    component: AltynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltynPageRoutingModule {}
