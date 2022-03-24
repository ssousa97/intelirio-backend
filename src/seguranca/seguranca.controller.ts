import { Controller, Get, Post } from '@nestjs/common';
import { SegurancaService } from './seguranca.service';

@Controller('seguranca')
export class SegurancaController {

    constructor(private segurancaService: SegurancaService){}

    @Get('get-occurrences')
    async getOccurrences(occurrenceDTO){
        return await this.segurancaService.getOccurrences(occurrenceDTO);
    }

    @Post('add-occurrences')
    async addOccurrences(occurrenceDTO){
        return await this.segurancaService.addOccurrences(occurrenceDTO);    
    }
}
