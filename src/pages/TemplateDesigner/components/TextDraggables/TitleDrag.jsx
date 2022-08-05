import React, { useContext, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { typeColumn } from '../../data/DrawerItems';

const TitleDrag = ({ item, index, parent }) => {
    const [isShown, setIsShown] = useState(false);
    const { deletedContent, selectedRow } = useContext(DesignerContext);

    const handleDragging = () => {
        return !selectedRow?.id;
    };

    const [, drag] = useDrag(() => ({
        type: typeColumn.TITLE,
        item: () => {
            return {
                id: item.id,
                index,
                action: 'LEAVE',
                fromParent: parent,
                type: typeColumn.TITLE,
            }
        },
        canDrag: handleDragging,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [selectedRow]);

    const deleteComponent = () => {
        deletedContent({
            parent,
            index,
            id: item.id,
        });
    };

    return (
        <Box
            ref={drag}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            sx={{
                m: 2,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                border: '1px dashed #D1D1D1',
                width: '100%',
                height: '6em',
            }}>
            {isShown && <IconButton
                aria-label='close-button'
                onClick={deleteComponent}
                sx={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                }}>
                <CloseIcon sx={{ color: 'red' }} />
            </IconButton>}
            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'primary.main' }}>Título</Typography>
        </Box>
    )
}

export default TitleDrag;