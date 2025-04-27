import { NumberFilterDTO } from 'src/domain/Dtos/WhereDtos/NumberFilterDto';
import { StringFilterDTO } from 'src/domain/Dtos/WhereDtos/StringFilterDto';
import { WhereDTO } from 'src/domain/Dtos/WhereDtos/WhereDto';
import { DateTimeFilter } from 'src/infra/Graphql/generated/prisma/date-time-filter.input';

export abstract class WhereTypeCarePackageDTO extends WhereDTO {
  id?: StringFilterDTO;
  name?: StringFilterDTO;
  createdBy?: StringFilterDTO;
  updatedBy?: StringFilterDTO;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export abstract class SortByTypeCarePackageDTO {
  id?: 'asc' | 'desc';
  name?: 'asc' | 'desc';
  createdBy?: 'asc' | 'desc';
  updatedBy?: 'asc' | 'desc';
  createdAt?: 'asc' | 'desc';
  updatedAt?: 'asc' | 'desc';
}

export abstract class CountTypeCarePackageDTO {
  where?: WhereTypeCarePackageDTO;
}

export abstract class WhereTypeCarePackageRequestDTO {
  where?: WhereTypeCarePackageDTO;
  sort?: SortByTypeCarePackageDTO;
  limit: number;
  offset: number;
}
