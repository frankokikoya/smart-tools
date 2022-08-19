import React, { useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';

const SelectToDrag = ({ label = 'Select', options = [] }) => {

    const [, drag] = useDrag(() => ({
        type: typeColumn.SELECT,
        item: () => {
            return {
                type: typeColumn.SELECT,
                label,
                options
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [options]);

    const [optionSelected, setOptionSelected] = useState(0);

    const hanldeClick = (event) => setOptionSelected(event.target.value);
    return (
        <Box
            ref={drag}
            sx={{
                p: 2,
                mt: 3,
                boxShadow: 2,
                backgroundColor: 'white',
                cursor: 'move',
                '&:hover': {
                    border: '2px solid #64b5f6'
                }
            }}>
            <FormControl sx={{ width: '100%' }}>
                <Typography
                    gutterBottom
                    component='label'
                    htmlFor='connect-label'
                    sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                    {label}
                </Typography>
                <Select
                    id='connect-label'
                    size='small'
                    value={optionSelected}
                    onChange={hanldeClick}
                >
                    <MenuItem value={0}>
                        <em style={{ color: '#898A8E' }}>Seleccionar</em>
                    </MenuItem>
                    {options.map((item) => (
                        <MenuItem
                            key={item.id}
                            value={item.value}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectToDrag;