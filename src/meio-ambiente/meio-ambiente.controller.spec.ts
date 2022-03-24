import { Test, TestingModule } from '@nestjs/testing';
import { MeioAmbienteController } from './meio-ambiente.controller';

describe('MeioAmbienteController', () => {
  let controller: MeioAmbienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeioAmbienteController],
    }).compile();

    controller = module.get<MeioAmbienteController>(MeioAmbienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
