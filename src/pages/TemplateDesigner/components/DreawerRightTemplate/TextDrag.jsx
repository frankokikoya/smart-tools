import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import { sxStyles } from './sxStyles';

const TextDrag = () => {
    const [, drag] = useDrag(() => ({
        type: typeColumn.TEXT,
        item: () => {
            return {
                type: typeColumn.TEXT,
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
                ...sxStyles.itemInput,
                cursor: 'move',
                '&:hover': {
                    border: '2px solid #64b5f6'
                }
            }}>
            <Typography sx={{ color: 'primary.main' }}>Texto libre</Typography>
        </Box>
    )
}

export default TextDrag;