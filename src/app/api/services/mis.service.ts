/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BaseService } from '../base-service';

import { Org } from '../models/mis/org';

/**
 * 信息服务
 */
@Injectable()
export class MisService extends BaseService {
  constructor(http: _HttpClient) {
    super(http);
  }

  /**
   * @param entity entity
   * @return OK
   */
  orgSave(entity: Org): Observable<Org> {
    return this.http.post<any>(`/api/v1/mis/org`, entity).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Org = null;
        _body = _resp.body as Org;
        return _body;
      }),
    );
  }

  /**
   * @return OK
   */
  orgAll(): Observable<Array<Org>> {
    return this.http.get<any>(`/api/v1/mis/org/all`).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Array<Org> = null;
        _body = _resp.body as Array<Org>;
        return _body;
      }),
    );
  }

  /**
   * @param id id
   * @return OK
   */
  orgById(id: string): Observable<Org> {
    return this.http.get<any>(`/api/v1/mis/org/${id}`).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Org = null;
        _body = _resp.body as Org;
        return _body;
      }),
    );
  }

  /**
   * @param id id
   * @return OK
   */
  orgDeleteById(id: string): Observable<boolean> {
    return this.http.delete<any>(`/api/v1/mis/org/${id}`).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: boolean = null;
        _body = _resp.body == 'true';
        return _body;
      }),
    );
  }
}
