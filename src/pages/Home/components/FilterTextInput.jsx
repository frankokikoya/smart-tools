import React from 'react';

import TextField from '@mui/material/TextField';
import { useField } from 'formik';

export const FilterTextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      error={meta.touched ? true : false}
      helperText={meta.touched && meta.error && meta.error}
    />
  );
};
