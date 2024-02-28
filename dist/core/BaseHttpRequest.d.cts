import { ApiRequestOptions } from './ApiRequestOptions.cjs';
import { CancelablePromise } from './CancelablePromise.cjs';
import { OpenAPIConfig } from './OpenAPI.cjs';

declare abstract class BaseHttpRequest {
    readonly config: OpenAPIConfig;
    constructor(config: OpenAPIConfig);
    abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}

export { BaseHttpRequest };
