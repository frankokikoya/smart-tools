import React, { useContext, useEffect } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, TextField } from '@mui/material';
import { useGridApiContext } from '@mui/x-data-grid';

import { useFetchAndLoad } from '../../../../hooks';
import PreloadContext from '../../context/PreloadContext';
import { createCatalog, deleteCatalog, updateCatalog } from '../../services/catalogs.service';

export default function EditInputCell(props) {
    const { callEndpoint: deleteCall } = useFetchAndLoad();
    const { callEndpoint: catalogCall } = useFetchAndLoad();
    const { id, value = "", field, row } = props;
    const { selectedCellParams, setActionCell, catalog } = useContext(PreloadContext);
    const apiRef = useGridApiContext();

    const handleChange = (event) => {
        // console.log('CHAN ', { rowValue: event.target.value })
        apiRef.current.setEditCellValue({ id, field, value: event.target.value });
    };

    const handleDeleteCell = async () => {
        // console.log('DEL ', { row })
        if (row.id === "NEW") {
            setActionCell({ action: "DELETE", row: { id, value } });
            apiRef.current.stopRowEditMode({ id, ignoreModifications: true });
        } else {
            const { status } = await deleteCall(deleteCatalog(row.id));
            if (status === 200 || row.id === "NEW") {
                setActionCell({ action: "DELETE", row: { id, value } });
                apiRef.current.stopRowEditMode({ id, ignoreModifications: true });
            }
        }
    };

    const saveEditCell = async (event) => {
        // console.log('SAVE VALUE ', row)
        if (id === "NEW") {
            const {
                status,
                data
            } = await catalogCall(createCatalog({
                catalogParent: catalog,
                key: value,
                value
            }));
            if (status === 201) {
                setActionCell({ action: "SAVE", row: { id: data.id, value: data.key } });
                apiRef.current.setEditCellValue({ id, field, value: "" });
            }
        } else {
            const { status } = await catalogCall(updateCatalog({
                id: row.id,
                data: {
                    catalogParent: catalog,
                    key: value,
                    value
                }
            }));
            if (status === 200) {
                apiRef.current.setEditCellValue({ id: row.id, field, value });
                setActionCell({ action: "UPDATE", row: { id: row.id, value } });
                apiRef.current.stopRowEditMode({ id });
            }
        }
    };

    useEffect(() => {
        if (selectedCellParams?.id !== row.id) {
            apiRef.current.stopRowEditMode({ id: row.id, ignoreModifications: true });
        }

    }, [row, selectedCellParams, apiRef]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pr: 2, width: '100%' }}>
            <TextField
                fullWidth
                variant='outlined'
                name='editing-cell'
                value={value ? value : ''}
                onChange={handleChange}
                size='small'
                margin='none'
                autoFocus
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#bdbdbd',
                        },
                    },
                }}
            />
            <IconButton component='span' onClick={handleDeleteCell}>
                <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
            <Button
                variant='contained'
                color='secondary'
                onClick={saveEditCell}
                disabled={value.trim().length === 0}
                sx={{ textTransform: 'none', color: 'white' }}
            >
                Guardar
            </Button>
        </Box>
    );

};