import styles from './SearchForm.module.scss';
import { CustomInput } from '@/components/shared/CustomInput';
import { Search } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const handleRedirect = () => {
    value.length && router.push(`/search?term=${value}`);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === 'Enter' && handleRedirect();
  };

  return (
    <div className={styles.form}>
      <CustomInput
        onChange={handleChange}
        value={value}
        color='secondary'
        className={styles.input}
        onKeyDown={handleEnter}
        endAdornment={
          <Button
            variant='contained'
            startIcon={<Search />}
            onClick={handleRedirect}
            className={styles.button}
          />
        }
      />
    </div>
  );
};
