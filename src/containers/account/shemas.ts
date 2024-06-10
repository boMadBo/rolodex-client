import * as yup from 'yup';

export const EditSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  password: yup.string().min(5, 'Minimum of 5 characters').max(10, 'Maximum of 10 characters'),
});

export const initialEditValues = {
  firstName: '',
  lastName: '',
  password: '',
  avatar: null,
};
