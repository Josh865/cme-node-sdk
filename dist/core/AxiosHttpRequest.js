import { BaseHttpRequest } from './BaseHttpRequest';
import { request } from './request';

class AxiosHttpRequest extends BaseHttpRequest {
  constructor(config) {
    super(config);
  }
  /**
   * Request method
   * @param options The request options from the service
   * @returns CancelablePromise<T>
   * @throws ApiError
   */
  request(options) {
    return request(this.config, options);
  }
}

export { AxiosHttpRequest };
