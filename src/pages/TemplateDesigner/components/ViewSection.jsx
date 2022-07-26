import React from 'react';

import { Box } from '@mui/material';

const ViewSection = ({ children }) => {
    return (
        <Box sx={{
            mx: 5,
            display: 'flex',
            flexDirection: 'column',
            width: '50em',
            // border: '2px solid #FFB23F',
        }}>
            {children}
        </Box>
    )
};

export default ViewSection;