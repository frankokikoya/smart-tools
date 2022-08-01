import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DrawerRight from '../DrawerRight';

const data = [
    {
        id: 1,
        label: 'Marca',
        type: 'select',
        options: []
    },
]
const DrawerRightCal = () => {
    const [creditType, setCreditType] = useState(0);

    const hanldeClickCreditType = (event) => setCreditType(event.target.value);
    return (
        <DrawerRight>
            <DrawerRight.Section title='VEHÍCULO' >
                <DrawerRight.Content>
                    <Box sx={{ width: '29.4em', display: 'flex', flexDirection: 'column' }}>
                        <FormControl sx={{ width: '100%' }}>
                            <Typography
                                gutterBottom
                                component='label'
                                htmlFor='connect-label'
                                sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                                Conexión a Catálogos
                            </Typography>
                            <Select
                                labelId='connect-label'
                                id='connect'
                                value={creditType}
                                onChange={hanldeClickCreditType}
                            >
                                <MenuItem value={0}>
                                    <em style={{ color: '#898A8E' }}>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={10}>Opción 1</MenuItem>
                                <MenuItem value={21}>Opción 2</MenuItem>
                            </Select>
                        </FormControl>
                        <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
                            <Chip label='Opción 1' onDelete={() => console.log('Código 1')} />
                            <Chip label='Opción 2' onDelete={() => console.log('Código 2')} />
                        </Stack>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerRightCal;