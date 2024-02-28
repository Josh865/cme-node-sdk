'use strict';

var BaseHttpRequest = require('./BaseHttpRequest');
var request = require('./request');

class AxiosHttpRequest extends BaseHttpRequest.BaseHttpRequest {
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
    return request.request(this.config, options);
  }
}

exports.AxiosHttpRequest = AxiosHttpRequest;
