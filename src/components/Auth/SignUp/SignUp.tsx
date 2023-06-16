import styles from './SignUp.module.scss';
import { CustomInput } from '@/components/shared/CustomInput';
import { PasswordInput } from '@/components/shared/PasswordInput';
import { SignUpScheme } from '@/schemes/auth.scheme';
import authService from '@/services/auth/auth.service';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';

interface IProps {
  toLogin: () => void;
}

export const SignUp: React.FC<IProps> = ({ toLogin }) => {
  const formik = useFormik({
    validationSchema: SignUpScheme,
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    onSubmit: values => {
      values.password === values.repeatPassword &&
        authService.main('register', values);
    }
  });

  return (
    <div className={styles.signUp}>
      <div className={styles.leftPart}>
        <h2>Create account</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <CustomInput
            name='fullName'
            label='Full Name'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            className={styles.input}
            size='small'
            sx={{
              width: '300px'
            }}
          />
          <CustomInput
            name='phone'
            label='Phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            className={styles.input}
            size='small'
            sx={{
              width: '300px'
            }}
          />
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
          <CustomInput
            name='repeatPassword'
            label='Repeat password'
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            className={styles.input}
            type='password'
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
            Sign Up
          </Button>
        </form>
      </div>
      <div className={styles.centerPart} />
      <div className={styles.rightPart}>
        <div>Already have account?</div>
        <Button
          onClick={toLogin}
          variant='contained'
          sx={{
            width: '200px'
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};
