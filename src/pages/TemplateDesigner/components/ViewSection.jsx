import React from 'react';

import { Box } from '@mui/material';

const ViewSection = ({ children }) => {
    return (
        <Box sx={{
            mx: 5,
            display: 'flex',
            flexDirection: 'column',
            width: '50em',
            height: '12em'
        }}>
            {children}
        </Box>
    )
};

export default ViewSection;