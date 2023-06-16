import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from 'types/user.types';
import { getLocalStorage } from 'utils/localStorage';

export enum Tokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const getRefreshToken = () => {
  const refreshToken = Cookies.get(Tokens.REFRESH_TOKEN);
  return refreshToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(getLocalStorage('user') || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(Tokens.ACCESS_TOKEN, data.accessToken, {
    sameSite: 'strict',
    secure: true
  });
  Cookies.set(Tokens.REFRESH_TOKEN, data.refreshToken, {
    sameSite: 'strict',
    secure: true
  });
};

export const removeFromStorage = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN);
  Cookies.remove(Tokens.REFRESH_TOKEN);
  localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
