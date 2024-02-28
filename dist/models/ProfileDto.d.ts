import { AccreditationLevel } from './AccreditationLevel.js';
import { ActivityFormatDto } from './ActivityFormatDto.js';
import { MeasurementTypeDto } from './MeasurementTypeDto.js';
import { ProgramSize } from './ProgramSize.js';

type ProfileDto = {
    id: number;
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypes?: Array<MeasurementTypeDto> | null;
    activityFormats?: Array<ActivityFormatDto> | null;
};

export type { ProfileDto };
