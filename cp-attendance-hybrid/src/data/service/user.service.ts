import api from "../datasource/apit"
import { userMapper } from "../mapper/user/user.mapper";
import { User, UserPhoto } from "../types/user/user.type";

export const UserService = {
  async getUserInfo(): Promise<User | Error> {
    try {
      const response = await api.get('/user/self/');
      if (!!response.data) {
        const userInfo = userMapper(response.data);
        return userInfo;
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Não foi possível encontrar suas informações');
  }, 
  async uploadProfilePhoto(image: UserPhoto, userId: number): Promise<string | Error> {
    const formData = new FormData;
    formData.append('profile_image', {
      uri: image.uri,
      type: image.type,
      name: image.name
    });
    try {
      const response = await api.post(`/user/update_photo/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      if (!!response.data) {
        return 'Imagem carregada com sucesso!';
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Não foi possível carregar a imagem.');
  }
}
