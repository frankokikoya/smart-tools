import React, { useContext, useEffect } from 'react';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, IconButton, Typography } from '@mui/material';
import { useGridApiContext } from '@mui/x-data-grid';

import PreloadContext from '../../context/PreloadContext';
// import EditInputCell from './EditInputCell';

export default function StartRenderCell(props) {
    const { id, value, row } = props;
    const { setSelectedCellParams, setActionCell } = useContext(PreloadContext);
    const apiRef = useGridApiContext();

    const handleEditCell = (event) => {
        console.log('handleEditCell')
        setSelectedCellParams({ id })
        apiRef.current.startRowEditMode({ id });
    };

    useEffect(() => {
        // console.log({ row, value })
        if (row?.isNew) {
            setSelectedCellParams({ id });
            setActionCell({ action: "NEW", row: { id: "NEW", value: "", isNew: false } });
            apiRef.current.startRowEditMode({ id });
        }
        if (!row?.isNew && !value) {
            setActionCell({ action: "DELETE", row: { id: "NEW", value: "" } });
        }
    }, [id, row, apiRef, setSelectedCellParams, setActionCell, value]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pr: 2, width: '100%', alignItems: 'center' }}>
            <Typography>{value}</Typography>
            <IconButton color='secondary' component='span' onClick={(e) => handleEditCell(e)}>
                <EditOutlinedIcon />
            </IconButton>
        </Box>
    )
};