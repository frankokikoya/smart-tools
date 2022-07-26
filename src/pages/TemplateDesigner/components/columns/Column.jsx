import React, { useRef } from 'react';

import Box from '@mui/material/Box';
import { useDrag, useDrop } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';
import OneColumn from './OneColumn';
import ThreeColumn from './ThreeColumn';
import TwoColumn from './TwoColumn';

const Column = ({ id, type = typeColumn.ONE_COLUMN, index, moveColumn, content = [] }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: [typeColumn.ONE_COLUMN, typeColumn.TWO_COLUMN, typeColumn.THREE_COLUMN],
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveColumn(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type,
        item: () => {
            return {
                id,
                index,
                type,
                content
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    drag(drop(ref))

    return (
        <Box
            ref={ref}
            data-handler-id={handlerId}
            sx={{
                display: 'flex',
                width: '100%'
            }} >
            {type === typeColumn.ONE_COLUMN
                ? <OneColumn index={`${index}-${id}`} isDragging={isDragging} />
                : type === typeColumn.TWO_COLUMN
                    ? <TwoColumn index={`${index}-${id}`} isDragging={isDragging} />
                    : <ThreeColumn index={`${index}-${id}`} isDragging={isDragging} />}
        </Box>
    )
}

export default Column;