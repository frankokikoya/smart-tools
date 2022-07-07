import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

const DrawerRight = ({ children }) => {
    return (
        <Drawer
            variant='permanent'
            anchor='right'>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                {children}
            </Box>
        </Drawer>
    )
}

export default DrawerRight;