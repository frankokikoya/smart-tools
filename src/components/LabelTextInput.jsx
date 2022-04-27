import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { Box } from "@mui/material";

export const LabelTextInput = ({ label, labelProps = {}, divProps = {}, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box component="div" sx={{ ...divProps }}>
      <Typography component="label" htmlFor={props.id || props.name} sx={{ ...labelProps, display: "block" }}>
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
