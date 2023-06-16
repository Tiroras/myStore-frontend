import styles from './CartItem.module.scss';
import { ProductActions } from '@/components/shared/ProductActions';
import { ICartItem } from '@/types/cart.types';
import { convertPrice } from '@/utils/convertPrice';
import { Tooltip } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IProps {
  item: ICartItem;
}

export const CartItem: React.FC<IProps> = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageWrapper}>
        <Image
          width={80}
          height={80}
          src={item.product.images[0]}
          alt={item.product.name}
        />
      </div>
      <div className={styles.info}>
        <Tooltip title={item.product.name}>
          <div className={styles.name}>{item.product.name}</div>
        </Tooltip>
        <div>{convertPrice(item.price)}</div>
        <ProductActions productId={item.id} />
      </div>
    </div>
  );
};
