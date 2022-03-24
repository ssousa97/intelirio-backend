import { Module } from '@nestjs/common';
import { MeioAmbienteController } from './meio-ambiente.controller';
import { MeioAmbienteService } from './meio-ambiente.service';

@Module({
  controllers: [MeioAmbienteController],
  providers: [MeioAmbienteService]
})
export class MeioAmbienteModule {}
