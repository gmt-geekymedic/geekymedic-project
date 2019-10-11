### search

+ 搜索条件推荐使用响应式表单，订阅除input输入框外其它条件的变更通知，并在变更时重新查询数据，统一用户体验

```typescript
export class SearchComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  searchForm: FormGroup;

  ngOnInit() {
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
    // todo 查询数据
  }
}
```
