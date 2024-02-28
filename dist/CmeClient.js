import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AccmeAccreditationService } from './services/AccmeAccreditationService';
import { ActivitiesService } from './services/ActivitiesService';
import { ApiKeysService } from './services/ApiKeysService';
import { AttendanceService } from './services/AttendanceService';
import { CreditTypesService } from './services/CreditTypesService';
import { OrganizationsService } from './services/OrganizationsService';
import { SessionService } from './services/SessionService';

class CmeClient {
  accmeAccreditation;
  activities;
  apiKeys;
  attendance;
  creditTypes;
  organizations;
  session;
  request;
  constructor(config, HttpRequest = AxiosHttpRequest) {
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
    this.accmeAccreditation = new AccmeAccreditationService(this.request);
    this.activities = new ActivitiesService(this.request);
    this.apiKeys = new ApiKeysService(this.request);
    this.attendance = new AttendanceService(this.request);
    this.creditTypes = new CreditTypesService(this.request);
    this.organizations = new OrganizationsService(this.request);
    this.session = new SessionService(this.request);
  }
}

export { CmeClient };
