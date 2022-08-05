import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { typeColumn } from '../../data/DrawerItems';
import DrawerRight from '../DrawerRight';
import SelectToDrag from './SelectToDrag';
import TextInputToDrag from './TextInputToDrag';

const data = [
    {
        id: 1,
        label: 'Marca',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 2,
        label: 'Modelo',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 3,
        label: 'Año',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 4,
        label: 'Versión',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 5,
        label: 'Kilometraje',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 6,
        label: 'Text custom',
        type: typeColumn.TXT_INPUT,
        isSelected: false,
    },
    {
        id: 7,
        label: 'Text custom2',
        type: typeColumn.TXT_INPUT,
        isSelected: false,
    },
]
const DrawerRightCal = () => {
    const [creditType, setCreditType] = useState(0);
    const [componentToSelect] = useState(data);

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
                                id='connect-label'
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
            <DrawerRight.Section title='COMPONENTES' >
                <DrawerRight.Content>
                    <Box sx={{ width: '29.4em', display: 'flex', flexDirection: 'column' }}>
                        {componentToSelect.filter((item) => !item.isSelected)
                            .map((item) => {
                                if (item.type === typeColumn.SELECT) return <SelectToDrag key={`item-${item.id}`} label={item.label} options={item.options} />
                                else return <TextInputToDrag key={`item-${item.id}`} label={item.label} />
                            })}
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerRightCal;