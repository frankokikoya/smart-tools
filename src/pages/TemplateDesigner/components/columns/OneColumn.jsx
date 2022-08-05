import React, { useContext, useRef } from 'react';

import Box from '@mui/material/Box';
import { useDrag, useDrop } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { typeColumn } from '../../data/DrawerItems';
import ColumnDropZone from './ColumnDropZone';

const OneColumn = ({ id, index, moveColumn, content = [], parent }) => {
    const ref = useRef(null);
    const { selectedRow, setSelectedRow } = useContext(DesignerContext);

    const handleDragging = () => {
        return !selectedRow?.id;
    };

    const [, drop] = useDrop({
        accept: [typeColumn.ONE_COLUMN, typeColumn.TWO_COLUMN, typeColumn.THREE_COLUMN],
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            const currentId = item?.id

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
            if (currentId) {
                const getCurrentParent = parseInt(currentId.split('parent-')[1]);
                if (getCurrentParent === parent) {
                    moveColumn(dragIndex, hoverIndex);
                    item.index = hoverIndex;
                }
            } else {
                return;
            }
        },
    })

    const [, drag] = useDrag(() => ({
        type: typeColumn.ONE_COLUMN,
        item: () => {
            return {
                id,
                index,
                type: typeColumn.ONE_COLUMN,
                content
            }
        },
        canDrag: handleDragging,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [selectedRow]);

    drag(drop(ref))

    const handleChangeColumn = () => {
        if (content.length === 0) {
            if (selectedRow?.id === id) {
                setSelectedRow({});
            }
            else {
                setSelectedRow(prev => {
                    return {
                        ...prev,
                        id,
                        index,
                        typeColumn: typeColumn.ONE_COLUMN,
                        parent
                    };
                });
            }
        }
    };

    return (
        <Box
            ref={ref}
            onClick={handleChangeColumn}
            sx={{
                display: 'flex',
                width: '100%',
                ...(selectedRow?.id === id && selectedRow?.parent === parent
                    ? { border: '2px solid #D49536' } : {}),
                cursor: 'move',
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