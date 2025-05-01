import { DateTimeFilterDTO } from 'src/domain/Dtos/WhereDtos/DateTimeFilterDto';
import { StringFilterDTO } from 'src/domain/Dtos/WhereDtos/StringFilterDto';
import { WhereDTO } from 'src/domain/Dtos/WhereDtos/WhereDto';

export abstract class WhereChildDTO extends WhereDTO {
  name?: StringFilterDTO;
  lastName?: StringFilterDTO;
  birthdayDate?: DateTimeFilterDTO;
  gender?: StringFilterDTO;
  responsibleId?: StringFilterDTO;
}

export abstract class SortByChildDTO {
  name?: 'asc' | 'desc';
  lastName?: 'asc' | 'desc';
  birthdayDate?: 'asc' | 'desc';
  gender?: 'asc' | 'desc';
  responsibleId?: 'asc' | 'desc';
}

export abstract class CountChildDTO {
  where?: WhereChildDTO;
}

export abstract class WhereChildRequestDTO {
  where?: WhereChildDTO;
  sort?: SortByChildDTO;
  limit: number;
  offset: number;
}
