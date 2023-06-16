import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { type FC, type PropsWithChildren, useEffect } from 'react';
import { getAccessToken, getRefreshToken } from 'services/auth/auth.helper';
import { TypeComponentAuthFields } from 'types/auth.types';
import { useActions, useAuth } from 'utils/hooks';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children
}) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (!refreshToken && user) logout();
  }, [pathname]);

  return isOnlyUser ? (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
