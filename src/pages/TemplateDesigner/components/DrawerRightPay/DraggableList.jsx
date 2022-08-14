import React from 'react';

import List from '@mui/material/List';

import DraggableListItem from './DraggableListItem';

const DraggableList = ({ ops = [] }) => {
    return (
        <List>
            {ops.map((item, idx) => (
                <DraggableListItem key={idx} item={item} />
            ))}
        </List>
    )
}

export default DraggableList;