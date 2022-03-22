import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransporteModule } from './transporte/transporte.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:pass@localhost:27017/'),
    TransporteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
