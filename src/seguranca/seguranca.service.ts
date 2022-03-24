import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ocorrencia } from './schemas/ocorrencias.schema';
import { Model } from 'mongoose'

@Injectable()
export class SegurancaService {

    constructor(@InjectModel('ocorrencias') private ocorrenciasModel: Model<Ocorrencia>){}

    async getOccurrences(occurrenceDTO){
        return await this.ocorrenciasModel.find(occurrenceDTO);
    }

    async addOccurrences(occurrenceDTO){
        return await new this.ocorrenciasModel(occurrenceDTO).save();
    }
}
