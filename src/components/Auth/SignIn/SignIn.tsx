import styles from './SignIn.module.scss';
import { CustomInput } from '@/components/shared/CustomInput';
import { PasswordInput } from '@/components/shared/PasswordInput';
import authService from '@/services/auth/auth.service';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';

interface IProps {
  toRegister: () => void;
}

export const SignIn: React.FC<IProps> = ({ toRegister }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => authService.main('login', values)
  });

  return (
    <div className={styles.signIn}>
      <div className={styles.rightPart}>
        <h2>Sign In</h2>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <CustomInput
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            className={styles.input}
            type='email'
            size='small'
            sx={{
              width: '300px'
            }}
          />
          <PasswordInput
            value={formik.values.password}
            onChange={formik.handleChange}
            className={styles.input}
            size='small'
            sx={{
              width: '300px'
            }}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ width: '150px' }}
          >
            Sign In
          </Button>
        </form>
      </div>
      <div className={styles.centerPart} />
      <div className={styles.leftPart}>
        <div>First time on the site?</div>
        <Button onClick={toRegister} variant='contained'>
          Create your account
        </Button>
      </div>
    </div>
  );
};
