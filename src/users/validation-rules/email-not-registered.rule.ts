import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@ValidatorConstraint({ async: true })
export class IsEmailNotRegisteredConstraint implements ValidatorConstraintInterface {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) { }

    async validate(email: string, args: ValidationArguments) {
        return this.usersRepository.findOneBy({ email }).then(emailFound => {
            if (emailFound) {
                console.log(emailFound, 'found? return false')
                return false;
            }
            console.log(emailFound, 'found? return true')
            return true;
        });
    }
    defaultMessage() {
        return 'email already registered';
    }
}

export function IsEmailNotRegistered(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: 'IsEmailNotRegistered',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailNotRegisteredConstraint,
        });
    };
}