import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import { I18NService } from '@core';

@Component({
  selector: 'app-dic-select',
  templateUrl: './dic-select.component.html',
  styles: ['.ant-select{width:180px}'],
})
export class DicSelectComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private i18nService: I18NService) {
    super(injector);
  }
  commonTypes = [];
  bus1Types = [];
  bus2Types = [];
  ngOnInit() {
    this.commonTypes = this.i18nService.getDic('group');
    this.bus1Types = this.i18nService.getDic('bus1.group');
    this.bus2Types = this.i18nService.getDic('bus2.group');
  }
}
