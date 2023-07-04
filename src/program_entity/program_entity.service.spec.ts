import { Test, TestingModule } from '@nestjs/testing';
import { ProgramEntityService } from './program_entity.service';

describe('ProgramEntityService', () => {
  let service: ProgramEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramEntityService],
    }).compile();

    service = module.get<ProgramEntityService>(ProgramEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
