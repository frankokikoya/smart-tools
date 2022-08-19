import React, { createElement, useContext } from 'react';

import { useDrop } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { inputComponents, sideContent, typeColumn } from '../../data/DrawerItems';
import ColumnContainer from './ColumnContainer';
import ColumnEmpty from './ColumnEmpty';

const ColumnDropZone = ({ width, side = sideContent.NO_SIDE, content = [], parent, index }) => {
    const { addedContent } = useContext(DesignerContext);

    const addContent = (item) => {
        // ADD CONTENT
        addedContent({
            item,
            parent,
            index
        });
    };

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: [
            typeColumn.TITLE,
            typeColumn.SUBTITLE,
            typeColumn.TEXT,
            typeColumn.SELECT,
            typeColumn.TXT_INPUT,
            typeColumn.INSURANCE,
            typeColumn.SLIDER
        ],
        drop: (item) => addContent({ ...item, side, content: [] }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }));

    const renderContent = (c, idx) => {
        return createElement(
            inputComponents[c.type],
            {
                item: c,
                index,
                parent,
                key: `comp-zone-${idx}`
            }
        );
    };

    return (
        <ColumnContainer
            innerRef={drop}
            width={width}
            canDrop={canDrop && content.length === 0}
            isOver={isOver}>
            {content.length > 0
                ? content.map((c, idx) => renderContent(c, idx))
                : <ColumnEmpty canDrop={canDrop && content.length === 0}
                    isOver={isOver} />}
        </ColumnContainer>
    )
}

export default ColumnDropZone;