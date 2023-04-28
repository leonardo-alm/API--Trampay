import { IsNotEmpty, IsDateString } from "class-validator";

export class CreateClientDto {
    @IsNotEmpty()
    document: string;

    @IsNotEmpty()
    balance: number;

    @IsNotEmpty()
    @IsDateString()
    date: string;
}
