import { BusinessType } from './cineclub.model';
import { TypeUser } from './person.model';

export interface Gender {
    id?: number;
    name?: string;
}

export interface Person{
    id?: any;
    firstName?: string;
    lastName?: string;
    gender?: Gender;
    numberDni?: string;
    birthdate?: string;
    photo?: string;
    phone?: string;
    email?: string;
    password?: string;
    typeUser?: TypeUser;
}

export interface Customer {
    id?: any;
    person?: Person
}

export interface Owner {
    id?: any;
    Person_id?: Person;
    bankAccount?: string;
}

export interface Business {
  id?: any,
  name?: string;
  socialReason?: string;
  ruc?: string;
  phone?: string;
  email?: string;
  imageLogo?: string;
  imageBanner?: string;
  description?: string;
  dateAttention?: string;
  address?: string;
  referenceAddress?: string;
  owner?: Owner;
  businessType?: BusinessType;
}
