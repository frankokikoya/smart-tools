import React from 'react';

import DehazeIcon from '@mui/icons-material/Dehaze';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';

const DraggableListItem = () => {
    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton edge='end' aria-label='delete'>
                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                }>
                <ListItemIcon sx={{
                    mr: 3,
                    width: '25%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} >
                    <DehazeIcon sx={{ cursor: 'move' }} />
                    <FormControl sx={{ width: '60%' }} >
                        <OutlinedInput id='one' type='number' size='small' />
                    </FormControl>
                </ListItemIcon>
                <ListItemText
                    primary='Mes(es)'
                />
            </ListItem>
            <Divider />
        </>
    )
}

export default DraggableListItem;