import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import { FormGroup } from '@angular/forms';
import { merge } from 'rxjs';
import { I18NService } from '@core';
import basicmd from 'raw-loader!./basic.md';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private i18nService: I18NService) {
    super(injector);
  }

  basicmd;
  searchForm: FormGroup;
  types = [];
  secondTypes = [];

  ngOnInit() {
    this.basicmd = basicmd;
    this.types = this.i18nService.getDic('type');
    this.secondTypes = this.i18nService.getDic('secondType');
    this.searchForm = this.formBuilder.group({
      keyword: [''],
      type: [''],
      secondType: [''],
    });
    merge(this.searchForm.controls.type.valueChanges, this.searchForm.controls.secondType.valueChanges).subscribe(() =>
      this.searchData(true),
    );
  }
  searchData(reset?) {
    const params = {
      keyword: this.searchForm.controls.keyword.value,
      type: this.searchForm.controls.type.value,
      secondType: this.searchForm.controls.secondType.value,
    };
    this.message.info(JSON.stringify(params));
  }
}
