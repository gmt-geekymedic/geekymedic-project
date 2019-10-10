import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MisService } from './services/mis.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [MisService],
})
export class ApiModule {}
