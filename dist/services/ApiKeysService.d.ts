import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse.js';
import { ListApiKeysResponse } from '../models/ListApiKeysResponse.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../ApiKey-8ibikZEe.js';
import '../models/BaseEntity.js';
import '../models/MembershipRole.js';
import '../models/GlobalRole.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

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

export { ApiKeysService };
