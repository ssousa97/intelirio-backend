import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class RouteInfo extends Document{
    @Prop({required : true})
    origin: string;
    
    @Prop({required : true})
    destination: string;

    @Prop({required : true})
    description: string;

    @Prop({required : true})
    rating: number;
}


export const RouteInfoSchema = SchemaFactory.createForClass(RouteInfo)