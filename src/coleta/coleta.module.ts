import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColetaController } from './coleta.controller';
import { ColetaService } from './coleta.service';
import { EstadoCacambaSchema } from './schemas/estado-cacambas.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name : 'estadoCacamba', schema: EstadoCacambaSchema}
    ])
  ],
  controllers: [ColetaController],
  providers: [ColetaService]
})
export class ColetaModule {}
