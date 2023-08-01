export interface IUpdateUser {
  full_name: string;
  birth_date: string;
  gender: string;
  email: string;
  phone: string;
  cover_letter: string;
}

export interface IUpdateUserRes {
  status?: boolean;
  message?: string;
}

export interface IUserData {
  full_name?: string;
  email?: string;
  birth_date?: string;
  gender?: string;
  phone?: string;
  cover_letter?: string;
}

export interface IProfileDetailsRes {
  status?: boolean;
  user_data?: IUserData;
  message?: string;
}
