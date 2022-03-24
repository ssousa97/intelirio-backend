import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaudeController } from './saude.controller';
import { SaudeService } from './saude.service';
import { DoctorSchema } from './schemas/doctor.schema';
import { MedicamentSchema } from './schemas/medicament.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'doctor', schema: DoctorSchema},
      {name: 'medicament', schema: MedicamentSchema}
    ])
  ],
  controllers: [SaudeController],
  providers: [SaudeService]
})
export class SaudeModule {}
