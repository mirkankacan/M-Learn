import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToubkalPage } from './toubkal.page';

const routes: Routes = [
  {
    path: '',
    component: ToubkalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToubkalPageRoutingModule {}
