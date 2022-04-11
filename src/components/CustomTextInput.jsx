import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

export const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Typography component="label" htmlFor={props.id || props.name} sx={{ p: 1 }}>
        {label}
      </Typography>
      <TextField
        {...field}
        {...props}
        error={meta.touched ? true : false}
        helperText={meta.touched && meta.error && meta.error}
      />
    </>
  );
};
