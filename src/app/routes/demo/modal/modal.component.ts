import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import { UserModalComponent } from './user-modal/user-modal.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [],
})
export class ModalComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  dataSet = [];
  ngOnInit() {}
  addRow() {
    this.startEdit();
  }
  startEdit(key?) {
    const model = this.dataSet.find(l => l.id === key);
    this.modal.create({
      nzTitle: model ? '编辑用户' : '新增用户',
      nzContent: UserModalComponent,
      nzComponentParams: { model },
      nzMaskClosable: false,
      nzOnOk: componentInstance =>
        new Promise((resolve, reject) => {
          if (!componentInstance.verify) {
            resolve(false);
            return;
          }
          if (componentInstance.model) {
            Object.assign(this.dataSet.find(l => l.id === model.id), {
              ...componentInstance.model,
              ...componentInstance.validateForm.value,
            });
          } else {
            this.dataSet = [{ id: _.uniqueId(), ...componentInstance.validateForm.value }, ...this.dataSet];
          }
          resolve();
        }),
    });
  }
}
