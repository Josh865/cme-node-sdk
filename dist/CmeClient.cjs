'use strict';

var AxiosHttpRequest = require('./core/AxiosHttpRequest');
var AccmeAccreditationService = require('./services/AccmeAccreditationService');
var ActivitiesService = require('./services/ActivitiesService');
var ApiKeysService = require('./services/ApiKeysService');
var AttendanceService = require('./services/AttendanceService');
var CreditTypesService = require('./services/CreditTypesService');
var OrganizationsService = require('./services/OrganizationsService');
var SessionService = require('./services/SessionService');

class CmeClient {
  accmeAccreditation;
  activities;
  apiKeys;
  attendance;
  creditTypes;
  organizations;
  session;
  request;
  constructor(config, HttpRequest = AxiosHttpRequest.AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "http://localhost:5000",
      VERSION: config?.VERSION ?? "1.0.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH
    });
    this.accmeAccreditation = new AccmeAccreditationService.AccmeAccreditationService(this.request);
    this.activities = new ActivitiesService.ActivitiesService(this.request);
    this.apiKeys = new ApiKeysService.ApiKeysService(this.request);
    this.attendance = new AttendanceService.AttendanceService(this.request);
    this.creditTypes = new CreditTypesService.CreditTypesService(this.request);
    this.organizations = new OrganizationsService.OrganizationsService(this.request);
    this.session = new SessionService.SessionService(this.request);
  }
}

exports.CmeClient = CmeClient;
