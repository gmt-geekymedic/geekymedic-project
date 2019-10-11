import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}
}
