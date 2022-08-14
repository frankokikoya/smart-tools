import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import DrawerRight from '../DrawerRight';
import DraggableList from './DraggableList';

const ops = [
    { order: 0, value: 48, text: 'Mes(es)' },
    { order: 1, value: 36, text: 'Mes(es)' },
];

const DrawerRightPay = () => {
    const [selectOps, setSelectOps] = useState(ops);
    const [radio, setRadio] = useState('$');
    const [minMax, setMinMax] = useState({ min: 10, max: 10 });

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (value !== '') {
            setMinMax((prev) => ({
                ...prev,
                [id]: value,
            }));
        }
    };

    const handleRadioChange = (event) => {
        console.log(event.target.value)
        setRadio(event.target.value);
        if (event.target.value === '$' && radio === '%') {
            setMinMax((prev) => ({
                ...prev,
                min: Math.round(prev.min * 100),
                max: Math.round(prev.max * 100),
            }));
        }

        if (event.target.value === '%' && radio === '$') {
            setMinMax((prev) => ({
                ...prev,
                min: (prev.min / 100).toFixed(2),
                max: (prev.max / 100).toFixed(2),
            }));
        }
    };

    return (
        <DrawerRight>
            <DrawerRight.Section title='ENGANCHE' >
                <DrawerRight.Content>
                    <Box sx={{
                        width: '29.4em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <FormControl sx={{ width: '100%' }}>
                            <FormControlLabel
                                control={<Switch defaultChecked />}
                                label='Usar enganche del producto' />
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box sx={{
                        width: '29.4em',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <FormControl sx={{ width: '45%' }}>
                            <Typography
                                gutterBottom
                                component='label'
                                htmlFor='min'
                                sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                                Mín.
                            </Typography>
                            <OutlinedInput
                                id='min'
                                size='small'
                                type='number'
                                placeholder='10'
                                sx={{ pr: 0 }}
                                value={minMax.min}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment
                                        sx={{
                                            width: '45%',
                                            height: '100%',
                                            maxHeight: "3.5rem",
                                            backgroundColor: '#D1D1D1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        position='end'>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                            {radio}
                                        </Typography>
                                    </InputAdornment>
                                } />
                        </FormControl>
                        <FormControl sx={{ width: '45%' }}>
                            <Typography
                                gutterBottom
                                component='label'
                                htmlFor='max'
                                sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                                Máx.
                            </Typography>
                            <OutlinedInput
                                id='max'
                                size='small'
                                type='number'
                                placeholder='10'
                                sx={{ pr: 0 }}
                                value={minMax.max}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment
                                        sx={{
                                            width: '45%',
                                            height: '100%',
                                            maxHeight: "3.5rem",
                                            backgroundColor: '#D1D1D1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        position='end'>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                            {radio}
                                        </Typography>
                                    </InputAdornment>
                                } />
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box sx={{
                        width: '29.4em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <FormControl sx={{ width: '100%' }}>
                            <RadioGroup
                                name='type-money'
                                value={radio}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value='$' control={<Radio color='secondary' />} label='Expresar en pesos' />
                                <FormControlLabel value='%' control={<Radio color='secondary' />} label='Expresar en porcentaje' />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
            <DrawerRight.Section title='PLAZOS' >
                <DrawerRight.Content>
                    <Box sx={{
                        width: '29.4em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <DraggableList ops={selectOps} />
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box sx={{
                        px: 2,
                        width: '29.4em',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <FormControl sx={{ width: '25%' }} >
                            <OutlinedInput
                                id={`value-ops`}
                                type='number'
                                size='small'
                                value={24}
                                inputProps={{ min: 1, max: 3 }} />
                        </FormControl>
                        <FormControl sx={{ width: '70%' }} >
                            <Select
                                id='connect-label'
                                size='small'
                                value={10}
                            //onChange={hanldeClickCreditType}
                            >
                                <MenuItem value={0}>
                                    <em style={{ color: '#898A8E' }}>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={10}>Mes(es)</MenuItem>
                                <MenuItem value={21}>Año(s)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box sx={{
                        px: 2,
                        mt: 2,
                        width: '29.4em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Button
                            variant='outlined'
                            sx={{ width: '100%', textTransform: 'none' }}>
                            Añadir plazo +
                        </Button>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight >
    )
}

export default DrawerRightPay;