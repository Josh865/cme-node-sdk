import { request } from './chunk-KNUP3VQV.js';
import { BaseHttpRequest } from './chunk-S6FHWBEZ.js';

// src/core/AxiosHttpRequest.ts
var AxiosHttpRequest = class extends BaseHttpRequest {
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
};

export { AxiosHttpRequest };
