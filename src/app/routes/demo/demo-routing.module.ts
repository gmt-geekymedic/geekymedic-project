import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';

import { DicComponent } from './dic/dic.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { AmapComponent } from './amap/amap.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpTimeoutComponent } from './http-timeout/http-timeout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dic', pathMatch: 'full' },
  {
    path: 'dic',
    component: DicComponent,
    canActivate: [ACLGuard],
    data: {
      breadcrumb: '字典',
      title: '字典',
      guard: { ability: ['dic'] },
    },
  },
  {
    path: 'modal',
    component: ModalComponent,
    canActivate: [ACLGuard],
    data: {
      breadcrumb: '弹窗',
      title: '弹窗',
      guard: { ability: ['modal'] },
    },
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [ACLGuard],
    data: {
      breadcrumb: '搜索条件',
      title: '搜索条件',
      guard: { ability: ['search'] },
    },
  },
  {
    path: 'amap',
    component: AmapComponent,
    canActivate: [ACLGuard],
    data: {
      breadcrumb: '高德地图',
      title: '高德地图',
      guard: { ability: ['map'] },
    },
  },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'timeout', component: HttpTimeoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
