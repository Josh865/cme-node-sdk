/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganizationRequest } from '../models/CreateOrganizationRequest';
import type { ListOrganizationsReponse } from '../models/ListOrganizationsReponse';
import type { OrganizationDto } from '../models/OrganizationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ListOrganizationsReponse Success
     * @throws ApiError
     */
    public listOrganizations(): CancelablePromise<ListOrganizationsReponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns OrganizationDto Success
     * @throws ApiError
     */
    public createOrganization(
        requestBody: CreateOrganizationRequest,
    ): CancelablePromise<OrganizationDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @returns OrganizationDto Success
     * @throws ApiError
     */
    public getOrganization(
        id: number,
    ): CancelablePromise<OrganizationDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
