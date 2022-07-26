import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import { sxStyles } from './sxStyles';

const SubTitleDrag = () => {
    const [, drag] = useDrag(() => ({
        type: typeColumn.SUBTITLE,
        item: () => {
            return {
                type: typeColumn.SUBTITLE,
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
            <Typography variant='h6' sx={{ color: 'primary.main' }}>Subtítulo</Typography>
        </Box>
    )
}

export default SubTitleDrag;