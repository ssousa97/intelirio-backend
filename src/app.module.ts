import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransporteModule } from './transporte/transporte.module';
import { SaudeModule } from './saude/saude.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { ColetaModule } from './coleta/coleta.module';
import { MeioAmbienteModule } from './meio-ambiente/meio-ambiente.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:pass@localhost:27017/'),
    TransporteModule,
    SaudeModule,
    SegurancaModule,
    ColetaModule,
    MeioAmbienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
