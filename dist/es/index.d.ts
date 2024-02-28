type ApiRequestOptions = {
    readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
    readonly url: string;
    readonly path?: Record<string, any>;
    readonly cookies?: Record<string, any>;
    readonly headers?: Record<string, any>;
    readonly query?: Record<string, any>;
    readonly formData?: Record<string, any>;
    readonly body?: any;
    readonly mediaType?: string;
    readonly responseHeader?: string;
    readonly errors?: Record<number, string>;
};

declare class CancelError extends Error {
    constructor(message: string);
    get isCancelled(): boolean;
}
interface OnCancel {
    readonly isResolved: boolean;
    readonly isRejected: boolean;
    readonly isCancelled: boolean;
    (cancelHandler: () => void): void;
}
declare class CancelablePromise<T> implements Promise<T> {
    #private;
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void, onCancel: OnCancel) => void);
    get [Symbol.toStringTag](): string;
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult>;
    finally(onFinally?: (() => void) | null): Promise<T>;
    cancel(): void;
    get isCancelled(): boolean;
}

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;
type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    HEADERS?: Headers | Resolver<Headers> | undefined;
    ENCODE_PATH?: ((path: string) => string) | undefined;
};
declare const OpenAPI: OpenAPIConfig;

declare abstract class BaseHttpRequest {
    readonly config: OpenAPIConfig;
    constructor(config: OpenAPIConfig);
    abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}

declare enum AccreditationLevel {
    PROVISIONAL = "Provisional",
    STANDARD = "Standard",
    COMMENDATION = "Commendation"
}

declare enum ProgramSize {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large",
    EXTRA_LARGE = "ExtraLarge"
}

type CreateAccreditationProfileRequest = {
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypeIds?: Array<number> | null;
    activityFormatIds?: Array<number> | null;
};

type CriterionDto = {
    id: number;
    name: string;
    description: string;
    type: string;
    category: string;
    slug: string;
};

type EvidenceDto = {
    id: number;
    criterionId: number;
    evidence: string;
};

type GetProgressReportResponse = {
    coreCriteriaSatisfied: number;
    coreCriteriaRequired: number;
    commendationCriteriaSatisfied: number;
    commendationCriteriaRequired: number;
    isCoreCriteriaSatfied: boolean;
    isCommendationCriteriaSatisfied: boolean;
    isAchievesOutcomesSatisfied: boolean;
    recommendations: Array<string>;
};

type ListCriteriaResponse = {
    data: Array<CriterionDto>;
};

type ListEvidenceResponse = {
    data: Array<EvidenceDto>;
};

type ActivityFormatDto = {
    id: number;
    name: string;
};

type MeasurementTypeDto = {
    id: number;
    name: string;
};

type ProfileDto = {
    id: number;
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypes?: Array<MeasurementTypeDto> | null;
    activityFormats?: Array<ActivityFormatDto> | null;
};

type SaveEvidenceRequest = {
    criterionId: number;
    evidence: string;
};

type UpdateAccreditationProfileRequest = {
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypeIds?: Array<number> | null;
    activityFormatIds?: Array<number> | null;
};

type UpdateEvidenceRequest = {
    evidence: string;
};

declare class AccmeAccreditationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param id
     * @returns CriterionDto Success
     * @throws ApiError
     */
    getAccmeAccreditationCriterion(id: number): CancelablePromise<CriterionDto>;
    /**
     * @param id
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    getEvidenceForAccmeAccreditationCriterion(id: number): CancelablePromise<EvidenceDto>;
    /**
     * @returns ListCriteriaResponse Success
     * @throws ApiError
     */
    listAccmeAccreditationCriterion(): CancelablePromise<ListCriteriaResponse>;
    /**
     * @param id
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    getAccmeAccreditationEvidence(id: number): CancelablePromise<EvidenceDto>;
    /**
     * @param id
     * @param requestBody
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    updateAccmeAccreditationEvidence(id: number, requestBody: UpdateEvidenceRequest): CancelablePromise<EvidenceDto>;
    /**
     * @returns ListEvidenceResponse Success
     * @throws ApiError
     */
    listEvidence(): CancelablePromise<ListEvidenceResponse>;
    /**
     * @param requestBody
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    saveAccmeAccreditationEvidence(requestBody: SaveEvidenceRequest): CancelablePromise<EvidenceDto>;
    /**
     * @param requestBody
     * @returns ProfileDto Success
     * @throws ApiError
     */
    saveAccmeAccreditationProfile(requestBody: CreateAccreditationProfileRequest): CancelablePromise<ProfileDto>;
    /**
     * @returns ProfileDto Success
     * @throws ApiError
     */
    getAccmeAccreditationProfile(): CancelablePromise<ProfileDto>;
    /**
     * @param id
     * @param requestBody
     * @returns ProfileDto Success
     * @throws ApiError
     */
    updateAccmeAccreditationProfile(id: number, requestBody: UpdateAccreditationProfileRequest): CancelablePromise<ProfileDto>;
    /**
     * @returns GetProgressReportResponse Success
     * @throws ApiError
     */
    getAccmeAccreditationProgressReport(): CancelablePromise<GetProgressReportResponse>;
}

