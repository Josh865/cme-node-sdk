// src/services/SessionService.ts
var SessionService = class {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  createSession(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/create-session",
      body: requestBody,
      mediaType: "application/json"
    });
  }
};

export { SessionService };
