import api from "../datasource/apit";
import { signInMapper } from "../mapper/signin/signin.mapper";
import { AuthData } from "../types/auth/auth.type";

export const AuthService = {
  async signIn(email: string, password: string): Promise<AuthData | Error> {
    try {
      const response = await api.post('/token/', { email, password });
      if (!!response.data) {
        const mappedResponse = signInMapper(response.data);
        return mappedResponse;
      }
    } catch (err) {
      console.log(err);
    }
    return new Error("Falha ao fazer login.");
  }
}