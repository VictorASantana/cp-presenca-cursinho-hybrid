export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(email: string, password: string): Promise<string | Error>;
  signOut(): void;
};
    
export type AuthData = {
  token: string;
  email: string;
  name: string;
};
