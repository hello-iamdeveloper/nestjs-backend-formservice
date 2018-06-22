import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './interfaces/person.interface';
import { CreatePersonDto } from './dto/create-person-dto';

@Controller('/api/v1/persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService){}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto){
    return await this.personsService.create(createPersonDto);
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<Person> {
    return await this.personsService.findById(id);
  }

  @Put(':id')
  async findByIdAndUpdate(@Param('id') id, updatePersonDto): Promise<Person> {
    return await this.personsService.findByIdAndUpdate(id, updatePersonDto);
  }
}
