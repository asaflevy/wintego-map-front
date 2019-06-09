export interface AuthModel {
  accessToken: string;
  email: string;
  expiresIn: number;
  role: UserTypeModel;
  userId: string;
}

export enum UserTypeModel {
  User = 0,
  Admin = 1
}
