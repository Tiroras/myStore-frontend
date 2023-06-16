import { OrderItem } from './OrderItem';
import styles from './Orders.module.scss';
import { IOrder } from '@/types';
import React from 'react';

interface IProps {
  orders: IOrder[];
}

export const Orders: React.FC<IProps> = ({ orders }) => {
  return (
    <div>
      <h2 className={styles.header}>My orders</h2>
      <div>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
