import React from 'react';

import Box from '@mui/material/Box';

const Content = ({ children }) => {
    return (
        <Box
            sx={{
                mt: 2,
                px: 2,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: 'space-between',
            }}>
            {children}
        </Box>
    )
}

export default Content;