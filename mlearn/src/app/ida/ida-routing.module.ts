import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdaPage } from './ida.page';

const routes: Routes = [
  {
    path: '',
    component: IdaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdaPageRoutingModule {}
