import React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const AddPage = ({ onClick }) => {
    return (
        <Box
            sx={{
                width: '10%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                //border: '1px solid black'
            }}>
            <IconButton aria-label='add page' onClick={onClick}>
                <AddCircleOutlineIcon sx={{ color: 'secondary.gray', fontSize: 35 }} />
            </IconButton>
        </Box>
    )
}

export default AddPage;