import React from 'react';

import Box from '@mui/material/Box';

const TableDetail = ({ children }) => {
    return (
        <Box sx={{ mt: 3, width: '100%' }}>{children}</Box>
    )
};

export default TableDetail;