import { createContext, useState, ReactNode, useEffect } from "react";
import supabase from "../lib/supabase";
interface AuthContextValue {
  handleStudentSignup: (
    fullname: string,
    email: string,
    matno: string,
    password: string
  ) => {};
  handleAdminSignup: (
    fullname: string,
    email: string,
    staffid: string,
    password: string
  ) => {};
}
const initialValue = {
  handleStudentSignup: async () => {},
  handleAdminSignup: async () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const handleStudentSignup = async (
    fullname: string,
    email: string,
    matno: string,
    password: string
  ) => {
    const {
      data: { user },
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullname,
          matno: matno,
        },
      },
    });
    if (user) {
      try {
        // Updates the user details in the database
        const { error } = await supabase.from("profiles").upsert({
          id: user.id,
          full_name: fullname,
          matno: matno,
          email: email,
        });

        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleAdminSignup = async (
    fullname: string,
    email: string,
    staffid: string,
    password: string
  ) => {
    const {
      data: { user },
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullname,
          staffid: staffid,
        },
      },
    });
    if (user) {
      try {
        // Updates the user details in the database
        const { error } = await supabase.from("profiles").upsert({
          id: user.id,
          full_name: fullname,
          staffid: staffid,
          email: email,
        });

        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ handleAdminSignup, handleStudentSignup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
