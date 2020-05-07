## 药极客前端贡献指南

本文档主要是用作公司Angular项目的开发规范，为了减少维护成本，提高代码效率，请项目人员必须仔细阅读并严格遵守，并在实践中不断完善该文档。

#### 一、目录说明： 

```typescript

├── dist/                                       // 打包完存放目录
├── e2e/                                        // 端到端的测试目录，用来做自动测试的
├── node_modules/                               // 第三方依赖包存放目录
├── proxy/                                      // 代理配置目录
├── src/									
│   ├── app/
│   │   ├── api/                                // 调用后台接口模块(后期可通过swagger自动生成)
│   │   │   ├── models/                            // 实体目录(根据业务复杂度可适当调整分组层级)
│   │   │   │   ├── xxx.ts                         // xxx实体
│   │   │   │   ├── yyy.ts                         // yyy实体
│   │   │   │   ├── zzz-req.ts                     // zzz请求实体(方法参数超过一个时，需要封一个请求实体)
│   │   │   │   └── zzz-rep.ts                     // zzz响应实体
│   │   │   ├── services/                          // 服务目录(根据业务复杂度可适当调整分组层级)
│   │   │   │   ├── xxx.service.ts                 // xxx服务
│   │   │   │   ├── yyy.service.ts                 // yyy服务
│   │   │   │   └── zzz-service.ts                 // zzz服务
│   │   │   ├── api.module.ts                      // api模块，用于注册相关服务
│   │   │   ├── base-service.ts                    // http请求服务基类，采用ng-alain封装的httpclient，提供空值处理和日期格式化
│   │   │   └── services.ts                        // 导出所有service,方便其它地方引入
│   │   ├── core/                               // 核心模块(启动服务、http请求服务、http拦截器、系统级枚举、常量)
│   │   ├── layout/                             // 布局模块(布局相关组件)
│   │   ├── routes/                             // 业务模块目录
│   │   │   ├── xxx/                               // xxx业务模块
│   │   │   │   ├── yyy/                           // 模块内部根据业务进行分组(根据业务复杂度可适当调整分组层级)
│   │   │   │   │   └──zzz/                        // zzz组件文件夹
│   │   │   │   │      ├── zzz.component.ts        // zzz组件里面的业务
│   │   │   │   │      ├── zzz.component.scss      // zzz组件里面的样式
│   │   │   │   │      ├── zzz.component.html      // zzz组件里面的UI
│   │   │   │   │      └── zzz.service.ts          // zzz组件里面的服务
│   │   │   │   ├── xxx-routing.module.ts          // xxx模块的二级路由
│   │   │   │   ├── xxx.module.ts                  // xxx模块
│   │   │   │   └── xxx.service.ts                 // xxx模块中跨组件的服务
│   │   │   ├── routes-routing.module.ts           // 一级路由配置
│   │   │   └── routes.module.ts                   // 路由模块(首页、登录、注册相关组件注册)
│   │   └── shared/                             // 存放模块之间共享的资源
│   │       ├── components/                        // 跨模块的公共组件
│   │       ├── services/                          // 跨模块的公共服务
│   │       ├── utils/                             // 跨模块的公共工具
│   │       └── shared.module.ts                   // 共享模块(注册共享资源、导出业务模块经常依赖的模块)
│   ├── assets/                                 // 存储静态资源
│   ├── environments/                           // 多环境配置
│   ├── styles/                                 // 存放全局和主题样式
│   ├── index.html                              // 入口文件
│   └── styles.less                             // 样式入口文件
├── angular.json                            // Angular配置文件
├── CHANGELOG.md                            // 变更日志
├── CONTRIBUTING.md                         // 贡献指南
├── karma.conf.js                           // 单元测试的执行器
├── package.json                            // npm配置文件
├── README.md                               // 项目说明文件
├── tsconfig.json                           // typescript配置文件
└── tslint.json                             // 代码质量检查配置
```

#### 二、目录规范： 

