import { useRouter } from 'next/router';
import React, { type FC, type PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from 'types/auth.types';
import { useAuth } from 'utils/hooks';

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children
}) => {
  const { user } = useAuth();
  const router = useRouter();

  if (user && isOnlyUser) {
    return <>{children}</>;
  }

  router.pathname !== '/auth' && router.replace('/auth');
  return null;
};

export default CheckRole;
