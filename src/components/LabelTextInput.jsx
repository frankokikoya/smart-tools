import React from 'react';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useField } from 'formik';

export const LabelTextInput = ({ label, labelProps = {}, divProps = {}, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box component='div' sx={{ ...divProps }}>
      <Typography component='label' htmlFor={props.id || props.name} sx={{ ...labelProps, display: "block" }}>
        {label}
      </Typography>
      <TextField
        {...field}
        {...props}
        error={meta.touched ? true : false}
        helperText={meta.touched && meta.error && meta.error}
      />
    </Box>
  );
};
