/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCreditTypeRequest } from '../models/CreateCreditTypeRequest';
import type { CreditTypeDto } from '../models/CreditTypeDto';
import type { ListCreditTypesResponse } from '../models/ListCreditTypesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CreditTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ListCreditTypesResponse Success
     * @throws ApiError
     */
    public listCreditTypes(): CancelablePromise<ListCreditTypesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/credit-types/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns CreditTypeDto Success
     * @throws ApiError
     */
    public createCreditType(
        requestBody: CreateCreditTypeRequest,
    ): CancelablePromise<CreditTypeDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/credit-types/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @returns CreditTypeDto Success
     * @throws ApiError
     */
    public getCreditType(
        id: number,
    ): CancelablePromise<CreditTypeDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/credit-types/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
