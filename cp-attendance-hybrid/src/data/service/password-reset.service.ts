import api from "../datasource/apit"

export const PasswordResetService = {
  async sendEmail(email: string): Promise<string | Error> {
    try {
      const response = await api.post(`password_reset/`, { email, is_mobile: true });
      if (!!response.data) {
        return response.data.data;
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Nao foi possivel enviar o email');
  },
  async resetPassword(password: string, token: string): Promise<string | Error> {
    try {
      const response = await api.post('password_reset/confirm/', { password, token });
      if (!!response.data) {
        return 'Senha redefinida';
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Não foi possível redefinir sua senha')
  }
}