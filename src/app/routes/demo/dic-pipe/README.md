### dic-pipe

比如字典{'group1':'分组1','group2':'分组2','group3':'分组3','group4':'分组4'}，数据库中一般存的是key，前端界面需要显示value，
+ 传统方法通过if判断，在前端界面显示对应的值，如果字典发生了变化，前端要大面积改代码

```html
    <nz-badge *ngIf='data.Status ===0' nzColor="red" nzText="已下架"></nz-badge>
    <nz-badge *ngIf='data.Status !==0' nzColor="green" nzText="已上架"></nz-badge>
```

+ 通过ngx-translate引入多语言功能，在src/assets/temp/dic下定义公共字典，根据业务复杂度可创建多级目录，并在app.module.ts的I18nHttpLoaderFactory注册相应目录。
前端可通过如下代码直接得到相应的值，如果字典发生变化，只需要修改对应字典即可

```html
    <p>{{'group.group1' | translate}}</p>
    <p>{{'group.group2' | translate}}</p>
    <p>{{'group.group3' | translate}}</p>
    <p>{{'group.group4' | translate}}</p>
```
  
  

#### 备注

