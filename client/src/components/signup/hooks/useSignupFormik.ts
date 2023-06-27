import * as yup from 'yup';
import { useFormik } from 'formik';

interface IFormValue {
  email: string;
  firstName: string;
  surname: string;
  age: number | string;
  city: string;
  university: string;
  password: string;
  passwordAgain: string;
}

interface IParams {
  onSubmit(values: IFormValue): void;
}

const initialValues = {
  email: '',
  firstName: '',
  surname: '',
  age: '',
  city: '',
  university: '',
  password: '',
  passwordAgain: '',
};

export type ISignupFormValues = typeof initialValues;

export const useSignupFormik = ({ onSubmit }: IParams) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: yup.string().required('First name is required'),
    surname: yup.string().required('Surname is required'),
    age: yup.string().required('Age is required'),
    city: yup.string().required('City is required'),
    university: yup.string().required('University is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    passwordAgain: yup
      .string()
      .required('Password is required')
      .min(8, 'Password should be of minimum 8 characters length')
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  });

  return useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });
};
