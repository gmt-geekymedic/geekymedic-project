import { Component, Injector, OnInit, Input } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  @Input() title: string;
  @Input() description: string;
  @Input() code: string;
  @Input() showCode: boolean;
  ngOnInit() {}
}
