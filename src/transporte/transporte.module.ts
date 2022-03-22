import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LineInfoSchema } from './schemas/line-info.schema';
import { RouteInfoSchema } from './schemas/route-info.schema';
import { TransporteController } from './transporte.controller';
import { TransporteService } from './transporte.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name : 'lineInfo', schema: LineInfoSchema},
            {name : 'routeInfo', schema: RouteInfoSchema}
        ]),
    ],
    controllers: [TransporteController],
    providers: [TransporteService],
})
export class TransporteModule {} 
