import React, { useContext } from 'react';

import { useDrop } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { sideContent, typeColumn } from '../../data/DrawerItems';
import SubTitleDrag from '../TextDraggables/SubTitleDrag';
import TextDrag from '../TextDraggables/TextDrag';
import TitleDrag from '../TextDraggables/TitleDrag';
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
        accept: [typeColumn.TITLE, typeColumn.SUBTITLE, typeColumn.TEXT],
        drop: (item) => addContent({ ...item, side, content: [] }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }));

    const renderContent = (c, idx) => {
        return c.type === typeColumn.TITLE
            ? <TitleDrag
                item={c}
                index={index}
                parent={parent}
                key={`text-zone-${idx}`} />
            : c.type === typeColumn.SUBTITLE
                ? <SubTitleDrag
                    item={c}
                    index={index}
                    parent={parent}
                    key={`text-zone-${idx}`} />
                : <TextDrag
                    item={c}
                    index={index}
                    parent={parent}
                    key={`text-zone-${idx}`} />
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