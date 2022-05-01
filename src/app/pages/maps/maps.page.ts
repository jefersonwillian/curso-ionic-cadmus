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

  constructor() {}

  ngOnInit() {
    this.printCurrentPosition();
  }

  public printCurrentPosition() {
    Geolocation.getCurrentPosition()
      .then((res) => {
        if (res.coords) {
          this.lat = res.coords.latitude;
          this.lng = res.coords.longitude;

          this.createMap();
        }
      })
      .catch((error) => {
        this.createMap();
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
  }
}
