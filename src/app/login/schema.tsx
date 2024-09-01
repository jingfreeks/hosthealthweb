import * as yup from 'yup';
export const Schema = yup
  .object({
    username: yup.string().required('User Name Should be required'),
    password: yup
      .string()
      .required('Password Should be required')
      .min(8, 'Your Password is too short'),
  })
  .required();
