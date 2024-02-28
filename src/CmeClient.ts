/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AccmeAccreditationService } from './services/AccmeAccreditationService';
import { ActivitiesService } from './services/ActivitiesService';
import { ApiKeysService } from './services/ApiKeysService';
import { AttendanceService } from './services/AttendanceService';
import { CreditTypesService } from './services/CreditTypesService';
import { OrganizationsService } from './services/OrganizationsService';
import { SessionService } from './services/SessionService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class CmeClient {
    public readonly accmeAccreditation: AccmeAccreditationService;
    public readonly activities: ActivitiesService;
    public readonly apiKeys: ApiKeysService;
    public readonly attendance: AttendanceService;
    public readonly creditTypes: CreditTypesService;
    public readonly organizations: OrganizationsService;
    public readonly session: SessionService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:5000',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
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

