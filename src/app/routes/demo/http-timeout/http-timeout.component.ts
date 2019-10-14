import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import basicmd from 'raw-loader!./basic.md';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-timeout',
  templateUrl: './http-timeout.component.html',
  styles: [],
})
export class HttpTimeoutComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  basicmd;
  url = 'assets/tmp/img/avatar.jpg';
  ngOnInit() {
    this.basicmd = basicmd;
  }
  globalClick() {
    this.http.get(this.url).subscribe(x => {
      this.message.success('请求成功');
    });
  }
  singleClick() {
    this.http.get(this.url, null, { headers: new HttpHeaders({ timeout: '1' }) }).subscribe(x => {
      this.message.success('请求成功');
    });
  }
}
