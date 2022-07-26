import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import { sxStyles } from './sxStyles';

const TitleDrag = () => {
    const [, drag] = useDrag(() => ({
        type: typeColumn.TITLE,
        item: () => {
            return {
                type: typeColumn.TITLE,
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
            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'primary.main' }}>Título</Typography>
        </Box>
    )
}

export default TitleDrag;