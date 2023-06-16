import styles from './ProductActions.module.scss';
import { useActions, useCart } from '@/utils/hooks';
import { Add, Delete, Remove } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react';

interface IProps {
  productId: number;
}

export const ProductActions: React.FC<IProps> = ({ productId }) => {
  const { changeQuantity, removeFromCart } = useActions();
  const { items } = useCart();
  const quantity = items.find(cartItem => cartItem.id === productId)?.quantity;

  const handleMinus = () => {
    quantity &&
      quantity !== 1 &&
      changeQuantity({ id: productId, type: 'minus' });
  };

  const handlePlus = () => {
    changeQuantity({ id: productId, type: 'plus' });
  };

  return (
    <div className={styles.productActions}>
      <div className={styles.productCount}>
        <Remove className={styles.button} onClick={handleMinus} />
        <div>{quantity}</div>
        <Add className={styles.button} onClick={handlePlus} />
      </div>
      <div className={styles.removeWrapper}>
        <Tooltip title='Remove from cart'>
          <Delete
            className={styles.button}
            onClick={() => removeFromCart({ id: productId })}
          />
        </Tooltip>
      </div>
    </div>
  );
};
