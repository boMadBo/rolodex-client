import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required('This is a required field').trim(),
  lastName: yup.string().required('This is a required field').trim(),
  email: yup.string().required('This is a required field').trim().email('Please enter the correct email address'),
  password: yup
    .string()
    .required('This is a required field')
    .trim()
    .min(5, 'Minimum of 5 characters')
    .max(10, 'Maximum of 10 characters'),
  birthDate: yup.date().required('Please input your date of birth'),
});

export const initialSignUpValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  birthDate: '',
  avatar: null,
  isMale: '',
};

export const SignInSchema = yup.object().shape({
  email: yup.string().required('This is a required field').trim().email('Please enter the correct email address'),
  password: yup
    .string()
    .required('This is a required field')
    .trim()
    .min(5, 'Minimum of 5 characters')
    .max(10, 'Maximum of 10 characters'),
});

export const initialSignInValues = {
  email: '',
  password: '',
};
