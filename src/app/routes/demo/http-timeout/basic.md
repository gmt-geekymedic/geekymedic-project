### http请求超时

+ 全局配置

```typescript

// 在app.module.ts中适当位置加入拦截器配置如下，DEFAULT_TIMEOUT为全局配置超时时间
// #region Http Interceptors
import { TimeoutInterceptor, DEFAULT_TIMEOUT } from '@geekymedic/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleInterceptor } from '@delon/auth';
import { DefaultInterceptor } from '@core/net/default.interceptor';
const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
  { provide: DEFAULT_TIMEOUT, useValue: 30000 },
];
// #endregion

// 应用时直接请求相应url即可
this.http.get(url).subscribe();

```

+ 单个配置

```typescript

// 应用时在http头中传入timeout参数
this.http.get(url, null, { headers: new HttpHeaders({ timeout: '1' }) }).subscribe();

```
