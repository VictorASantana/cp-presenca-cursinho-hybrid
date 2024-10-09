import { AuthData } from "@src/data/types/auth/auth.type"

export const signInMapper = (signInData): AuthData => {
  return {
    email: signInData.email ?? 'victor_santana012@usp.br',
    name: signInData.name ?? 'Victor Santana',
    token: signInData.access,
  };
};
