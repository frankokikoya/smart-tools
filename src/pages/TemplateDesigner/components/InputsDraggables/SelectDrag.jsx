import React, { useContext, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { typeColumn } from '../../data/DrawerItems';

const SelectDrag = ({ item, index, parent }) => {
    const [isShown, setIsShown] = useState(false);
    const [optionSelected, setOptionSelected] = useState(0);
    const { deletedContent, selectedRow, setComponentsUsed, selectOpsPay } = useContext(DesignerContext);

    const handleDragging = () => {
        return !selectedRow?.id;
    };

    const [, drag] = useDrag(() => ({
        type: typeColumn.SELECT,
        item: () => {
            return {
                id: item.id,
                index,
                action: 'LEAVE',
                fromParent: parent,
                componentId: item.componentId,
                drawer: item.drawer,
                type: typeColumn.SELECT,
                label: item.label,
                options: item.options,
            }
        },
        canDrag: handleDragging,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [selectedRow, item]);

    const deleteComponent = () => {
        setComponentsUsed((prev) => [
            ...prev.filter((cu) => cu.componentId !== item.componentId)
        ]);

        deletedContent({
            parent,
            index,
            id: item.id,
        });
    };

    const hanldeClick = (event) => setOptionSelected(event.target.value);

    useEffect(() => {
        if (item.drawer === "PAY") {
            item.options = selectOpsPay;
        }
    }, [item, item.drawer, selectOpsPay]);

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
            <FormControl sx={{ width: '100%' }} size='small' >
                <Typography
                    gutterBottom
                    component='label'
                    htmlFor='connect-label'
                    sx={{ color: '#2C4154', fontWeight: 'bold', fontSize: 'small' }}>
                    {item?.label ? item.label : 'Select'}
                </Typography>
                <Select
                    id='connect'
                    size='small'
                    labelId='connect-label'
                    value={optionSelected}
                    onChange={hanldeClick}
                >
                    <MenuItem value={0}>
                        <em style={{ color: '#898A8E' }}>Seleccionar</em>
                    </MenuItem>
                    {item.options.map((item) => (
                        <MenuItem key={item.id} value={item.value}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectDrag;