import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeioAmbienteController } from './meio-ambiente.controller';
import { MeioAmbienteService } from './meio-ambiente.service';
import { RecyclingSchema } from './schemas/reciclagem.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'recycling', schema: RecyclingSchema   
    }])
  ],
  controllers: [MeioAmbienteController],
  providers: [MeioAmbienteService]
})
export class MeioAmbienteModule {}
