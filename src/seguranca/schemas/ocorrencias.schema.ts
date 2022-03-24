import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Ocorrencia extends Document{
    
    @Prop()
    coordinates: number[];

    @Prop()
    localizacao: string;

    @Prop()
    description: string;

    @Prop()
    exactTime: string;
}

export const OcorrenciaSchema = SchemaFactory.createForClass(Ocorrencia);