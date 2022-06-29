import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatcPageRoutingModule } from './contatc-routing.module';

import { ContatcPage } from './contatc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatcPageRoutingModule
  ],
  declarations: [ContatcPage]
})
export class ContatcPageModule {}
