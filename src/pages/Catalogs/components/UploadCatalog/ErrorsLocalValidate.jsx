import React from 'react';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { uploadStyles } from './sxStyles';


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