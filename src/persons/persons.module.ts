import { Module } from '@nestjs/common';
import { MongoModule } from '../common/databases/mongo/mongo.module';
import { PersonsService } from './persons.service';
import { personsProvider } from './persons.provider';
import { PersonsController } from './persons.controller';


@Module({
  imports: [MongoModule],
  providers: [PersonsService, ...personsProvider],
  controllers: [PersonsController]
})
export class PersonsModule {}
