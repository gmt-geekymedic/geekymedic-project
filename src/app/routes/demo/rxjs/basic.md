### rxjs核心概念

+ Observable 可观察对象，主要方法有subscribe,pipe
+ Observer 观察者，主要方法有next,error,complete
  + 实现类Subscriber
+ Subscription 订阅可观察对象之后返回的对象，用来终止订阅,主要方法有unsubscribe
+ Subject 主题，一种特殊的可观察对象，既是可观察对象，又是观察者，允许多播，与Observable的区别是Subject共享执行环境，Observable每次订阅都会创建新的执行环境
   + BehaviorSubject 保存最后一个值，当有新的观察者订阅主题时，立即发送最后一个值
   + ReplaySubject 类似BehaviorSubject，可设定最大记录多少个值，或者设置一个窗口时间，最长记录多久之前的值
   + AsyncSubject 仅会执行完成后，推送执行环境中的最后一个值

```typescript

```
### Observable创建

### Observable组合

### 常用操作符