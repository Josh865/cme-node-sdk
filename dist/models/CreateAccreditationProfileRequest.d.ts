import { AccreditationLevel } from './AccreditationLevel.js';
import { ProgramSize } from './ProgramSize.js';

type CreateAccreditationProfileRequest = {
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypeIds?: Array<number> | null;
    activityFormatIds?: Array<number> | null;
};

export type { CreateAccreditationProfileRequest };
