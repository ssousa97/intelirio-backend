import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransporteService } from './transporte.service';

@Controller('transporte')
export class TransporteController {

    constructor(private transporteService: TransporteService){}

    @Get('get-line-info')
    getLineInfo(){
        return this.transporteService.getLineInfo();
    }

    @Get('get-route-info')
    getRouteInfo(){
        return this.transporteService.getRouteInfo();
    }

    @Post('add-route-info')
    addRouteInfo(@Body() routeInfoDTO){
        return this.transporteService.addRouteInfo(routeInfoDTO);
    }

    @Post('add-line-info')
    addLineInfo(@Body() lineInfoDTO){
        return this.transporteService.addLineInfo(lineInfoDTO);
    }

}
