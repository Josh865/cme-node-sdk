import { BaseHttpRequest } from './core/BaseHttpRequest.js';
import { OpenAPIConfig } from './core/OpenAPI.js';
import { AccmeAccreditationService } from './services/AccmeAccreditationService.js';
import { ActivitiesService } from './services/ActivitiesService.js';
import { ApiKeysService } from './services/ApiKeysService.js';
import { AttendanceService } from './services/AttendanceService.js';
import { CreditTypesService } from './services/CreditTypesService.js';
import { OrganizationsService } from './services/OrganizationsService.js';
import { SessionService } from './services/SessionService.js';
import './core/ApiRequestOptions.js';
import './core/CancelablePromise.js';
import './models/CreateAccreditationProfileRequest.js';
import './models/AccreditationLevel.js';
import './models/ProgramSize.js';
import './models/CriterionDto.js';
import './models/EvidenceDto.js';
import './models/GetProgressReportResponse.js';
import './models/ListCriteriaResponse.js';
import './models/ListEvidenceResponse.js';
import './models/ProfileDto.js';
import './models/ActivityFormatDto.js';
import './models/MeasurementTypeDto.js';
import './models/SaveEvidenceRequest.js';
import './models/UpdateAccreditationProfileRequest.js';
import './models/UpdateEvidenceRequest.js';
import './models/ActivityDto.js';
import './models/ActivityCreditDto.js';
import './models/AddCreditRequest.js';
import './models/CreateActivityRequest.js';
import './models/ActivityCreditRequest.js';
import './models/GetActivityAttendanceResponse.js';
import './models/AttendanceDto.js';
import './models/ListActivitiesResponse.js';
import './models/CreateApiKeyResponse.js';
import './models/ListApiKeysResponse.js';
import './ApiKey-8ibikZEe.js';
import './models/BaseEntity.js';
import './models/MembershipRole.js';
import './models/GlobalRole.js';
import './models/CreateAttendanceRequest.js';
import './models/CreateCreditTypeRequest.js';
import './models/CreditTypeDto.js';
import './models/ListCreditTypesResponse.js';
import './models/CreateOrganizationRequest.js';
import './models/ListOrganizationsReponse.js';
import './models/OrganizationDto.js';
import './models/MemberDto.js';
import './models/CreateSessionRequest.js';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
declare class CmeClient {
    readonly accmeAccreditation: AccmeAccreditationService;
    readonly activities: ActivitiesService;
    readonly apiKeys: ApiKeysService;
    readonly attendance: AttendanceService;
    readonly creditTypes: CreditTypesService;
    readonly organizations: OrganizationsService;
    readonly session: SessionService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}

export { CmeClient };