- 以模块、功能、页面进行分文件夹
- 保持扁平的目录结构
- 多个伴生文件 (.ts、.html、.scss 和 .spec)放在一个文件夹中
- 采用英文小写方式命名，多个英文用小写横杆拼接
- 模块公用文件可放在shared中
- 所有应用程序的源代码都放到名叫 src 的目录里

例如：

```typescript
│   └── user/									// 模块
│       └── user-list/							// 页面
│       	├── user-list.component.html		// 页面模板文件
│       	├── user-list.component.scss		// 页面样式文件
│       	├── user-list.component.spec.ts		// 页面测试文件
│       	├── user-list.component.ts			// 页面文件
│       ├── user-detail/						// 页面
│       ├── user-edit/							// 页面
│       └── shard/								// 模块公用文件目录
│       	├── user.pipe.ts					// 公用文件
│       	├── user.service.ts					// 公用文件
│       	├── user.mock.ts					// 公用文件
```



#### 三、文件规范： 

- 简洁语义化
- 遵循同一个模式来描述符号的特性和类型。推荐的模式为 feature.type.ts
- 后缀来描述类型，包括 .service、.component、.pipe、.module、.directive。
- 多个单词用小写横杆拼接



#### 四、Typescript规范：

所有ts文件必须严格按照TypeScript规范来编写。



###### 1、变量常量

- 小写驼峰命名法来命名；
- 抛弃var，采用TypeScript的const命名常量，用let命名变量；
- 定义时必须表明类型

```typescript
// 不推荐做法
var message = ""；
var myNumber = 3.14；

// 推荐做法
let message:string = ""；
const myNumber:number = 3.14；
```



###### 2、函数方法

- 小写驼峰命名法来命名；
- 定义简单功能单一函数，一个函数只做一件事；
- 采用TypeScript的箭头函数来编写；
- 避免为私有函数方法添加下划线前缀；

```typescript
// 不推荐做法
show() {
    this._toastCount++;
    this._log();
  }

// 推荐做法
show() {
    this.toastCount++;
    this.log();
  }

```

- 使用函数表达式代替函数声明；

```typescript
// 不推荐做法
function foo() {
}

// 推荐做法
const foo = function() {
};

// 推荐做法
const foo = () => {
};
```



###### 3、类

- 大写驼峰命名法来命名；
- 需要时建议声明访问修饰符public/protected/private

```typescript
// 不推荐做法
export class exceptionService {
  message:string  
  constructor() { }
}

// 推荐做法
export class ExceptionService {
  public message:string  
  constructor() { }
}
```



###### 4、接口

- 大写驼峰命名法来命名；
- 不要在接口名字前面加 `I` 前缀
- 所有接口统一带@Injectable()，方便依赖注入

```typescript
// 不推荐做法
import { IHero } from './hero.model';
export class HeroCollectorService {
  hero: IHero;
 
  constructor() { }
}

// 推荐做法
import { Hero } from './hero.model';
@Injectable()
export class HeroCollectorService {
  hero: Hero;
 
  constructor() { }
}
```



###### 5、服务

- 大写驼峰命名法来命名；
- 服务的类名加上 `Service` 后缀
- 统一带@Injectable()，方便依赖注入

```typescript
// 不推荐做法
export class HeroData { }

// 推荐做法
@Injectable()
export class HeroDataService { }
```



###### 6、组件

- 模板和样式应该提取到独立文件
- @Input() 或者 @Output() 放到所装饰的属性的同一行
- 属性成员放在前面，方法成员放在后面
- 先放公共成员，再放私有成员
- 组件中只包含与视图相关的逻辑。所有其它逻辑都应该放到服务中
- 命名事件时，不要带前缀 `on`，避免与原生事件混淆

```typescript
// 推荐做法
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls:  ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() label: string;  
    
  // public properties
  message: string;
  title: string;

  // private properties
  private defaults = {};
  private toastElement: any;

  // public methods
  activate(message = this.message) {
    //...
  }

  ngOnInit() {
    //...
  }

  // private methods
  private hide() {
    //...
  }
}
```



###### 7、生命钩子

- 使用生命钩子时坚持实现生命周期钩子接口

