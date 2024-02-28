import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse.cjs';
import { ListApiKeysResponse } from '../models/ListApiKeysResponse.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../ApiKey-vx9jVvlI.cjs';
import '../models/BaseEntity.cjs';
import '../models/MembershipRole.cjs';
import '../models/GlobalRole.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

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
