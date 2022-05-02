/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonRefresher } from '@ionic/angular';
import { ENDPOINTS } from 'src/app/@core/contants/api.endpoints.const';
import { RequestMethodEnum } from 'src/app/@core/enums/request-method.enum';
import { ApiService } from 'src/app/@core/services/api.service';
import { infiniteScrollLocal } from 'src/app/@core/utils/infinite-scroll.utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  @ViewChild('onRefreshPanel') onRefreshPanel: IonRefresher;

  public listUser = [];

  public activeListUser: Array<any> = [];

  constructor(
    public apiService: ApiService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.getUser();
  }

  public async getUser() {
    try {
      const response = await this.apiService.request(
        ENDPOINTS.UsersGitHub,
        {},
        RequestMethodEnum.GET
      );
      if (response.length) {
        this.listUser = response;
        this.feedListGiven();
      }
    } catch (error) {
      this.alerta('Atenção', error);
    }
  }

  public handleSearch(event) {
    if (event.target.value) {
      const filter = this.activeListUser.filter(
        (el) => el.login.toLowerCase() === event.target.value.toLowerCase()
      );

      if (filter.length) {
        this.activeListUser = [];
        this.activeListUser = filter;
      }
    } else {
      this.feedListGiven();
    }
  }

  public async handleDoRefresh() {
    setTimeout(() => {
      this.activeListUser.sort(() => Math.random() - 10);
      this.onRefreshPanel.complete();
    }, 3000);
  }

  public handleClearSeach() {
    this.feedListGiven();
  }

  public async handleSearchMoreItems(infiniteScrollTarget) {
    setTimeout(() => {
      this.activeListUser = infiniteScrollLocal(
        this.activeListUser,
        this.listUser,
        10,
        infiniteScrollTarget
      );
      infiniteScrollTarget.complete();
    }, 5000);
  }

  public async alerta(titulo: string, mensagem: string, botaoTexto = 'Ok') {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensagem,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.handleDoRefresh();
          },
        },
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            this.onRefreshPanel.complete();
          },
        },
      ],
    });

    await alert.present();
  }

  private feedListGiven() {
    this.activeListUser = [];
    for (let index = 0; index <= 5; index++) {
      this.activeListUser.push(this.listUser[index]);
    }
  }
}
