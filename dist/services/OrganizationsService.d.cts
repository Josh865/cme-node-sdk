import { CreateOrganizationRequest } from '../models/CreateOrganizationRequest.cjs';
import { ListOrganizationsReponse } from '../models/ListOrganizationsReponse.cjs';
import { OrganizationDto } from '../models/OrganizationDto.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../models/MemberDto.cjs';
import '../models/GlobalRole.cjs';
import '../models/MembershipRole.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

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
