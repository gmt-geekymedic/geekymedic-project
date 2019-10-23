import { Component, OnInit, Injector } from '@angular/core';
import { MapService } from '@shared/services';
import { BaseComponent } from '@geekymedic/common';
import basicmd from 'raw-loader!./basic.md';

@Component({
  selector: 'app-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.scss'],
})
export class AmapComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private mapService: MapService) {
    super(injector);
  }
  basicmd;
  ngOnInit() {
    this.basicmd = basicmd;
    this.mapService.loadAMap().subscribe(() => {
      const map = new AMap.Map('mapContainer', {
        resizeEnable: true,
        center: [116.397428, 25.90923], // 地图中心点
        zoom: 13, // 地图显示的缩放级别
        keyboardEnable: false,
      });
    });
  }
}
