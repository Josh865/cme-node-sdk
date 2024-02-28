import { CreateCreditTypeRequest } from '../models/CreateCreditTypeRequest.js';
import { CreditTypeDto } from '../models/CreditTypeDto.js';
import { ListCreditTypesResponse } from '../models/ListCreditTypesResponse.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

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

export { CreditTypesService };
