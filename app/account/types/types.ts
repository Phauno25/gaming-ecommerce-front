export type EditUserFormValues = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};
export type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
};

// Address
export type UserAddressApiResponse = {
  id: number;
  attributes: UserAddress;
};

export type UserAddress = {
  id: number;
  title: string;
  name: string;
  address: number;
  city: string;
  state: string;
  zip_code: number;
  phone: string;
};

export type EditAddressFormValues = {
  id: number;
  user: number;
} & UserAddress;
