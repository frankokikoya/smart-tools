import React from 'react';

import Box from '@mui/material/Box';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import { sxStyles } from './sxStyles';

const OneColumnDrag = () => {
    const [, drag] = useDrag(() => ({
        type: typeColumn.ONE_COLUMN,
        item: () => {
            return {
                type: typeColumn.ONE_COLUMN,
                content: []
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
                ...sxStyles.itemContainer,
                cursor: 'move',
                '&:hover': {
                    border: '2px solid #64b5f6'
                }
            }}>
            <Box
                sx={{
                    ...sxStyles.itemBordered,
                    width: '100%'
                }} />
        </Box>
    )
}

export default OneColumnDrag;