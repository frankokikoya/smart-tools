import React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ItemContainer = () => {
    return (
        <>
            <Typography sx={{ color: 'secondary.gold' }}>¡Necesitas añadir columnas!</Typography>
            <AddCircleOutlineIcon sx={{ color: 'secondary.gold', fontSize: 35 }} />
        </>
    )
}

export default ItemContainer;