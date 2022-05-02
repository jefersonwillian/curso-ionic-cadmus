import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private toastCtrl: ToastController) {}

  public async isOnline() {
    const status = await Network.getStatus();
    return status.connected;
  }

  public listenerOnline() {
    Network.addListener('networkStatusChange', (status) => {
      if (!status.connected) {
        this.messageToastNetwork();
      }
    });
  }

  public async messageToastNetwork() {
    const toast = await this.toastCtrl.create({
      message: 'Dispositivo não conectado à internet',
      color: 'danger',
      duration: 4000,
      position: 'bottom',
    });
    toast.present();
  }
}
