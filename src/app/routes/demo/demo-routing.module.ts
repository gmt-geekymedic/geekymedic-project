import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';

import { DicPipeComponent } from './dic-pipe/dic-pipe.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { AmapComponent } from './amap/amap.component';
import { DicSelectComponent } from './dic-select/dic-select.component';

const routes: Routes = [
  { path: '', redirectTo: 'dic', pathMatch: 'full' },
  {
    path: 'dic',
    component: DicPipeComponent,
    canActivate: [ACLGuard],
    data: {
      breadcrumb: '字典管道',
      title: '字典管道',
      guard: { ability: ['dic'] },
    },
  },
  {
    path: 'dic-select',
    component: DicSelectComponent,
    canActivate: [ACLGuard],
    data: {
      breadcrumb: '字典选择器',
      title: '字典选择器',
      guard: { ability: ['dic-select'] },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
