import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { RouteInfo } from './schemas/route-info.schema';
import { LineInfo } from './schemas/line-info.schema'

@Injectable()
export class TransporteService {

    constructor(
        @InjectModel('lineInfo') private lineInfoModel: Model<LineInfo>,
        @InjectModel('routeInfo') private routeInfoModel: Model<RouteInfo>){}

    async addLineInfo(lineInfoDTO){
        return await new this.lineInfoModel(lineInfoDTO).save();
    }

    async addRouteInfo(routeInfoDTO){
        return await new this.routeInfoModel(routeInfoDTO).save();
    }

    async getLineInfo(line){
        return await this.lineInfoModel.find({'line' : line}).exec();
    }

    async getRouteInfo(origin, destination){
        return await this.routeInfoModel.find({'origin' : origin, 'destination' : destination}).exec();
    }
}