type ActivityCreditDto = {
    id: number;
    creditTypeId: number;
    name: string;
    abbreviation?: string | null;
    credits: number;
};

type ActivityDto = {
    id: number;
    name: string;
    description: string;
    startsAt: string;
    endsAt: string;
    location?: string | null;
    credits?: Array<ActivityCreditDto> | null;
};

type AddCreditRequest = {
    creditTypeId: number;
    creditAmount: number;
};

type ActivityCreditRequest = {
    creditTypeId: number;
    credits: number;
};

type CreateActivityRequest = {
    name: string;
    description: string;
    startsAt: string;
    endsAt: string;
    location?: string | null;
    credits?: Array<ActivityCreditRequest> | null;
};

type AttendanceDto = {
    id: number;
    activityId: number;
    name: string;
    email: string;
};

type GetActivityAttendanceResponse = {
    data: Array<AttendanceDto>;
};

type ListActivitiesResponse = {
    data: Array<ActivityDto>;
};

declare class ActivitiesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ListActivitiesResponse Success
     * @throws ApiError
     */
    listActivities(): CancelablePromise<ListActivitiesResponse>;
    /**
     * @param requestBody
     * @returns ActivityDto Success
     * @throws ApiError
     */
    createActivity(requestBody: CreateActivityRequest): CancelablePromise<ActivityDto>;
    /**
     * @param activityId
     * @returns GetActivityAttendanceResponse Success
     * @throws ApiError
     */
    getActivityAttendance(activityId: number): CancelablePromise<GetActivityAttendanceResponse>;
    /**
     * @param id
     * @returns ActivityDto Success
     * @throws ApiError
     */
    getActivity(id: number): CancelablePromise<ActivityDto>;
    /**
     * @param activityId
     * @param requestBody
     * @returns ActivityDto Success
     * @throws ApiError
     */
    addCreditToActivity(activityId: number, requestBody: AddCreditRequest): CancelablePromise<ActivityDto>;
}

type CreateApiKeyResponse = {
    apiKey: string;
};

type BaseEntity = {
    id: number;
};

declare enum MembershipRole {
    OWNER = "Owner",
    ADMIN = "Admin",
    USER = "User"
}

declare enum GlobalRole {
    SUPER_ADMIN = "SuperAdmin",
    CUSTOMER = "Customer"
}

type User = (BaseEntity & {
    email: string;
    name: string;
    memberships: Array<Membership>;
    role: GlobalRole;
});

type Membership = (BaseEntity & {
    role: MembershipRole;
    userId: number;
    user: User;
    organizationId: number;
    organization: Organization;
});

type Organization = (BaseEntity & {
    name: string;
    organizations: Array<Organization>;
    memberships: Array<Membership>;
    apiKeys: Array<ApiKey>;
});

type ApiKey = {
    id: number;
    key: string;
    description?: string | null;
    organizationId: number;
    organization: Organization;
    createdAt: string;
};

type ListApiKeysResponse = {
    data: Array<ApiKey>;
};

declare class ApiKeysService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ListApiKeysResponse Success
     * @throws ApiError
     */
    listApiKeys(): CancelablePromise<ListApiKeysResponse>;
    /**
     * @returns CreateApiKeyResponse Success
     * @throws ApiError
     */
    createApiKey(): CancelablePromise<CreateApiKeyResponse>;
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    deleteApiKey(id: number): CancelablePromise<any>;
}

type CreateAttendanceRequest = {
    activityId: number;
    name: string;
    email: string;
};

