import React, { createElement, useCallback, useContext, useEffect, useState } from 'react';

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

import DesignerContext from '../../context/DesignerContext';
import { dataPay, inputComponentsToDrag, typeColumn } from '../../data/DrawerItems';
import DrawerRight from '../DrawerRight';
import DraggableList from './DraggableList';

const DrawerRightPay = () => {
    const {
        componentsUsed,
        selectOpsPay,
        setSelectOpsPay,
        minMax,
        setMinMax,
        radio,
        setRadio
    } = useContext(DesignerContext);

    const [componentToSelect] = useState(dataPay);
    //const [selectOps, setSelectOps] = useState(ops);
    // const [radio, setRadio] = useState('$');
    const [canAdd, setCanAdd] = useState(true);

    // const [minMax, setMinMax] = useState({ min: 0, max: 1 });
    const [newOp, setNewOp] = useState({ value: 0, text: '', toShow: 'EMPTY' });

    const renderComponents = (item, index) => {
        return createElement(
            inputComponentsToDrag[item.type],
            {
                key: `item-pay-${item.id}-${index}`,
                componentId: item.componentId,
                drawer: item.drawer,
                label: item.label,
                ...(item.type === typeColumn.SELECT
                    ? { options: selectOpsPay }
                    : {
                        min: minMax.min,
                        max: minMax.max,
                        exp: radio,
                    }
                )
            }
        );
    };

    const moveItem = useCallback((dragIndex, hoverIndex) => {
        setSelectOpsPay((prev) =>
            update(prev, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prev[dragIndex]],
                ],
            }),
        )
        // eslint-disable-next-line
    }, [])

    const handleChange = (event) => {
        const { id, value } = event.target;
        const convertValue = parseInt(value && value > 0 ? value : 0, 10);
        setMinMax((prev) => ({
            ...prev,
            [id]: convertValue,
            ...(
                id === 'max' && convertValue < prev.min
                    ? { min: convertValue }
                    : id === 'min' && convertValue > prev.max
                        ? { max: convertValue } : {})
        }));
    };

    const handleRadioChange = (event) => {
        setRadio(event.target.value);
        setMinMax((prev) => ({
            ...prev,
            min: 0,
            max: 1,
        }));
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
        setSelectOpsPay((prev) => ([
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

    const removeOption = (id) => {
        console.log(id);
        setSelectOpsPay((prev) => ([
            ...prev.filter((i) => i.id !== id)
        ]));
    };

    const changeValueOption = (event) => {
        const { id, value } = event;
        setSelectOpsPay((prev) => ([
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
                    <Box
                        sx={{
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
                    <Box
                        sx={{
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
                            ops={selectOpsPay}
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
                        {componentToSelect.filter((c) => !componentsUsed.find((cu) => cu.componentId === c.componentId))
                            .map((item, index) => renderComponents(item, index))
                        }
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight >
    )
}

export default DrawerRightPay;