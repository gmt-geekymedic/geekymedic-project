import { Injectable } from '@angular/core';
import { Observable, concat, defer } from 'rxjs';
import { LazyService } from '@geekymedic/common';

/**
 * 地图服务
 */
@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private lazyService: LazyService) {}

  /**
   * 加载高德地图类库
   */
  loadAMap(): Observable<any> {
    return concat(
      defer(() =>
        this.lazyService.loadScript('https://webapi.amap.com/maps?v=1.4.15&key=42055b210625ca30b9afa2388b9497b0'),
      ),
      defer(() => this.lazyService.loadScript('https://webapi.amap.com/ui/1.0/main.js')),
    );
  }
}
