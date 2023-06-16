import * as Yup from 'yup';

const required = 'Field required!';
const email = 'Invalid email';

export const SignUpScheme = Yup.object().shape({
  fullName: Yup.string().required(required),
  phone: Yup.string()
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
    .required(required),
  email: Yup.string().email(email).required(required),
  password: Yup.string().min(6, 'Min 6 characters').required(required),
  repeatPassword: Yup.string().required(required)
});

export const SignInScheme = Yup.object().shape({
  email: Yup.string().email(email).required(required),
  password: Yup.string().required(required)
});
