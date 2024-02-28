import { CreateCreditTypeRequest } from '../models/CreateCreditTypeRequest.cjs';
import { CreditTypeDto } from '../models/CreditTypeDto.cjs';
import { ListCreditTypesResponse } from '../models/ListCreditTypesResponse.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

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
