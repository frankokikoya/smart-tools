import React, { useRef } from 'react';

import Box from '@mui/material/Box';
import { useDrag, useDrop } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import ColumnDropZone from './ColumnDropZone';

const OneColumn = ({ id, index, moveColumn, content = [], parent }) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: [typeColumn.ONE_COLUMN, typeColumn.TWO_COLUMN, typeColumn.THREE_COLUMN],
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveColumn(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    })

    const [, drag] = useDrag({
        type: typeColumn.ONE_COLUMN,
        item: () => {
            return {
                id,
                index,
                type: typeColumn.ONE_COLUMN,
                content
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    drag(drop(ref))

    //const opacity = isDragging ? 0 : 1;
    return (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                width: '100%',
                cursor: 'move',
                // '&:hover': {
                //     border: '2px solid #64b5f6'
                // }
            }} >
            <ColumnDropZone
                width='100%'
                parent={parent}
                index={index}
                content={content} />
        </Box>
    )
}

export default OneColumn;