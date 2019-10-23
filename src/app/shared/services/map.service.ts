/*
 * @Description: 文件注释
 * @Author: wangjiang
 * @Contact: jiang.wang@geekymedic.cn
 * @Date: 2019-10-18 14:44:21
 * @LastEditTime: 2019-10-21 18:01:09
 * @LastEditors: wangjiang
 */
import { Injectable } from '@angular/core';
import { Observable, concat, defer } from 'rxjs';
import { LazyService } from '@geekymedic/common';
import { last } from 'rxjs/operators';

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
    ).pipe(last());
  }
}
