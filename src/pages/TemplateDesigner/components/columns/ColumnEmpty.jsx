import React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';

const ColumnEmpty = ({ canDrop, isOver }) => {
    return (
        <Box
            sx={{
                m: 2,
                border: '1px dashed #D1D1D1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '6em',
                backgroundColor: canDrop && isOver ? '#eeeeee' : 'white',
            }}>
            <AddCircleOutlineIcon sx={{ color: '#D1D1D1', fontSize: 35 }} />
        </Box>
    )
}

export default ColumnEmpty;