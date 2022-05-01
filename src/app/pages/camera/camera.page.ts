import { Component, OnInit } from '@angular/core';
import { CameraNativeService } from 'src/app/@core/services/camera-native.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public listImg = [];

  constructor(public cameraNativeService: CameraNativeService) {}

  ngOnInit() {}

  public async openCamera() {
    const imgData = await this.cameraNativeService.takePicture();
    console.log(
      '🚀 ~ file: camera.page.ts ~ line 17 ~ CameraPage ~ openCamera ~ imgData',
      imgData
    );
    this.listImg.push(imgData.webPath);
  }
}
