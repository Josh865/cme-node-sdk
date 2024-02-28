// src/services/ActivitiesService.ts
var ActivitiesService = class {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @returns ListActivitiesResponse Success
   * @throws ApiError
   */
  listActivities() {
    return this.httpRequest.request({
      method: "GET",
      url: "/activities/",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param requestBody
   * @returns ActivityDto Success
   * @throws ApiError
   */
  createActivity(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/activities/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param activityId
   * @returns GetActivityAttendanceResponse Success
   * @throws ApiError
   */
  getActivityAttendance(activityId) {
    return this.httpRequest.request({
      method: "GET",
      url: "/activities/{activityId}/attendance",
      path: {
        "activityId": activityId
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @returns ActivityDto Success
   * @throws ApiError
   */
  getActivity(id) {
    return this.httpRequest.request({
      method: "GET",
      url: "/activities/{id}",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param activityId
   * @param requestBody
   * @returns ActivityDto Success
   * @throws ApiError
   */
  addCreditToActivity(activityId, requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/activities/{activityId}/credits",
      path: {
        "activityId": activityId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
};

export { ActivitiesService };
