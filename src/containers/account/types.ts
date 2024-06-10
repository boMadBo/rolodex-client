export interface IUserValues {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isMale: boolean;
  birthDate: Date;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  token?: string;
  tokenExpiredAt?: Date;
  refreshToken?: string;
  refreshTokenExpiredAt?: Date;
}

export interface IUserUpdateValues {
  firstName?: string;
  lastName?: string;
  avatar?: File | null;
  password?: string;
}

export type TUserCollectionValues = Omit<
  IUserValues,
  'token' | 'tokenExpiredAt' | 'refreshToken' | 'refreshTokenExpiredAt'
>;
