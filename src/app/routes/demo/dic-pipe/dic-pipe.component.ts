import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';

@Component({
  selector: 'app-dic-pipe',
  templateUrl: './dic-pipe.component.html',
  styles: [],
})
export class DicPipeComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}
}
