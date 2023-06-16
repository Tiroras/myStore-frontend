import { Layout } from '../shared/Layout';
import styles from './Auth.module.scss';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { useAuthRedirect } from '@/utils/hooks';
import { Meta } from 'components/shared/Meta';
import React, { useState } from 'react';

type WindowType = 'signIn' | 'signUp';

export const Auth: React.FC = () => {
  useAuthRedirect();
  const [currentWindow, setCurrentWindow] = useState<WindowType>('signIn');

  const toRegister = () => setCurrentWindow('signUp');
  const toLogin = () => setCurrentWindow('signIn');

  const renderWindow = () => {
    switch (currentWindow) {
      case 'signIn':
        return <SignIn toRegister={toRegister} />;
      case 'signUp':
        return <SignUp toLogin={toLogin} />;
      default:
        return null;
    }
  };

  return (
    <Meta title='Auth'>
      <Layout>
        <div className={styles.auth}>
          <div className={styles.content}>{renderWindow()}</div>
        </div>
      </Layout>
    </Meta>
  );
};
