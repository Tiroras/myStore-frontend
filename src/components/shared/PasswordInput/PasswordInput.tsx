import { CustomInput } from '../CustomInput';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, InputProps } from '@mui/material';
import React, { useState } from 'react';

export const PasswordInput: React.FC<InputProps> = props => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <CustomInput
      {...props}
      name='password'
      label='Password'
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={e => e.preventDefault()}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
