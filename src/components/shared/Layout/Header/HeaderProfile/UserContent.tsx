import { CartButton } from './CartButton';
import styles from './HeaderProfile.module.scss';
import { Favorite, Person } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useProfile } from 'utils/hooks';

export const UserContent = () => {
  const { profile } = useProfile();
  return (
    <div className={styles.headerProfile}>
      <Link href='/favorites'>
        <IconButton>
          <Favorite htmlColor='white' />
        </IconButton>
      </Link>
      <CartButton />
      <div className={styles.profileButton}>
        <Avatar>
          {profile?.avatarPath ? (
            <Image
              src={profile.avatarPath}
              alt={profile.name}
              height={42}
              width={42}
            />
          ) : (
            <Person />
          )}
        </Avatar>
      </div>
    </div>
  );
};
