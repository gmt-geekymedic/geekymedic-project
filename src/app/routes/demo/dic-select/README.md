### dic-select

比如字典{'group1':'分组1','group2':'分组2','group3':'分组3','group4':'分组4'},需要下拉选择
+ 传统方法通过在选项中列出所有值，即不方便维护，也不方便复用

```html
    <nz-select>
      <nz-option nzValue="group1" nzLabel="分组1"></nz-option>
      <nz-option nzValue="group2" nzLabel="分组2"></nz-option>
      <nz-option nzValue="group3" nzLabel="分组3"></nz-option>
      <nz-option nzValue="group4" nzLabel="分组4"></nz-option>
    </nz-select>
```
+ 通过ngx-translate引入多语言功能，在src/assets/temp/dic下定义公共字典，根据业务复杂度可创建多级目录，并在app.module.ts的I18nHttpLoaderFactory注册相应目录。
前端可通过如下代码从字典获取一个数组，界面通过ngfor遍历数组得到下拉选项，如果后端变化，只需要修改对应字典即可

```html
    <nz-select>
      <nz-option *ngFor="let option of commonTypes" [nzValue]="option.key" [nzLabel]="option.value"></nz-option>
    </nz-select>
```

```typescript
export class DicSelectComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private i18nService: I18NService) {
    super(injector);
  }
  commonTypes = [];
  ngOnInit() {
    this.commonTypes = this.i18nService.getDic('group');
  }
}

```

#### 备注

