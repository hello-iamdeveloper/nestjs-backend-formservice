import { Document } from 'mongoose';

export enum Gender {
  male = 'Male',
  female = 'Female',
  others = 'Others'
}

export enum Title {
  mr = 'Mr',
  mrs = 'Mrs',
  ms = 'Ms'
}

export interface Person extends Document {
  readonly title: Title;
  readonly  firstname: string;
  readonly  lastname: string;
  readonly  gender: Gender;
  readonly  phonenumber: string;
  readonly  email:  string;
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly addressLine3: string;
  readonly state: string;
  readonly  postalcode: string;
  readonly  city: string;
  readonly country: string;
}