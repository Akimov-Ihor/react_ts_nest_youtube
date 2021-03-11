export interface UserDataINF{
  name: string;
  email: string;
  picture: string;
}

export interface UserINF {
  userData: UserDataINF;
  isVerifyingAuth: boolean;
}
