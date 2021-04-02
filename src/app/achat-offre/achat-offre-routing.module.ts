import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatOffrePage } from './achat-offre.page';

const routes: Routes = [
  {
    path: '',
    component: AchatOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatOffrePageRoutingModule {}
