import styles from './Cart.module.scss';
import { CartItem } from './CartItem';
import { OrderButton } from './OrderButton';
import ordersService from '@/services/orders.service';
import { convertPrice } from '@/utils/convertPrice';
import { useCart } from '@/utils/hooks';
import { useRouter } from 'next/router';
import React from 'react';

export const Cart = () => {
  const { total, items } = useCart();
  const router = useRouter();

  const handleOrder = () => {
    ordersService.postOrder(items);
    router.push('/orderCreated');
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>My cart</div>
      <div className={styles.cartMain}>
        {items.length ? (
          items.map(item => <CartItem item={item} key={item.id} />)
        ) : (
          <div className={styles.empty}>Cart is empty</div>
        )}
      </div>
      <div className={styles.cartFooter}>
        <div>
          <span>Total: </span>
          <span className={styles.totalPrice}>{convertPrice(total)}</span>
        </div>
        <OrderButton handleOrder={handleOrder} />
      </div>
    </div>
  );
};
