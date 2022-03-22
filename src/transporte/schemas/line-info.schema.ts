import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class LineInfo extends Document{
    @Prop({required : true})
    line: string;
    
    @Prop({required : true})
    problemClass: string;

    @Prop({required : true})
    description: string;
}

export const LineInfoSchema = SchemaFactory.createForClass(LineInfo);