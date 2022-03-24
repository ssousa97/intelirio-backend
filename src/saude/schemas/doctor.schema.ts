import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Doctor extends Document{
    @Prop({required : true})
    area: string;
    
    @Prop({required : true})
    medicalCenter: string;

    @Prop()
    name: string;

    @Prop()
    workingTime: string;

    @Prop()
    avaliable: boolean;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);