import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { uploadStyles } from './sxStyles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorsLocalValidate = ({ fileErrors }) => {
    return (
        <Box
            sx={uploadStyles.errorContainer}>
            <ErrorOutlineIcon sx={{ color: 'secondary.main', fontSize: 80, mt: 5 }} />
            <Typography sx={{ mt: 3 }}>
                {fileErrors.join('. ')}
            </Typography>
        </Box>
    )
};

ErrorsLocalValidate.propTypes = {
    fileErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorsLocalValidate;