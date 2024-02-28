import { SessionService } from './chunk-R33JJW5P.js';
import { AccmeAccreditationService } from './chunk-YBJRBJOM.js';
import { ActivitiesService } from './chunk-HXJ7SPXU.js';
import { ApiKeysService } from './chunk-RKOZN2W6.js';
import { AttendanceService } from './chunk-D22KBTWV.js';
import { CreditTypesService } from './chunk-JNF5NWIQ.js';
import { OrganizationsService } from './chunk-45AY2SFZ.js';
import { AxiosHttpRequest } from './chunk-S7DC3SFS.js';

// src/CmeClient.ts
var CmeClient = class {
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
};

export { CmeClient };
