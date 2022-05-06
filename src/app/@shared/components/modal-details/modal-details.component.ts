import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IListHome } from 'src/app/@core/interfaces/list-home/list-home.interface';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {
  public data: IListHome;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  public closeModal() {
    this.modalController.dismiss();
  }
}
