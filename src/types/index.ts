import { ReactNode } from "react";

type SigninType = {
    email: string;
    password: string;
}
type SignupType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type UserType = {
    id?: string;
    email?: string;
    name?: string;
    firstName?: string;
    family_name?: string;
    given_name?: string;
    emailIsVerified?: boolean;
    nickname?: string;
    lastName?: string;
    picture?: string;
    username?: string;
    isEmailVerified?: boolean;
    [key: string]: any;
  }

type AuthContextType = {
    user: UserType | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    authMethod: "jwt" | "session" | null;
    login: (token: string) => void;
    logout: () => void;
    signup: (token: string) => void;
    refreshToken: () => Promise<boolean>;
  }

type AuthProviderProps = {
  children: ReactNode
}
export type { SigninType, SignupType, UserType, AuthContextType, AuthProviderProps };