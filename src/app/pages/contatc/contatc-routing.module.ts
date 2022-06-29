import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatcPage } from './contatc.page';

const routes: Routes = [
  {
    path: '',
    component: ContatcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatcPageRoutingModule {}
