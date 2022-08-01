import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const SelectDrag = ({ label = '', options = [] }) => {

    const [optionSelected, setOptionSelected] = useState(0);

    const hanldeClick = (event) => setOptionSelected(event.target.value);
    return (
        <FormControl sx={{ width: '100%' }}>
            <Typography
                gutterBottom
                component='label'
                htmlFor='connect-label'
                sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                {label}
            </Typography>
            <Select
                labelId='connect-label'
                id='connect'
                value={optionSelected}
                onChange={hanldeClick}
            >
                <MenuItem value={0}>
                    <em style={{ color: '#898A8E' }}>Seleccionar</em>
                </MenuItem>
                {options.map((item) => (
                    <MenuItem key={item.id} value={item.value}>
                        {item.text}
                    </MenuItem>
                ))}
                <MenuItem value={21}>Opción 2</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectDrag;