import api from "../datasource/apit"
import { userMapper } from "../mapper/user/user.mapper";
import { User } from "../types/user/user.type";

export const UserService = {
  async getUserInfo(): Promise<User | Error> {
    try {
      const response = await api.get('/user/self');
      if (!!response.data) {
        const userInfo = userMapper(response.data);
        return userInfo;
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Não foi possível encontrar suas informações');
  }
}
