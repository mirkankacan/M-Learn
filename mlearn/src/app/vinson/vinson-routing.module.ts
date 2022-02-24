import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinsonPage } from './vinson.page';

const routes: Routes = [
  {
    path: '',
    component: VinsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinsonPageRoutingModule {}
