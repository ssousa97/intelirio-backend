import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EstadoCacamba } from './schemas/estado-cacambas.schema';
import { Model } from 'mongoose';

@Injectable()
export class ColetaService {

    constructor(@InjectModel('estadoCacamba') private estadoCacambaModel: Model<EstadoCacamba>){}

    async addInfoGarbage(estadoCacambaDTO){
        return await new this.estadoCacambaModel(estadoCacambaDTO).save();
    }

    async getInfoGarbage(estadoCacambaDTO){
        return await this.estadoCacambaModel.find(estadoCacambaDTO);
    }
}