declare class AttendanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns AttendanceDto Success
     * @throws ApiError
     */
    createAttendance(requestBody: CreateAttendanceRequest): CancelablePromise<AttendanceDto>;
}

type CreateCreditTypeRequest = {
    name: string;
    description?: string | null;
    abbreviation?: string | null;
};

type CreditTypeDto = {
    id: number;
    name: string;
    description?: string | null;
    abbreviation?: string | null;
};

type ListCreditTypesResponse = {
    data: Array<CreditTypeDto>;
};

declare class CreditTypesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ListCreditTypesResponse Success
     * @throws ApiError
     */
    listCreditTypes(): CancelablePromise<ListCreditTypesResponse>;
    /**
     * @param requestBody
     * @returns CreditTypeDto Success
     * @throws ApiError
     */
    createCreditType(requestBody: CreateCreditTypeRequest): CancelablePromise<CreditTypeDto>;
    /**
     * @param id
     * @returns CreditTypeDto Success
     * @throws ApiError
     */
    getCreditType(id: number): CancelablePromise<CreditTypeDto>;
}

type CreateOrganizationRequest = {
    name: string;
};

type MemberDto = {
    id: number;
    organizationRole: MembershipRole;
    email: string;
    name: string;
    role: GlobalRole;
};

type OrganizationDto = {
    id: number;
    name: string;
    apiKey?: string | null;
    organizations: Array<OrganizationDto>;
    members: Array<MemberDto>;
};

type ListOrganizationsReponse = {
    data: Array<OrganizationDto>;
};

declare class OrganizationsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ListOrganizationsReponse Success
     * @throws ApiError
     */
    listOrganizations(): CancelablePromise<ListOrganizationsReponse>;
    /**
     * @param requestBody
     * @returns OrganizationDto Success
     * @throws ApiError
     */
    createOrganization(requestBody: CreateOrganizationRequest): CancelablePromise<OrganizationDto>;
    /**
     * @param id
     * @returns OrganizationDto Success
     * @throws ApiError
     */
    getOrganization(id: number): CancelablePromise<OrganizationDto>;
}

type CreateSessionRequest = {
    apiKey: string;
};

declare class SessionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    createSession(requestBody: CreateSessionRequest): CancelablePromise<any>;
}

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

type ApiResult = {
    readonly url: string;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
};

declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}

type DeleteApiKeyRequest = Record<string, any>;

type GetActivityAttendanceRequest = Record<string, any>;

type GetActivityRequest = Record<string, any>;

type GetCreditTypeRequest = Record<string, any>;

type GetCriterionRequest = Record<string, any>;

type GetEvidenceForCriterionRequest = Record<string, any>;

type GetEvidenceRequest = Record<string, any>;

type GetOrganizationRequest = Record<string, any>;

export { AccmeAccreditationService, AccreditationLevel, ActivitiesService, type ActivityCreditDto, type ActivityCreditRequest, type ActivityDto, type ActivityFormatDto, type AddCreditRequest, ApiError, type ApiKey, ApiKeysService, type AttendanceDto, AttendanceService, type BaseEntity, BaseHttpRequest, CancelError, CancelablePromise, CmeClient, type CreateAccreditationProfileRequest, type CreateActivityRequest, type CreateApiKeyResponse, type CreateAttendanceRequest, type CreateCreditTypeRequest, type CreateOrganizationRequest, type CreateSessionRequest, type CreditTypeDto, CreditTypesService, type CriterionDto, type DeleteApiKeyRequest, type EvidenceDto, type GetActivityAttendanceRequest, type GetActivityAttendanceResponse, type GetActivityRequest, type GetCreditTypeRequest, type GetCriterionRequest, type GetEvidenceForCriterionRequest, type GetEvidenceRequest, type GetOrganizationRequest, type GetProgressReportResponse, GlobalRole, type ListActivitiesResponse, type ListApiKeysResponse, type ListCreditTypesResponse, type ListCriteriaResponse, type ListEvidenceResponse, type ListOrganizationsReponse, type MeasurementTypeDto, type MemberDto, type Membership, MembershipRole, OpenAPI, type OpenAPIConfig, type Organization, type OrganizationDto, OrganizationsService, type ProfileDto, ProgramSize, type SaveEvidenceRequest, SessionService, type UpdateAccreditationProfileRequest, type UpdateEvidenceRequest, type User };
