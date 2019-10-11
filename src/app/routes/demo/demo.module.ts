import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '@shared';
import { DemoRoutingModule } from './demo-routing.module';

import { DicComponent } from './dic/dic.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { UserModalComponent } from './modal/user-modal/user-modal.component';
import { AmapComponent } from './amap/amap.component';
import { CodeBoxComponent } from './code-box/code-box.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { StepsComponent } from './steps/steps.component';

const COMPONENTS = [
  DicComponent,
  ModalComponent,
  SearchComponent,
  AmapComponent,
  CodeBoxComponent,
  RxjsComponent,
  StepsComponent,
];
const COMPONENTS_NOROUNT = [UserModalComponent];

@NgModule({
  imports: [MarkdownModule.forChild(), SharedModule, DemoRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DemoModule {}
