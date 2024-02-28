'use strict';

class AccmeAccreditationService {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * @param id
   * @returns CriterionDto Success
   * @throws ApiError
   */
  getAccmeAccreditationCriterion(id) {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/criteria/{id}",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @returns EvidenceDto Success
   * @throws ApiError
   */
  getEvidenceForAccmeAccreditationCriterion(id) {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/criteria/{id}/evidence",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @returns ListCriteriaResponse Success
   * @throws ApiError
   */
  listAccmeAccreditationCriterion() {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/criteria",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @returns EvidenceDto Success
   * @throws ApiError
   */
  getAccmeAccreditationEvidence(id) {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/evidence/{id}",
      path: {
        "id": id
      },
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns EvidenceDto Success
   * @throws ApiError
   */
  updateAccmeAccreditationEvidence(id, requestBody) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/accme-accreditation/evidence/{id}",
      path: {
        "id": id
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @returns ListEvidenceResponse Success
   * @throws ApiError
   */
  listEvidence() {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/evidence",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param requestBody
   * @returns EvidenceDto Success
   * @throws ApiError
   */
  saveAccmeAccreditationEvidence(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/accme-accreditation/evidence",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param requestBody
   * @returns ProfileDto Success
   * @throws ApiError
   */
  saveAccmeAccreditationProfile(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/accme-accreditation/accreditation-profile",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @returns ProfileDto Success
   * @throws ApiError
   */
  getAccmeAccreditationProfile() {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/accreditation-profile",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns ProfileDto Success
   * @throws ApiError
   */
  updateAccmeAccreditationProfile(id, requestBody) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/accme-accreditation/accreditation-profile/{id}",
      path: {
        "id": id
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`
      }
    });
  }
  /**
   * @returns GetProgressReportResponse Success
   * @throws ApiError
   */
  getAccmeAccreditationProgressReport() {
    return this.httpRequest.request({
      method: "GET",
      url: "/accme-accreditation/progress-report",
      errors: {
        401: `Unauthorized`
      }
    });
  }
}

exports.AccmeAccreditationService = AccmeAccreditationService;
