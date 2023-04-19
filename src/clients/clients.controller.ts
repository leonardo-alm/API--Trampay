import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }
    @Post()
    createClient(@Body() createClientDto: CreateClientDto[]) {
      return this.clientsService.create(createClientDto);
    }
  
    @Get()
    findAllclients() {
      return this.clientsService.findAll();
    }
}
