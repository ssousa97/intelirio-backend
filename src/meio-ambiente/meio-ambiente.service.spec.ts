import { Test, TestingModule } from '@nestjs/testing';
import { MeioAmbienteService } from './meio-ambiente.service';

describe('MeioAmbienteService', () => {
  let service: MeioAmbienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeioAmbienteService],
    }).compile();

    service = module.get<MeioAmbienteService>(MeioAmbienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
