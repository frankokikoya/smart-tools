import React from 'react';

import List from '@mui/material/List';

import DraggableListItem from './DraggableListItem';

const DraggableList = () => {
    return (
        <List>
            <DraggableListItem />
        </List>
    )
}

export default DraggableList;