### modal

+ 要弹出的内容封装到组件中，并注册到entryComponents上，弹窗的输入参数通过nzComponentParams传入，输出在nzOnOk里通过componentInstance获取

```typescript
export class ModalComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  dataSet = [];
  ngOnInit() {
  }
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

```
