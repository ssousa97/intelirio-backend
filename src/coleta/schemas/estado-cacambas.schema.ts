import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class EstadoCacamba{
    
    @Prop()
    localizacao: string;

    @Prop()
    descricao: string;

}

export const EstadoCacambaSchema = SchemaFactory.createForClass(EstadoCacamba);