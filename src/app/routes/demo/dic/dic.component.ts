import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import { I18NService } from '@core';
import pipemd from 'raw-loader!./pipe.md';
import selectmd from 'raw-loader!./select.md';

@Component({
  selector: 'app-dic',
  templateUrl: './dic.component.html',
  styles: ['.ant-select{width:180px}'],
})
export class DicComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private i18nService: I18NService) {
    super(injector);
  }

  pipemd;
  selectmd;
  commonTypes = [];
  bus1Types = [];
  bus2Types = [];

  ngOnInit() {
    this.pipemd = pipemd;
    this.selectmd = selectmd;
    this.commonTypes = this.i18nService.getDic('group');
    this.bus1Types = this.i18nService.getDic('bus1.group');
    this.bus2Types = this.i18nService.getDic('bus2.group');
  }
}
