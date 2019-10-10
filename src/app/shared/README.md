### SharedModule

此模块会导出大量常用模块，一般业务模块只需导入此模块

+ components文件夹存放自定义组件(推荐使用onpush策略,以提高性能)
   + org-tree.component 组织机构树组件，普通组件
   + org-select.component 组织机构树下拉选择组件，可用于form表单的组件
+ services文件夹存放自定义服务
   + lazy.service 延迟加载第三方类库服务(ng-alain自带LazyService返回Promise不好用，请使用此Observable版本)
+ utils文件夹存放公用工具类
+ index.ts方便其它地方引入

#### 备注

推荐公用模块会被其它地方多次引入的都加入index.ts做合并导出，方便其它地方一行代码导入多个。
