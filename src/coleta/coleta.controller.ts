import { Controller, Post } from '@nestjs/common';
import { ColetaService } from './coleta.service';

@Controller('coleta')
export class ColetaController {

    constructor(private coletaService: ColetaService){}

    @Post('add-info-garbage')
    async addInfoGarbage(estadoCacambaDTO){
        return await this.coletaService.addInfoGarbage(estadoCacambaDTO);
    }

}
