export interface IAuthUser {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: string;
  createdAt: string;
}

export interface IAuthTokenPayload {
  user: IAuthUser;
  token: string;
}

export interface IAuthSuccessResponse {
  status: boolean;
  code: number;
  payload: IAuthTokenPayload;
}
