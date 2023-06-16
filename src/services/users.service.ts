import { instance } from 'api/api.interceptor';
import { IFullUser, IUpdateUser } from 'types/user.types';

class UserService {
  getProfile() {
    return instance.get<IFullUser>('/users/profile');
  }

  getById(id: number) {
    return instance.get(`/users/${id}`);
  }

  update(data: IUpdateUser) {
    return instance.put('/user/update', { data });
  }

  toggleFavorites(productId: number) {
    return instance.patch(`/users/profile/favorites/${productId}`);
  }
}

export default new UserService();
