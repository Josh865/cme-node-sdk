'use strict';

class OrganizationsService {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @returns ListOrganizationsReponse Success
   * @throws ApiError
   */
  listOrganizations() {
    return this.httpRequest.request({
      method: "GET",
      url: "/organizations/",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param requestBody
   * @returns OrganizationDto Success
   * @throws ApiError
   */
  createOrganization(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/organizations/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @returns OrganizationDto Success
   * @throws ApiError
   */
  getOrganization(id) {
    return this.httpRequest.request({
      method: "GET",
      url: "/organizations/{id}",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
}

exports.OrganizationsService = OrganizationsService;
