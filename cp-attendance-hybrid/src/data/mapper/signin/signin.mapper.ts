import { AuthData } from "@src/data/types/auth/auth.type"

export const signInMapper = (signInData): AuthData => {
  return {
    email: signInData.email,
    name: signInData.name,
    token: signInData.access,
  };
};
