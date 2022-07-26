import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDrop } from 'react-dnd';

import DesignerContext from '../../context/DesignerContext';
import { sideContent, typeColumn } from '../../data/DrawerItems';
import ColumnContainer from './ColumnContainer';
import ColumnEmpty from './ColumnEmpty';

const ColumnDropZone = ({ width, side = sideContent.NO_SIDE, content = [], parent, index }) => {
    const { setPages } = useContext(DesignerContext);

    const addContent = (item) => {
        setPages(prevPages => {
            return [
                ...prevPages.slice(0, parent),
                {
                    ...prevPages[parent],
                    columns: [
                        ...prevPages[parent].columns.map((c, idx) => {
                            if (idx === index) {
                                const getItem = c.content.find((i) => i.side === item.side);
                                if (!getItem) {
                                    c.content = [...c.content, item]
                                }
                            }
                            return c;
                        })
                    ]
                }
            ];
        });
    };

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: [typeColumn.TITLE, typeColumn.SUBTITLE, typeColumn.TEXT],
        drop: (item) => addContent({ ...item, side, content: [], id: content.length + 1 }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }));

    const renderContent = (c, idx) => {
        return <Box
            key={`text-zone-${idx}`}
            sx={{
                m: 1,
                border: '1px dashed #D1D1D1',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '6.6em',
                p: 2,
            }}>
            {
                c.type === typeColumn.TITLE
                    ? <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'primary.main' }}>Título</Typography>
                    : c.type === typeColumn.SUBTITLE
                        ? <Typography variant='h6' sx={{ color: 'primary.main' }}>Subtítulo</Typography>
                        : <Typography sx={{ color: 'primary.main' }}>Texto libre</Typography>
            }
        </Box>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    return (
        <ColumnContainer
            innerRef={drop}
            width={width}
            canDrop={canDrop && content.length === 0}
            isOver={isOver}>
            {
                content.length > 0
                    ? content.map((c, idx) => renderContent(c, idx))
                    : <ColumnEmpty canDrop={canDrop && content.length === 0}
                        isOver={isOver} />
            }
        </ColumnContainer>
    )
}

export default ColumnDropZone;