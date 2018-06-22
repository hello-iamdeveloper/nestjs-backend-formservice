import { Connection } from 'mongoose';
import { personSchema } from './schemas/persons.schema';

export const personsProvider = [
  {
    provide: 'PersonsModelToken',
    useFactory: ( connection: Connection ) => connection.model('Person', personSchema),
    inject: ['DbConnectionToken'],
  }
]