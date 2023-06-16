import styles from './OrderItem.module.scss';
import { IOrder } from '@/types';
import { convertPrice } from '@/utils/convertPrice';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { format } from 'date-fns';
import React from 'react';

interface IProps {
  order: IOrder;
}

export const OrderItem: React.FC<IProps> = ({ order }) => {
  const createdDate = format(new Date(order.createAt), 'dd.MM.yyy');
  const updatedDate = format(new Date(order.updateAt), 'dd.MM.yyy');
  const price = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.orderItem}>
      <span className={styles.info}>
        <span>#{order.id}</span>
        <span>status: {order.status}</span>
        <span className={styles.dates}>
          <span className={styles.date}>created: {createdDate}</span>
          <span className={styles.date}>updated: {updatedDate}</span>
        </span>
        <span>{convertPrice(price)}</span>
      </span>
      <span className={styles.expand}>
        {true ? <ExpandLess /> : <ExpandMore />}
      </span>
    </div>
  );
};
