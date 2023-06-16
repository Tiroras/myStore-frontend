import { Layout } from '../shared/Layout';
import { Meta } from '../shared/Meta';
import styles from './OrderCreated.module.scss';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export const OrderCreated = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <Meta title='Order created'>
      <Layout>
        <div className={styles.orderCreated}>
          <div className={styles.message}>Order created!</div>
          <div>
            <Button onClick={handleClick} variant='contained'>
              Return to Main Page
            </Button>
          </div>
        </div>
      </Layout>
    </Meta>
  );
};
