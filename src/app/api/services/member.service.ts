import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { BaseService } from '../base-service';

import { CommonResponse } from '../models/CommonResponse';
import { LoginRequest } from '../models/member/LoginRequest';

/**
 * 用户服务
 */
@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService {
  constructor(http: _HttpClient) {
    super(http);
  }
  /**
   * 用户登录
   * @param req 请求参数
   */
  login(req: LoginRequest) {
    return this.http.post<CommonResponse>(`api/applets/v1/yjtstore/login/login?_allow_anonymous=true`, req);
  }
}
