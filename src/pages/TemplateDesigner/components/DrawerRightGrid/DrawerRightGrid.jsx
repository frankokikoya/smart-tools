import React, { createElement, useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { typeColumn } from '../../data/DrawerItems';
import DrawerRight from '../DrawerRight';
import InsuranceToDrag from '../InputsDraggables/InsuranceToDrag';
import SelectToDrag from '../InputsDraggables/SelectToDrag';
import TextInputToDrag from '../InputsDraggables/TextInputToDrag';

const data = [
    {
        id: 1,
        label: '¿Cómo quieres pagar tu seguro?',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
    {
        id: 2,
        label: '¿Qué extras deseas agregar a tu vehículo?',
        type: typeColumn.SELECT,
        isSelected: false,
        options: [
            { id: 1, value: 1, text: 'Op. uno' },
            { id: 2, value: 2, text: 'Op. dos' },
        ]
    },
];

const dataInsurance = [
    {
        id: 1,
        name: 'Afirme',
        image: 'imgs/afirme.png',
        price: '$6750.00'
    },
    {
        id: 2,
        name: 'Qualitas',
        image: 'imgs/qualitas.png',
        price: '$6750.00'
    },
    {
        id: 3,
        name: 'GNP',
        image: 'imgs/gnp.png',
        price: '$6750.00'
    },
];

const listComponents = {
    [typeColumn.SELECT]: SelectToDrag,
    [typeColumn.TXT_INPUT]: TextInputToDrag,
};

const DrawerRightGrid = () => {
    const [creditType, setCreditType] = useState(0);
    const [componentToSelect] = useState(data);

    const hanldeClickCreditType = (event) => setCreditType(event.target.value);

    const renderComponents = (item, index) => {
        return createElement(
            listComponents[item.type],
            {
                key: `item-${item.id}`,
                label: item.label,
                ...(item.type === typeColumn.SELECT ? { options: item.options } : {})
            }
        );
    };

    return (
        <DrawerRight>
            <DrawerRight.Section title='SEGUROS Y ACCESORIOS' >
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
                            .map((item, index) => renderComponents(item, index))
                        }
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box sx={{
                        p: 2,
                        mt: 3,
                        boxShadow: 2,
                        backgroundColor: 'white',
                        width: '29.4em',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography
                            gutterBottom
                            component='label'
                            htmlFor='connect-label'
                            sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                            Elige la aseguradora de tu preferencia:
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                            {dataInsurance.map((item, index) => (
                                <InsuranceToDrag
                                    key={`insurance-${item.id}-${index}`}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price} />
                            ))}
                        </Box>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerRightGrid;