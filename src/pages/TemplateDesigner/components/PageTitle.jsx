import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageTitle = ({ pageNanme = "New page" }) => {
    return (
        <Box
            sx={{
                mb: 2,
                p: 1,
                width: '90%',
                border: '1px dashed #898A8E',
            }}>
            <Typography sx={{ color: 'secondary.gray' }}>
                {pageNanme}
            </Typography>
        </Box>
    )
}

export default PageTitle;