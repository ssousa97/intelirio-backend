import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OcorrenciaSchema } from './schemas/ocorrencias.schema';
import { SegurancaController } from './seguranca.controller';
import { SegurancaService } from './seguranca.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'ocorrencias', schema: OcorrenciaSchema}
    ])
  ],
  controllers: [SegurancaController],
  providers: [SegurancaService]
})
export class SegurancaModule {}
