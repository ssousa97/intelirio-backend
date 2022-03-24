import { Module } from '@nestjs/common';
import { ColetaController } from './coleta.controller';
import { ColetaService } from './coleta.service';

@Module({
  controllers: [ColetaController],
  providers: [ColetaService]
})
export class ColetaModule {}