```typescript
// 不推荐做法
export class HeroComponent {
  ngOnInit() {
    // ...
  }
}

// 推荐做法
export class HeroComponent implements OnInit {
  ngOnInit() {
    // ...
  }
}
```



#### 五、SCSS规范

- 每个组件单独写个`scss`文件,公用可通过`@import`来导入scss文件
- 统一字符编码 : `charset 'utf-8'`;
- 代码需要断行,且必须带上分号;

```scss
/* 推荐 */
.test {
    property1: attr;
    property2: attr;
    property3: attr;
}
```

- 嵌套中,属性建议根据类型进行排序

```scss
/* 推荐 */
.container{
    /*定位*/
    position:absolute;
    left:50%;
    top:50%;
   	transform:translate(-50%,-50%);
 
   /*盒子类型*/
   display:block;

  /*颜色控制*/
   color:#000;

  /*字体设置*/
  font-family:"微软雅黑";
  font-size:15px;
  font-weight:700;

  /*阴影设置*/
  text-shadow: 1px 1px 1px rgba(0,0,0,.5);
  box-shadow: 1px 1px 1px rgba(0,0,0,.5);
  
}
```

- 命名规范,推荐和CSS统一,小写加小横杆`wrapper-inbox`
- 混合宏(mixin),在传入CSS3阴影这类多参数的值时,应该使用$

```scss
/* 推荐 */
@mixin shadows($shadows...) {

}
```

- 循环条件判断可以参考JS的规范写法

```scss
/* 推荐 */
@if (true){
} @else (){
}
```

- 嵌套最好不过三层,有利于阅读,也有利于维护

```scss
/* 推荐 */
.outer {
  .inner {
    innercontent {
      // no more!
    }
  }
}
```



#### 六、注释规范

- 公用文件必须注明该文件描述、作者、更新时间、编辑事件、编辑人等注释

```typescript
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-31 17:57:33
 * @LastEditTime: 2019-05-31 17:57:33
 * @LastEditors: your name
 */
```

 
- 方法注释使用vscode自带的JSDoc注释，会根据方法参数自动生成多个参数注释

```typescript
/**
 * 方法描述
 * @param param1 参数描述
 * @param param2 参数描述
 */
```

#### 七、开发注意事项：

- 公共组件请使用OnPush策略，以提高性能
- 加载非全局使用的第三方较大类库，请使用LazyService,参考地图demo
- 后台定义字典前端转义显示时请使用管道方式，参考demo
- 下拉选项列表推荐在前端字典中定义，参考demo
- 搜索条件请使用响应式表单，除input框外，其它条件改变直接调后台，参考demo
- Modal弹窗请使用js方式弹出，以封装逻辑，增加复用性，参考demo
- 组件声明放到COMPONENTS数组中，需要动态创建(如弹窗)的组件放到COMPONENTS_NOROUNT数组中
- dom事件注册推荐使用rxjs的fromEvent，返回可观察对象，pipe里可做更多防抖、节流等操作
- 异步优先使用rxjs,比promise更强大，操作符更多，支持发射多个值，可取消

#### 八、开发流程

1. 开发公共组件
   - 在/src/app/shared/components中新建组件，请使用onpush策略
   - 如果组件需要在响应式表单中使用，请实现ControlValueAccessor接口
2. 开发业务组件
   - 在/src/assets/temp/app-data.json中修改menu节点，在合适位置新增业务菜单
   - 如果是新模块，在/src/app/routes/下新增相应模块，参考demo模块建立模块和路由模块，配置好下级路由，注意路由守卫控制权限
   - 在相应模块下建立业务组件，编写业务逻辑

#### 九、后续优化

- 与前端人员确定常用组件、服务、工具等，提取到跨工程的库@geekymedic/common，并在CHANGELOG.md做好版本记录
- 完善模板工程geekymedic-project，补充更多的公共组件、示例，做好版本变更记录。
- 开发vscode插件，提供代码片段，更方便的生成基于BaseComponent、BaseService的组件、服务。
- 开发form弹窗组件基类
- Swagger自动生成后台接口代码
- 是否考虑日志系统