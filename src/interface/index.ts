export interface RegisterDetail {
  fullName: string;
  password: string;
  phoneNo: string;
  occupation?: string;
  email: string;
}

export interface LoginDetail {
  password: string;
  email: string;
}

export interface StudentDetail {
  detail: string;
  content: string;
}

export type UserRegDetails = {
  full_name: string;
  email: string;
};

export type AdminReg = UserRegDetails & {
  staffid: string;
};

export type StudentReg = UserRegDetails & {
  matno: string;
};
