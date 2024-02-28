/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccreditationProfileRequest } from '../models/CreateAccreditationProfileRequest';
import type { CriterionDto } from '../models/CriterionDto';
import type { EvidenceDto } from '../models/EvidenceDto';
import type { GetProgressReportResponse } from '../models/GetProgressReportResponse';
import type { ListCriteriaResponse } from '../models/ListCriteriaResponse';
import type { ListEvidenceResponse } from '../models/ListEvidenceResponse';
import type { ProfileDto } from '../models/ProfileDto';
import type { SaveEvidenceRequest } from '../models/SaveEvidenceRequest';
import type { UpdateAccreditationProfileRequest } from '../models/UpdateAccreditationProfileRequest';
import type { UpdateEvidenceRequest } from '../models/UpdateEvidenceRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccmeAccreditationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param id
     * @returns CriterionDto Success
     * @throws ApiError
     */
    public getAccmeAccreditationCriterion(
        id: number,
    ): CancelablePromise<CriterionDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/criteria/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    public getEvidenceForAccmeAccreditationCriterion(
        id: number,
    ): CancelablePromise<EvidenceDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/criteria/{id}/evidence',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns ListCriteriaResponse Success
     * @throws ApiError
     */
    public listAccmeAccreditationCriterion(): CancelablePromise<ListCriteriaResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/criteria',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    public getAccmeAccreditationEvidence(
        id: number,
    ): CancelablePromise<EvidenceDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/evidence/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    public updateAccmeAccreditationEvidence(
        id: number,
        requestBody: UpdateEvidenceRequest,
    ): CancelablePromise<EvidenceDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accme-accreditation/evidence/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns ListEvidenceResponse Success
     * @throws ApiError
     */
    public listEvidence(): CancelablePromise<ListEvidenceResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/evidence',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    public saveAccmeAccreditationEvidence(
        requestBody: SaveEvidenceRequest,
    ): CancelablePromise<EvidenceDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accme-accreditation/evidence',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ProfileDto Success
     * @throws ApiError
     */
    public saveAccmeAccreditationProfile(
        requestBody: CreateAccreditationProfileRequest,
    ): CancelablePromise<ProfileDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accme-accreditation/accreditation-profile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns ProfileDto Success
     * @throws ApiError
     */
    public getAccmeAccreditationProfile(): CancelablePromise<ProfileDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/accreditation-profile',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ProfileDto Success
     * @throws ApiError
     */
    public updateAccmeAccreditationProfile(
        id: number,
        requestBody: UpdateAccreditationProfileRequest,
    ): CancelablePromise<ProfileDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accme-accreditation/accreditation-profile/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns GetProgressReportResponse Success
     * @throws ApiError
     */
    public getAccmeAccreditationProgressReport(): CancelablePromise<GetProgressReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accme-accreditation/progress-report',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
