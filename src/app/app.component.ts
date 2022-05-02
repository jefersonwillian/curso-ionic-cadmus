import { Component, OnInit } from '@angular/core';
import { NetworkService } from './@core/services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public networkService: NetworkService) {}

  ngOnInit() {
    this.networkService.listenerOnline();
  }
}
