import React, { useCallback, useEffect, useState } from 'react';

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
import update from 'immutability-helper';

import DrawerRight from '../DrawerRight';
import SelectToDrag from '../InputsDraggables/SelectToDrag';
import SliderToDrag from '../InputsDraggables/SliderToDrag';
import DraggableList from './DraggableList';

const ops = [
    { id: 1, value: 48, text: '48 Mes(es)', toShow: 'Mes(es)' },
    { id: 2, value: 36, text: '36 Mes(es)', toShow: 'Mes(es)' },
];

const DrawerRightPay = () => {
    const [selectOps, setSelectOps] = useState(ops);
    const [radio, setRadio] = useState('$');
    const [canAdd, setCanAdd] = useState(true);
    const [minMax, setMinMax] = useState({ min: 10, max: 10 });
    const [newOp, setNewOp] = useState({ value: 0, text: '', toShow: 'EMPTY' });

    const moveItem = useCallback((dragIndex, hoverIndex) => {
        setSelectOps((prev) =>
            update(prev, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prev[dragIndex]],
                ],
            }),
        )
    }, [])

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

    const onChangeValue = (event) => {
        const { id, value } = event.target;
        setNewOp((prev) => ({
            ...prev,
            text: id === 'value-ops'
                ? `${value} ${prev.toShow}`
                : `${prev.value} ${value}`,
            [id === 'value-ops'
                ? 'value'
                : 'toShow']: value
        }));
    };

    const addOption = () => {
        setSelectOps((prev) => ([
            ...prev,
            {
                id: prev.length + 1,
                value: parseInt(newOp.value, 10),
                text: `${newOp.value} ${newOp.toShow}`,
                toShow: newOp.toShow
            }
        ]));
        setNewOp({ value: 0, text: '', toShow: 'EMPTY' });
    };

    const removeOption = (item) => {
        setSelectOps((prev) => ([
            ...prev.filter((i) => i.id !== item.id)
        ]));
    };

    const changeValueOption = (event) => {
        const { id, value } = event;
        setSelectOps((prev) => ([
            ...prev.map((i) => {
                if (i.id === id) {
                    i.value = value;
                    i.text = `${value} ${i.toShow}`
                }
                return i;
            })
        ]));
    };

    useEffect(() => {
        if (
            newOp.value !== '' &&
            newOp.value !== 0 &&
            newOp.toShow !== 'EMPTY'
        ) setCanAdd(false);
        else setCanAdd(true);
    }, [newOp.toShow, newOp.value]);

    return (
        <DrawerRight>
            <DrawerRight.Section title='ENGANCHE' >
                <DrawerRight.Content>
                    <Box
                        sx={{
                            width: '29.4em',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <FormControl sx={{ width: '100%' }}>
                            <FormControlLabel
                                control={<Switch />}
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
                    <Box
                        sx={{
                            width: '29.4em',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <DraggableList
                            ops={selectOps}
                            onChangeValue={changeValueOption}
                            moveItem={moveItem}
                            removeOption={removeOption} />
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box
                        sx={{
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
                                value={newOp.value}
                                onChange={onChangeValue}
                                inputProps={{ min: 1, max: 3 }} />
                        </FormControl>
                        <FormControl sx={{ width: '70%' }} >
                            <Select
                                id='connect-label'
                                size='small'
                                value={newOp.toShow}
                                onChange={onChangeValue}
                            >
                                <MenuItem value={'EMPTY'}>
                                    <em style={{ color: '#898A8E' }}>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={'Mes(es)'}>Mes(es)</MenuItem>
                                <MenuItem value={'Año(s)'}>Año(s)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box
                        sx={{
                            px: 2,
                            mt: 2,
                            width: '29.4em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Button
                            variant='outlined'
                            disabled={canAdd}
                            onClick={addOption}
                            sx={{ width: '100%', textTransform: 'none' }}>
                            Añadir plazo +
                        </Button>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
            <DrawerRight.Section title='COMPONENTES' >
                <DrawerRight.Content>
                    <Box
                        sx={{
                            width: '29.4em',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <SelectToDrag
                            label='¿A cuántos plazos deseas pagar?'
                            options={selectOps}
                        />
                        <SliderToDrag />
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight >
    )
}

export default DrawerRightPay;