import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticatePage } from './autenticate.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticatePageRoutingModule {}
