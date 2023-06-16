import { Cart } from '../../Cart';
import styles from './CartButton.module.scss';
import { useAppSelector, useOutside } from '@/utils/hooks';
import { ShoppingCart } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';

export const CartButton = () => {
  const count = useAppSelector(store => store.cartReducer.items.length);
  const { isVisible, setIsVisible, ref } = useOutside(false);

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div ref={ref}>
      <IconButton className={styles.wrapper} onClick={handleModal}>
        <ShoppingCart htmlColor='white' />
        {count !== 0 && <div className={styles.count}>{count}</div>}
      </IconButton>
      {isVisible && <Cart />}
    </div>
  );
};
