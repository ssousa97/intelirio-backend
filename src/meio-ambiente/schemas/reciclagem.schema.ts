import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Recycling{

    @Prop()
    location: string;

    @Prop()
    name: string;

    
}

export const RecyclingSchema = SchemaFactory.createForClass(Recycling);