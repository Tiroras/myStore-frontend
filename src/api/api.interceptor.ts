import { errorCatch, getContentType } from './api.helper';
import axios from 'axios';
import { getAccessToken, removeFromStorage } from 'services/auth/auth.helper';
import authService from 'services/auth/auth.service';

export const axiosClassic = axios.create({
  baseURL: process.env.serverName,
  headers: getContentType()
});

export const instance = axios.create({
  baseURL: process.env.serverName,
  headers: getContentType()
});

instance.interceptors.request.use(config => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;
    const catchedError = errorCatch(error);
    const isJwtError =
      catchedError === 'jwt expired' || catchedError === 'jwt must be provided';
    if (
      (error?.response?.status === 401 || isJwtError) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          removeFromStorage();
        }
      }
    }
  }
);
