import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetailsComponent } from './modal-details.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ModalDetailsComponent],
  entryComponents: [ModalDetailsComponent],
  imports: [CommonModule, IonicModule],
})

export class ModalDetailsModule {}
