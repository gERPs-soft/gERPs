import {CustomerType} from './customer-type';

export class Customer {

  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  nip: string;
  phoneNumber: string;
  email: string;
  customerType: CustomerType;

  constructor() {
  }
}

