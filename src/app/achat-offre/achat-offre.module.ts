import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatOffrePageRoutingModule } from './achat-offre-routing.module';

import { AchatOffrePage } from './achat-offre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatOffrePageRoutingModule
  ],
  declarations: [AchatOffrePage]
})
export class AchatOffrePageModule {}
