import { TestingModule, Test } from '@nestjs/testing';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { CountCarePackageScheduleUseCase } from '../CountCarePackageScheduleUseCase';

describe('CountCarePackageScheduleUseCase', () => {
  let countCarePackageScheduleUseCase: CountCarePackageScheduleUseCase;
  let carePackageScheduleRepositoryMock: jest.Mocked<CarePackageScheduleRepository>;

  beforeEach(async () => {
    carePackageScheduleRepositoryMock = {
      getCarePackageSchedule: jest.fn(),
      createCarePackageSchedule: jest.fn(),
      updateCarePackageSchedule: jest.fn(),
      countCarePackageSchedules: jest.fn(),
      getAllCarePackageSchedules: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountCarePackageScheduleUseCase,
        {
          provide: CarePackageScheduleRepository,
          useValue: carePackageScheduleRepositoryMock,
        },
      ],
    }).compile();

    countCarePackageScheduleUseCase =
      module.get<CountCarePackageScheduleUseCase>(
        CountCarePackageScheduleUseCase,
      );
  });

  it('should be defined', () => {
    expect(countCarePackageScheduleUseCase).toBeDefined();
  });

  it('should count care package items', async () => {
    const mockCount = 5;
    carePackageScheduleRepositoryMock.countCarePackageSchedules.mockResolvedValue(
      mockCount,
    );

    const result = await countCarePackageScheduleUseCase.execute({});

    expect(result).toEqual(mockCount);
    expect(
      carePackageScheduleRepositoryMock.countCarePackageSchedules,
    ).toHaveBeenCalledWith({});
  });
});
