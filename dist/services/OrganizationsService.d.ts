import { CreateOrganizationRequest } from '../models/CreateOrganizationRequest.js';
import { ListOrganizationsReponse } from '../models/ListOrganizationsReponse.js';
import { OrganizationDto } from '../models/OrganizationDto.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../models/MemberDto.js';
import '../models/GlobalRole.js';
import '../models/MembershipRole.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

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

export { OrganizationsService };
