// src/services/CreditTypesService.ts
var CreditTypesService = class {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @returns ListCreditTypesResponse Success
   * @throws ApiError
   */
  listCreditTypes() {
    return this.httpRequest.request({
      method: "GET",
      url: "/credit-types/",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param requestBody
   * @returns CreditTypeDto Success
   * @throws ApiError
   */
  createCreditType(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/credit-types/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @returns CreditTypeDto Success
   * @throws ApiError
   */
  getCreditType(id) {
    return this.httpRequest.request({
      method: "GET",
      url: "/credit-types/{id}",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
};

export { CreditTypesService };
