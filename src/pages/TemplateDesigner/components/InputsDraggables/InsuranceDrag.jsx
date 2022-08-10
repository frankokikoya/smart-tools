import React, { useContext, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { typeColumn } from '../../data/DrawerItems';

const InsuranceDrag = ({ item, index, parent }) => {
    const [isShown, setIsShown] = useState(false);
    const { deletedContent, selectedRow } = useContext(DesignerContext);

    const handleDragging = () => {
        return !selectedRow?.id;
    };

    const [, drag] = useDrag(() => ({
        type: typeColumn.INSURANCE,
        item: () => {
            return {
                id: item.id,
                index,
                action: 'LEAVE',
                fromParent: parent,
                type: typeColumn.INSURANCE,
                image: item.image,
                name: item.name,
                price: item.price,
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
                size='small'
                onClick={deleteComponent}
                sx={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                }}>
                <CloseIcon sx={{ color: 'red', fontSize: 'large' }} />
            </IconButton>}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>

                    <Box
                        component='img'
                        alt='insurance'
                        src={item.image} />
                    <Typography
                        sx={{
                            mt: 1,
                            fontWeight: "bold",
                            fontSize: "12px",
                            color: '#2C4154',
                        }}>
                        {item.name}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                    <Typography
                        sx={{
                            mt: 1,
                            fontWeight: "bold",
                            fontSize: "18px",
                            color: '#2C4154',
                        }}>
                        {item.price}
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontWeight: "bold",
                            fontSize: "12px",
                            color: '#898A8E'
                        }}
                        gutterBottom>
                        Costo Anual
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default InsuranceDrag;