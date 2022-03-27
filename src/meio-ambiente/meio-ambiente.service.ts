import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recycling } from './schemas/reciclagem.schema';
import { Model } from 'mongoose';

@Injectable()
export class MeioAmbienteService {

    constructor(@InjectModel('recycling') private recyclingModel: Model<Recycling>){}

    async getRecyclingPlaces(recyclingDTO){
        return await this.recyclingModel.find({name : recyclingDTO.name});
    }

    async addRecyclingPlace(recyclingDTO){
        return await new this.recyclingModel(recyclingDTO).save();
    }


}
