import React from 'react';

import { FormControl } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useField } from 'formik';

export const LabelSelectInput = ({ label, labelProps = {}, divProps = {}, children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormControl sx={{ ...divProps }} error>
            <Typography
                component='label'
                htmlFor={props.id || props.name}
                sx={{ ...labelProps, display: "block" }}
            >
                {label}
            </Typography>
            <Select
                {...field}
                {...props}
                error={meta.touched ? true : false}
            >
                {children}
            </Select>
            <FormHelperText>{meta.touched && meta.error && meta.error}</FormHelperText>
        </FormControl>
    )
};