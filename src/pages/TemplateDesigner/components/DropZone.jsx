import React, { useCallback, useContext } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import update from 'immutability-helper'
import { useDrop } from 'react-dnd';

// import Column from '../components/columns/Column';
import DesignerContext from '../context/DesignerContext';
import { typeColumn } from '../data/DrawerItems';
import OneColumn from './columns/OneColumn';
import ThreeColumn from './columns/ThreeColumn';
import TwoColumn from './columns/TwoColumn';

const DropZone = ({ parent, columns }) => {

    const { setPages } = useContext(DesignerContext);

    const addColumns = (newColumn) => {
        if (!newColumn?.id) {
            setPages(prevPages => {
                return [
                    ...prevPages.map((p, i) => {
                        if (i === parent) {
                            return {
                                ...p,
                                columns: [
                                    {
                                        id: prevPages[parent].columns.length + 1,
                                        type: newColumn.type,
                                        content: newColumn.content
                                    },
                                    ...prevPages[parent].columns
                                ]
                            };
                        }
                        return p;
                    })
                ];
            });
        }
    };

    const [{ canDrop }, drop] = useDrop(() => ({
        accept: [typeColumn.ONE_COLUMN, typeColumn.TWO_COLUMN, typeColumn.THREE_COLUMN],
        drop: (item) => addColumns(item),
        collect: (monitor) => ({
            //isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }));

    const moveColumn = useCallback((dragIndex, hoverIndex) => {

        const dragIdx = dragIndex === undefined ? hoverIndex : dragIndex;

        setPages(prevPages => {
            return [
                ...prevPages.map((p, i) => {
                    if (i === parent) {
                        return {
                            ...p,
                            columns: [
                                ...update(prevPages[parent].columns, {
                                    $splice: [
                                        [dragIdx, 1],
                                        [hoverIndex, 0, prevPages[parent].columns[dragIdx]],
                                    ],
                                })
                            ]
                        };
                    }
                    return p;
                })
            ];
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderColumn = useCallback((c, idx) => {
        //console.log('render ', c)
        return c.type === typeColumn.ONE_COLUMN
            ? <OneColumn
                key={`column-container-${idx}`}
                id={`column-container-${c.id}`}
                type={c.type}
                index={idx}
                content={c.content}
                parent={parent}
                moveColumn={moveColumn} />
            : c.type === typeColumn.TWO_COLUMN
                ? <TwoColumn
                    key={`column-container-${idx}`}
                    id={`column-container-${c.id}`}
                    type={c.type}
                    index={idx}
                    content={c.content}
                    parent={parent}
                    moveColumn={moveColumn} />
                : <ThreeColumn
                    key={`column-container-${idx}`}
                    id={`column-container-${c.id}`}
                    type={c.type}
                    index={idx}
                    content={c.content}
                    parent={parent}
                    moveColumn={moveColumn} />
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Paper
            ref={drop}
            elevation={3}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
                p: 2,
                ...(canDrop ? { border: '2px solid #64b5f6' } : {})
            }}>
            {columns.length === 0
                ? <>
                    <Typography sx={{ color: 'secondary.gold' }}>¡Necesitas añadir columnas!</Typography>
                    <AddCircleOutlineIcon sx={{ color: 'secondary.gold', fontSize: 35 }} />
                </>
                : columns.map((c, idx) => renderColumn(c, idx))
            }
        </Paper>
    )
}

export default DropZone;