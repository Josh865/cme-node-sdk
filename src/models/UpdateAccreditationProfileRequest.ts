/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccreditationLevel } from './AccreditationLevel';
import type { ProgramSize } from './ProgramSize';
export type UpdateAccreditationProfileRequest = {
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypeIds?: Array<number> | null;
    activityFormatIds?: Array<number> | null;
};

