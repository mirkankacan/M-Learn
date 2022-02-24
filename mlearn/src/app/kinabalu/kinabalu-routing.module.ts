import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinabaluPage } from './kinabalu.page';

const routes: Routes = [
  {
    path: '',
    component: KinabaluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinabaluPageRoutingModule {}
