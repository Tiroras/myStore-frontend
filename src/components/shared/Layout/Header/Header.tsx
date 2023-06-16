import styles from './Header.module.scss';
import { AnonimUserContent, UserContent } from './HeaderProfile';
import { SearchForm } from './SearchForm';
import { useAppSelector } from '@/utils/hooks';
import { Store } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  const haveUser = Boolean(useAppSelector(state => state.userReducer.user));
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <div className={styles.logo}>
          <Store fontSize='large' /> My Store
        </div>
      </Link>
      <SearchForm />
      {haveUser ? <UserContent /> : <AnonimUserContent />}
    </header>
  );
};
