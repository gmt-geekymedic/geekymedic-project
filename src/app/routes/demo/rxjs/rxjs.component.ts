import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import basicmd from 'raw-loader!./basic.md';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  basicmd;
  ngOnInit() {
    this.basicmd = basicmd;
  }
}
