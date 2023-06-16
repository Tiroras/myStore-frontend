import { ProductActions } from '../ProductActions';
import styles from './AddToCart.module.scss';
import { IProduct } from '@/types/products.types';
import { useActions, useCart } from '@/utils/hooks';
import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react';

interface IProps {
  product: IProduct;
}

export const AddToCart: React.FC<IProps> = ({ product }) => {
  const { addToCart } = useActions();
  const { items } = useCart();

  const currentItem = items.find(
    cartItem => cartItem.product.id === product.id
  );

  const addItem = () => {
    addToCart({
      product,
      quantity: 1,
      price: product.price
    });
  };

  return (
    <div className={styles.addToCart}>
      {currentItem ? (
        <ProductActions productId={currentItem.id} />
      ) : (
        <Tooltip title={currentItem ? 'Remove from cart' : 'Add to cart'}>
          <AddShoppingCart onClick={addItem} />
        </Tooltip>
      )}
    </div>
  );
};
