'use strict';

// src/services/AttendanceService.ts
var AttendanceService = class {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @param requestBody
   * @returns AttendanceDto Success
   * @throws ApiError
   */
  createAttendance(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/attendance/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
};

exports.AttendanceService = AttendanceService;
