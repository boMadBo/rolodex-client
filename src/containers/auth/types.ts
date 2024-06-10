export interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isMale: string;
  birthDate: string;
  avatar: File | null;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignInResponseValues {
  id: number;
  firstName: string;
  lastName: string;
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: string;
}

export interface IUpdateToken {
  refreshToken: string;
}
