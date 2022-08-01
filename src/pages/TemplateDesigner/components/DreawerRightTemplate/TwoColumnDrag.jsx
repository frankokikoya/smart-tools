import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import { sxStyles } from './sxStyles';

const TwoColumnDrag = () => {
    const [, drag] = useDrag(() => ({
        type: typeColumn.TWO_COLUMN,
        item: () => {
            return {
                type: typeColumn.TWO_COLUMN,
                content: []
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));
    return (
        <Stack
            ref={drag}
            sx={{
                ...sxStyles.itemContainer,
                cursor: 'move',
                '&:hover': {
                    border: '2px solid #64b5f6'
                }
            }}
            direction='row'
            spacing={1}>
            <Box sx={{ ...sxStyles.itemBordered, width: '50%' }} />
            <Box sx={{ ...sxStyles.itemBordered, width: '50%' }} />
        </Stack>
    )
}

export default TwoColumnDrag;