import { getRefreshToken, saveToStorage } from './auth.helper';
import { errorCatch, getContentType } from 'api/api.helper';
import { axiosClassic } from 'api/api.interceptor';
import { IResponse } from 'types';
import { IAuthResponse, IEmailPassword } from 'types/user.types';

type AuthMainType = 'login' | 'register';

class AuthService {
  async main(type: AuthMainType, data: IEmailPassword) {
    const response = await axiosClassic<IAuthResponse>({
      url: `/auth/${type}`,
      method: 'POST',
      data
    });
    if (response.data.accessToken) saveToStorage(response.data);
    return response.data;
  }

  async getNewTokens() {
    try {
      const refreshToken = getRefreshToken();

      const response = await axiosClassic.post<
        string,
        IResponse<IAuthResponse>
      >('/auth/login/access-token', { refreshToken });

      if (response.data.accessToken) saveToStorage(response.data);

      return response;
    } catch (error: any) {
      const catchedError = errorCatch(error);
      const isJwtError =
        catchedError === 'jwt expired' ||
        catchedError === 'jwt must be provided';
      if (
        (error?.response?.status === 401 || isJwtError) &&
        error.config &&
        !error.config._isRetry
      ) {
        // removeFromStorage();
      }
    }
  }
}

export default new AuthService();
