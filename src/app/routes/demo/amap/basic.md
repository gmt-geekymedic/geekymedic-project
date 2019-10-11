### amap

+ 加载高德地图类库，创建地图实例

```typescript
export class AmapComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private mapService: MapService) {
    super(injector);
  }
  ngOnInit() {
    this.mapService.loadAMap().subscribe({
      complete: () => {
        const map = new AMap.Map('mapContainer', {
          resizeEnable: true,
          center: [116.397428, 25.90923], // 地图中心点
          zoom: 13, // 地图显示的缩放级别
          keyboardEnable: false,
        });
      },
    });
  }
}
```
