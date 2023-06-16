import styles from './CustomInput.module.scss';
import { Input, InputLabel, InputProps } from '@mui/material';
import cn from 'classnames';
import React, { useId } from 'react';

interface IProps {
  className?: string;
  label?: string;
}

export const CustomInput: React.FC<InputProps & IProps> = ({
  className,
  label,
  ...props
}) => {
  const id = useId();
  return (
    <div className={cn(styles.wrapper, className)}>
      <InputLabel htmlFor={props.id || id}>{label}</InputLabel>
      <Input {...props} id={props.id || id} aria-label={label} />
    </div>
  );
};
