import { NumberFilterDTO } from 'src/domain/Dtos/WhereDtos/NumberFilterDto';
import { WhereDTO } from 'src/domain/Dtos/WhereDtos/WhereDto';
import { DateTimeFilter } from 'src/infra/Graphql/generated/prisma/date-time-filter.input';

export abstract class WhereCarePackageScheduleDTO extends WhereDTO {
  deliveryDate?: DateTimeFilter;
  carePackageCount?: NumberFilterDTO;
}

export abstract class SortByCarePackageScheduleDTO {
  deliveryDate?: 'asc' | 'desc';
  carePackageCount?: 'asc' | 'desc';
}

export abstract class CountCarePackageScheduleDTO {
  where?: WhereCarePackageScheduleDTO;
}

export abstract class WhereCarePackageScheduleRequestDTO {
  where?: WhereCarePackageScheduleDTO;
  sort?: SortByCarePackageScheduleDTO;
  limit: number;
  offset: number;
}
