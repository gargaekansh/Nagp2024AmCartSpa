export interface User {
  personalInformation: PersonalInfomation;
  addressDetail: AddressDetail;
}

export interface PersonalInfomation {
  name: string;
  email: string;
  phone: number;
}

export interface AddressDetail {
  streetAddress: string;
  city: string;
  zipCode: number;
  country: string;
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  userName: string;
  provider: string;
}

export interface RegisterUser {
  mobileNumber: string;
  email: string;
  gender:string;
  password: string;
}
