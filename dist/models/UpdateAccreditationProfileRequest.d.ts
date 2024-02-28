import { AccreditationLevel } from './AccreditationLevel.js';
import { ProgramSize } from './ProgramSize.js';

type UpdateAccreditationProfileRequest = {
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypeIds?: Array<number> | null;
    activityFormatIds?: Array<number> | null;
};

export type { UpdateAccreditationProfileRequest };
