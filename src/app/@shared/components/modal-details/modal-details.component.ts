import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {
  public data: any;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.data);
  }

  public closeModal() {
    this.modalController.dismiss();
  }
}
