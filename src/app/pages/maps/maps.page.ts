import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;

  public newMap: GoogleMap;

  public lat: number;
  public lng: number;

  public ativaMap = false;
  constructor() {}

  ngOnInit() {
    this.printCurrentPosition();
  }

  public printCurrentPosition() {
    Geolocation.getCurrentPosition()
      .then((res) => {
        console.log('then ~ res', res);
        if (res.coords) {
          this.lat = res.coords.latitude;
          this.lng = res.coords.longitude;
          this.ativaMap = true;

          setTimeout(() => {
            this.createMap();
          }, 5000);
        }
      })
      .catch((error) => {
        console.log('printCurrentPosition ~ error', error);
        this.ativaMap = true;
        setTimeout(() => {
          this.createMap();
        }, 5000);
      });
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: this.lat,
          lng: this.lng,
        },
        zoom: 8,
      },
    });
    console.log('🚀 ~ file: maps.page.ts ~ line 54 ~ MapsPage ~ createMap ~ this.newMap', this.newMap);
  }
}
