import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DrawerRight from './DrawerRight/DrawerRight';

const sxStyles = {
    content: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    itemContainer: { width: '30.3em', height: '6em', boxShadow: 1, p: 2, mt: 3 },
    itemInput: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '30.3em', height: '6em', boxShadow: 2, p: 2, mt: 3 },
    itemBordered: { border: '2px solid #D49536', height: '100%' }
};

const DrawerRigthTemplate = () => {
    return (
        <DrawerRight>
            <DrawerRight.Section title='COLUMNAS' >
                <DrawerRight.Content>
                    <Box sx={sxStyles.content}>
                        <Box sx={sxStyles.itemContainer}>
                            <Box sx={{ ...sxStyles.itemBordered, width: '100%' }} />
                        </Box>
                        <Stack sx={sxStyles.itemContainer} direction='row' spacing={1}>
                            <Box sx={{ ...sxStyles.itemBordered, width: '50%' }} />
                            <Box sx={{ ...sxStyles.itemBordered, width: '50%' }} />
                        </Stack>
                        <Stack sx={sxStyles.itemContainer} direction='row' spacing={1}>
                            <Box sx={{ ...sxStyles.itemBordered, width: '33%' }} />
                            <Box sx={{ ...sxStyles.itemBordered, width: '33%' }} />
                            <Box sx={{ ...sxStyles.itemBordered, width: '33%' }} />
                        </Stack>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
            <DrawerRight.Section title='TEXTO' >
                <DrawerRight.Content>
                    <Box sx={sxStyles.content}>
                        <Box sx={sxStyles.itemInput}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'primary.main' }}>Título</Typography>
                        </Box>
                        <Box sx={sxStyles.itemInput}>
                            <Typography variant='h6' sx={{ color: 'primary.main' }}>Subtítulo</Typography>
                        </Box>
                        <Box sx={sxStyles.itemInput}>
                            <Typography sx={{ color: 'primary.main' }}>Texto libre</Typography>
                        </Box>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerRigthTemplate;