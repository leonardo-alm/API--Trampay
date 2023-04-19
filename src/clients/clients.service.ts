import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private clientsRepository: Repository<Client>,
    ) { }

    async create(createClientDto: CreateClientDto[]) {
        const clients = this.clientsRepository.create(createClientDto);
        return await this.clientsRepository.save(clients);
    }

    async findAll() {
        return await this.clientsRepository.find();
    }
}
