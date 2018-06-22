import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Person } from './interfaces/person.interface';
import { CreatePersonDto } from './dto/create-person-dto';
import { UpdatePersonDto } from './dto/update-person-dto';


@Injectable()
export class PersonsService {
  constructor(@Inject('PersonsModelToken') private readonly personsModel: Model<Person>){}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const newPerson = new this.personsModel(createPersonDto);
    try{
      return await newPerson.save();
    } catch( err ) {
      return err;
    }
  }

  async findById(id): Promise<Person> {
    try {
      return await this.personsModel.findById(id).exec();
    } catch ( err ) {
      return err;
    }
  }

  async findByIdAndUpdate(id, updatePersonDto: UpdatePersonDto): Promise<Person> {
    console.log('id = ' +id)
    try{
      return await this.personsModel.findByIdAndUpdate(id,updatePersonDto).exec();
    } catch ( err ) {
      return err;
    }
  }
}
