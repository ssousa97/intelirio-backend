import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor } from './schemas/doctor.schema';
import { Medicament } from './schemas/medicament.schema';

@Injectable()
export class SaudeService {

    constructor(
        @InjectModel('doctor') private doctorModel: Model<Doctor>,
        @InjectModel('medicament') private medicamentModel: Model<Medicament>){}


    async getAllDoctors(doctorsDTO){
        return await this.doctorModel.find({area: doctorsDTO.area, medicalCenter: doctorsDTO.medicalCenter}).exec();
    }

    async getMedicamentsAndVaccines(medicamentsVaccinesDTO){
        return await this.medicamentModel.find({name: medicamentsVaccinesDTO.name, medicalCenter: medicamentsVaccinesDTO.medicalCenter}).exec();
    }
}
