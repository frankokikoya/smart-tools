import React, { useCallback } from 'react';

import List from '@mui/material/List';

import DraggableListItem from './DraggableListItem';

const DraggableList = ({ ops = [], onChangeValue, moveItem, removeOption }) => {


    const renderItem = useCallback((item, idx) => {
        return (
            <DraggableListItem
                key={`listITem-${item.id}`}
                index={idx}
                item={item}
                onChangeValue={onChangeValue}
                moveItem={moveItem}
                removeOption={removeOption}
            />
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <List>
            {ops.map((item, idx) => (renderItem(item, idx)))}
        </List>
    )
}

export default DraggableList;