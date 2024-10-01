import api from "../datasource/apit"
import { userMapper } from "../mapper/user/user.mapper";

export const UserRepository = {
  async getUser(): Promise<User |Error> {
    try {
      const response = await api.get('/student/1');
      if (!!response.data) {
        const mappedResponse = userMapper(response.data);
        return mappedResponse;
      }
    } catch (err) {
      console.log(err);
    }
    return new Error('Não foi possível encontrar o usuário');
  }
}
