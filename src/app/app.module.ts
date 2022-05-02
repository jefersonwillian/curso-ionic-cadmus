import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ApiService } from './@core/services/api.service';
import { CameraNativeService } from './@core/services/camera-native.service';
import { NetworkService } from './@core/services/network.service';
import { StorageService } from './@core/services/storage.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CameraNativeService,
    StorageService,
    NetworkService,
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
