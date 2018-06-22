import { Gender, Title } from '../interfaces/person.interface';

export class CreatePersonDto {
  readonly title: Title;
  readonly firstname: string;
  readonly lastname: string;
  readonly gender: Gender;
  readonly phonenumber: string;
  readonly email:  string;
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly addressLine3: string;
  readonly state: string;
  readonly postalcode: string;
  readonly city: string;
  readonly country: string;
}