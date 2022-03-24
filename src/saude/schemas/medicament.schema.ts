import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Medicament extends Document{
    @Prop({required : true})
    name: string;
    
    @Prop({required : true})
    medicalCenter: string;

    @Prop()
    avaliable: boolean;
}

export const MedicamentSchema = SchemaFactory.createForClass(Medicament);