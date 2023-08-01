export interface IUser {
  _id: string;
  email: string;
  name: string;
  role: "user" | "admin" | "superadmin";
  hasVerifiedEmail: boolean;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  refreshToken?: string | null;
}

// new
export interface IUserRegister {
  full_name: string;
  email: string;
  position: "teacher" | "student" | "";
  institution_name: string;
  education_level?: string;
  work_time?: "full_time" | "part_time" | "";
  password: string;
  confirm_password: string;
}

export interface IUserRegisterRes {
  status?: boolean;
  message?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginData {
  full_name?: string | null;
  position?: "teacher" | "student" | null;
  token?: string | null;
}

export interface ILoginRes {
  status?: boolean;
  data?: ILoginData;
  message?: string;
}
