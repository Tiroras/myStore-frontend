import styles from './HeaderProfile.module.scss';
import { Person } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const AnonimUserContent = () => {
  return (
    <div className={styles.headerProfile}>
      <div className={styles.profileButton}>
        <Avatar>
          <Person />
        </Avatar>
      </div>
      <Link href='/auth'>
        <Button>Sign In</Button>
      </Link>
    </div>
  );
};
