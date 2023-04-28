import { IsEmail, MinLength } from "class-validator";
import { IsEmailNotRegistered } from "../validation-rules/email-not-registered.rule";

export class CreateUserDto {
    @MinLength(4)
    username: string;

    @IsEmail()
    /* @IsEmailNotRegistered() */
    email: string;

    @MinLength(6)
    password: string;
}