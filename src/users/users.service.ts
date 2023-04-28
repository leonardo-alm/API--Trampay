import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
/*     const userExists = this.findByUsername(createUserDto.username)
    if (userExists) {
      return {
        "statusCode": 400,
        "message": [
          "user already exists"
        ],
        "error": "Bad Request"
      }
    } */
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findByUsername(username: string) {
    return await this.usersRepository.findOneBy({ username })
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email })
  }
}
