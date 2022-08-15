import React from 'react';

import List from '@mui/material/List';

import DraggableListItem from './DraggableListItem';

const DraggableList = ({ ops = [], removeOption }) => {
    return (
        <List>
            {ops.map((item, idx) => (
                <DraggableListItem
                    key={idx}
                    item={item}
                    removeOption={removeOption} />
            ))}
        </List>
    )
}

export default DraggableList;