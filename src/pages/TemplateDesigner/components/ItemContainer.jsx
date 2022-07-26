import React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

const ItemContainer = () => {
    return (
        <>
            {/* <Typography sx={{ color: 'secondary.gold' }}>¡Necesitas añadir columnas!</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', padding: 2, }} >
                <Box sx={{ border: '2px solid #D49536', height: '6em', width: '100%' }} />
                <Stack direction='row' spacing={1} sx={{ height: '6em', width: '100%' }} >
                    <Box sx={{ border: '2px solid #D49536', height: '100%', width: '50%' }} />
                    <Box sx={{ border: '2px solid #D49536', height: '100%', width: '50%' }} />
                </Stack>
                <Stack direction='row' spacing={1} sx={{ height: '6em', width: '100%' }}>
                    <Box sx={{ border: '2px solid #D49536', height: '100%', width: '33%' }} />
                    <Box sx={{ border: '2px solid #D49536', height: '100%', width: '33%' }} />
                    <Box sx={{ border: '2px solid #D49536', height: '100%', width: '33%' }} />
                </Stack>
            </Box>
            <AddCircleOutlineIcon sx={{ color: 'secondary.gold', fontSize: 35 }} />
        </>
    )
}

export default ItemContainer;