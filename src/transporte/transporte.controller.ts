import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransporteService } from './transporte.service';

@Controller('transporte')
export class TransporteController {

    constructor(private transporteService: TransporteService){}

    @Get('get-line-info/:line')
    async getLineInfo(@Param('line') line: string){
        return await this.transporteService.getLineInfo(line)
            .catch(error => error.message);
    }

    @Get('get-route-info/:origin/:destination')
    async getRouteInfo(@Param('origin') origin: string, @Param('destination') destination: string){
        return await this.transporteService.getRouteInfo(origin, destination)
            .catch(error => error.message);
    }

    @Post('add-route-info')
    async addRouteInfo(@Body() routeInfoDTO){
        return await this.transporteService.addRouteInfo(routeInfoDTO)
            .catch(error => error.message);
    }

    @Post('add-line-info')
    async addLineInfo(@Body() lineInfoDTO){
        return await this.transporteService.addLineInfo(lineInfoDTO)
            .catch(error => error.message);
    }

}
