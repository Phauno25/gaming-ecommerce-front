export type RegisterFormValues = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

export type LoginFormValues = {
  identifier: string;
  password: string;
};
export type AuthUser = {
  token: string;
  expiry: number;
  id: number;
  username: string;
  email: string;
  lastName: string;
  firstName: string;
  createdAt: Date;
};
export type AuthType = {
  user: AuthUser | null | undefined;
};
