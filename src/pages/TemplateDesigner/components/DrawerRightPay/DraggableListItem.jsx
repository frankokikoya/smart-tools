import React, { useRef, useState } from 'react';

import DehazeIcon from '@mui/icons-material/Dehaze';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useDrag, useDrop } from 'react-dnd';

import { useOutsideClick } from '../../../../hooks/useOutsideClick';

const ItemType = {
    BOX: 'box',
}

const DraggableListItem = ({ item, index, onChangeValue, moveItem, removeOption }) => {
    const ref = useRef(null);
    const [canEdit, setCanEdit] = useState(false);

    const handleClickOutside = () => {
        setCanEdit(false)
    };

    const handleEdit = () => {
        setCanEdit((prev) => !prev)
    };

    const refEdit = useOutsideClick(handleClickOutside);

    const [, drop] = useDrop({
        accept: [ItemType.BOX],
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    });

    const [{ opacity }, drag, preview] = useDrag({
        type: ItemType.BOX,
        item: () => {
            return {
                index,
                ...item
            }
        },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    });

    drag(drop(ref))

    const handleChange = (event) => {
        const { value } = event.target;
        const convertValue = parseInt(value && value > 0 ? value : 0, 10);
        onChangeValue({
            id: item.id,
            value: convertValue,
        });
    };

    return (
        <div ref={refEdit} >
            <div
                ref={preview}
                style={{ opacity }}>
                <ListItem
                    secondaryAction={
                        <>
                            <IconButton
                                edge='end'
                                aria-label='edit'
                                onClick={(e) => { e.preventDefault(); handleEdit(); }}>
                                <EditIcon sx={{ color: 'secondary.main' }} />
                            </IconButton>
                            <IconButton
                                edge='end'
                                aria-label='delete'
                                onClick={() => removeOption(item.id)}>
                                <DeleteIcon sx={{ color: 'secondary.main' }} />
                            </IconButton>
                        </>
                    }>
                    <ListItemIcon
                        sx={{
                            mr: 3,
                            width: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }} >
                        <div ref={ref}>
                            <DehazeIcon sx={{ cursor: 'move' }} />
                        </div>
                        <FormControl sx={{ width: '70%' }} >
                            <OutlinedInput
                                id={`${item.id}`}
                                type='number'
                                size='small'
                                readOnly={!canEdit}
                                disabled={!canEdit}
                                value={item.value}
                                onChange={handleChange}
                                inputProps={{ min: 1, max: 3 }} />
                        </FormControl>
                    </ListItemIcon>
                    <ListItemText
                        sx={{ color: 'secondary.gray' }}
                        primary={item.toShow}
                    />
                </ListItem>
                <Divider />
            </div>
        </div>
    )
}

export default DraggableListItem;