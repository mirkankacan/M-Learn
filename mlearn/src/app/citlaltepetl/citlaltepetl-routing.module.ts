import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitlaltepetlPage } from './citlaltepetl.page';

const routes: Routes = [
  {
    path: '',
    component: CitlaltepetlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitlaltepetlPageRoutingModule {}
