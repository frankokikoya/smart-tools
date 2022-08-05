import React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';

const TextInputToDrag = ({ label = 'Input', placeholder = 'Seleccciona' }) => {

    const [, drag] = useDrag(() => ({
        type: typeColumn.TXT_INPUT,
        item: () => {
            return {
                type: typeColumn.TXT_INPUT,
                label,
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

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
                    htmlFor='input-text-label'
                    sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                    {label}
                </Typography>
                <TextField
                    id='input-text-label'
                    placeholder={placeholder}
                    variant='outlined' />
            </FormControl>
        </Box>
    )
}

export default TextInputToDrag;