### CoreModule

只需要在AppModule导入一次

+ const文件夹存放自定义常量,可参考sysConst
+ enums文件夹存放自定义枚举,可参考log-type.enum
+ net文件夹存放http拦截器
   + default.interceptor默认拦截器,基于后端提供的数据返回格式{Code:0,Data:{},Message:''}提供错误处理，成功时只将Data继续往下传
+ i18n服务提供多语言相关，fanyi方法用于ts代码中获取对应值，getDic方法获取字典数组用于下拉
+ startup文件夹存放系统启动服务,用于登录成功之后设置系统、用户、权限、导航信息
+ index.ts方便其它地方引入

#### 备注

推荐公用模块会被其它地方多次引入的都加入index.ts做合并导出，方便其它地方一行代码导入多个。