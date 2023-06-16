import styles from './OderButton.module.scss';
import { useCart } from '@/utils/hooks';
import { Button } from '@mui/material';
import cn from 'classnames';
import React from 'react';

interface IProps {
  handleOrder: () => void;
}

export const OrderButton: React.FC<IProps> = ({ handleOrder }) => {
  const { items } = useCart();
  const haveItems = items.length !== 0;

  const handleClick = () => {
    haveItems && handleOrder();
  };

  return (
    <div className={cn(styles.order, !haveItems && styles.disabled)}>
      <Button onClick={handleClick} variant='contained'>
        Order
      </Button>
    </div>
  );
};
