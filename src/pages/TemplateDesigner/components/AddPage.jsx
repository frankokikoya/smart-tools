import React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';

const AddPage = () => {
    return (
        <Box
            sx={{
                width: '10%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <AddCircleOutlineIcon sx={{ color: 'secondary.grey', fontSize: 35 }} />
        </Box>
    )
}

export default AddPage;