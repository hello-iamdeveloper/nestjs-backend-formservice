import * as mongoose from 'mongoose';
import { config } from '../../../../config/config';

const database = 'mongodb://' +config.mongoDb.username +':' +config.mongoDb.password +config.mongoDb.host +config.mongoDb.database;

export const mongoProvider = [
    {
      provide: 'DbConnectionToken',
      useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(database),
    },
  ];