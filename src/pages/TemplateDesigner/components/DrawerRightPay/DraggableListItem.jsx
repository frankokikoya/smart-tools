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

const DraggableListItem = ({ item, idx, removeOption }) => {
    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={() => removeOption(item)}>
                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                }>
                <ListItemIcon sx={{
                    mr: 3,
                    width: '30%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} >
                    <DehazeIcon sx={{ cursor: 'move' }} />
                    <FormControl sx={{ width: '70%' }} >
                        <OutlinedInput
                            id={`${idx}-ops`}
                            type='number'
                            size='small'
                            value={item.value}
                            inputProps={{ min: 1, max: 3 }} />
                    </FormControl>
                </ListItemIcon>
                <ListItemText
                    sx={{ color: 'secondary.gray' }}
                    primary={item.text}
                />
            </ListItem>
            <Divider />
        </>
    )
}

export default DraggableListItem;