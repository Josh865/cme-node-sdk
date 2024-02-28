/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateApiKeyResponse } from '../models/CreateApiKeyResponse';
import type { ListApiKeysResponse } from '../models/ListApiKeysResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApiKeysService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ListApiKeysResponse Success
     * @throws ApiError
     */
    public listApiKeys(): CancelablePromise<ListApiKeysResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api-keys',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns CreateApiKeyResponse Success
     * @throws ApiError
     */
    public createApiKey(): CancelablePromise<CreateApiKeyResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api-keys',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiKey(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api-keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
