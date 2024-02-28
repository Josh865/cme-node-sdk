import { AxiosInstance, AxiosResponse } from 'axios';
import FormData from 'form-data';
import { ApiRequestOptions } from './ApiRequestOptions.js';
import { ApiResult } from './ApiResult.js';
import { OnCancel, CancelablePromise } from './CancelablePromise.js';
import { OpenAPIConfig } from './OpenAPI.js';

declare const isDefined: <T>(value: T) => value is Exclude<T, null>;
declare const isString: (value: any) => value is string;
declare const isStringWithValue: (value: any) => value is string;
declare const isBlob: (value: any) => value is Blob;
declare const isFormData: (value: any) => value is FormData;
declare const isSuccess: (status: number) => boolean;
declare const base64: (str: string) => string;
declare const getQueryString: (params: Record<string, any>) => string;
declare const getFormData: (options: ApiRequestOptions) => FormData | undefined;
type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
declare const resolve: <T>(options: ApiRequestOptions, resolver?: T | Resolver<T>) => Promise<T>;
declare const getHeaders: (config: OpenAPIConfig, options: ApiRequestOptions, formData?: FormData) => Promise<Record<string, string>>;
declare const getRequestBody: (options: ApiRequestOptions) => any;
declare const sendRequest: <T>(config: OpenAPIConfig, options: ApiRequestOptions, url: string, body: any, formData: FormData | undefined, headers: Record<string, string>, onCancel: OnCancel, axiosClient: AxiosInstance) => Promise<AxiosResponse<T, any>>;
declare const getResponseHeader: (response: AxiosResponse<any>, responseHeader?: string) => string | undefined;
declare const getResponseBody: (response: AxiosResponse<any>) => any;
declare const catchErrorCodes: (options: ApiRequestOptions, result: ApiResult) => void;
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @param axiosClient The axios client instance to use
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
declare const request: <T>(config: OpenAPIConfig, options: ApiRequestOptions, axiosClient?: AxiosInstance) => CancelablePromise<T>;

export { base64, catchErrorCodes, getFormData, getHeaders, getQueryString, getRequestBody, getResponseBody, getResponseHeader, isBlob, isDefined, isFormData, isString, isStringWithValue, isSuccess, request, resolve, sendRequest };
