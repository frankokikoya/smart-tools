import React, { createElement } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { sxStyles } from '../../../Designer/styles';
import { itemsLeft } from '../../data/DrawerItems';

const DrawerLeft = ({ selected, handleClick }) => {
    return (
        <Drawer variant='permanent'>
            <Toolbar />
            <Box className='designer__two' sx={{ overflow: "auto" }}>
                <List>
                    {itemsLeft.map((item, index) => (
                        <ListItem key={item.id} disablePadding sx={sxStyles.listItem}>
                            <ListItemButton
                                sx={sxStyles.listButton}
                                selected={selected === index}
                                onClick={() => handleClick(index)}>
                                <Tooltip title={item.name} placement='right-start'>
                                    <ListItemIcon
                                        sx={sxStyles.listIcon}>
                                        {createElement(
                                            item.icon,
                                            { isSelected: selected === index }
                                        )}
                                    </ListItemIcon>
                                </Tooltip>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default DrawerLeft;