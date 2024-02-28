'use strict';

class ApiKeysService {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @returns ListApiKeysResponse Success
   * @throws ApiError
   */
  listApiKeys() {
    return this.httpRequest.request({
      method: "GET",
      url: "/api-keys",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @returns CreateApiKeyResponse Success
   * @throws ApiError
   */
  createApiKey() {
    return this.httpRequest.request({
      method: "POST",
      url: "/api-keys",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  deleteApiKey(id) {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/api-keys/{id}",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
}

exports.ApiKeysService = ApiKeysService;
