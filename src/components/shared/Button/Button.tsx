import styles from './Button.module.scss';
import { ButtonProps } from '@mui/material';
import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

interface IProps extends ButtonProps {
  className?: string;
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Button {...props}>{children}</Button>
    </div>
  );
};
