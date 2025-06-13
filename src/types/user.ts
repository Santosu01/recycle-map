export type IGender = "male" | "female" | "none";

export interface IUserBasicInfo {
  name: string;
  gender: IGender;
  cpf: string;
  birthdate: string;
  email: string;
}

export interface IUserAddressInfo {
  postalCode: string;
  country: string;
  city: string;
  state: string;
  street: string;
  addressNumber?: string;
  complement?: string;
  neighborhood: string;
}

export interface IUserInfo extends IUserBasicInfo {
  address: IUserAddressInfo;
}

export interface IUser extends IUserInfo {
  password: string;
}

export interface ISignupBasicInfoPayload extends IUserBasicInfo {
  password: string;
}
