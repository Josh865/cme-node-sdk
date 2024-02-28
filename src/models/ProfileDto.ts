/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccreditationLevel } from './AccreditationLevel';
import type { ActivityFormatDto } from './ActivityFormatDto';
import type { MeasurementTypeDto } from './MeasurementTypeDto';
import type { ProgramSize } from './ProgramSize';
export type ProfileDto = {
    id: number;
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypes?: Array<MeasurementTypeDto> | null;
    activityFormats?: Array<ActivityFormatDto> | null;
};

