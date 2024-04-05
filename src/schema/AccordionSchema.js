import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
    first: Yup.string()
      .required('First name is required'),
    last: Yup.string()
      .required('Last name is required'),
    gender: Yup.string()
      .required('Gender is required'),
    country: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'First name must contain only alphabets and spaces')
      .required('Country is required'),
      description: Yup.string()
      .required('Description is required'),
  });