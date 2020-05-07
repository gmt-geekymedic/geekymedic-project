import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [],
})
export class ApiModule {}
