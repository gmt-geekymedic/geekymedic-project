import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DemoRoutingModule } from './demo-routing.module';

import { DicPipeComponent } from './dic-pipe/dic-pipe.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { UserModalComponent } from './modal/user-modal/user-modal.component';
import { AmapComponent } from './amap/amap.component';
import { DicSelectComponent } from './dic-select/dic-select.component';

const COMPONENTS = [DicPipeComponent, ModalComponent, SearchComponent, AmapComponent, DicSelectComponent];
const COMPONENTS_NOROUNT = [UserModalComponent];

@NgModule({
  imports: [SharedModule, DemoRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DemoModule {}
