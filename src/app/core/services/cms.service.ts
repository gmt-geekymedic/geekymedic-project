import { Injectable } from '@angular/core';
import { LogType, OptType, ObjectType } from '@core/enums';

/**
 * 调用后台补充服务(自动生成上传下载接口不好用，或者其它需求)
 */
@Injectable({ providedIn: 'root' })
export class CmsService {
  constructor() {}
  /**
   * 操作日志(写到控制台，未来可能需要写到后端，用于用户行为数据统计、追溯)
   * @param logType 日志类型
   * @param optType 操作类型
   * @param options 可选项(objId:操作对象id,objName:操作对象名称,objType:操作对象类型,description:描述)
   */
  log(
    logType: LogType,
    optType: OptType,
    options?: { objId?: string; objName?: string; objType?: ObjectType; description?: string },
  ) {
    console.log(logType, optType, options);
  }
}
