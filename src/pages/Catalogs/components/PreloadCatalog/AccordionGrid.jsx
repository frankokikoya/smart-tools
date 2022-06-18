import React, { useCallback } from 'react'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { NoRows } from '../../../../components/DataGridBox/NoRows'
import { preloadStyles } from './styles'

const AccordionGrid = ({ rows = [], columns }) => {

    const actionEdit = useCallback(
        ({ row }) => () => {
            console.log({ name: row.name, id: row.id });
        },
        []
    );
    const actionsColumn = {
        field: "actions",
        type: 'actions',
        headerName: "",
        minWidth: 110,
        flex: 0,
        getActions: (params) => [
            <GridActionsCellItem icon={<EditOutlinedIcon color='secondary' />} label='Editar' onClick={actionEdit(params)} />
        ],
    };

    return (
        <>
            <DataGrid
                rows={rows}
                columns={[...columns, actionsColumn]}
                autoHeight
                //rowCount={rowCountState}
                //loading={loading}
                disableSelectionOnClick
                rowsPerPageOptions={[5, 10, 20]}
                pagination
                //page={page}
                pageSize={5}
                //paginationMode="server"
                //onPageChange={(newPage) => setPage(newPage)}
                //onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                disableColumnMenu
                components={{
                    NoRowsOverlay: NoRows,
                    NoResultsOverlay: NoRows,
                }}
                sx={preloadStyles.grid}
            />
        </>
    )
}

export default AccordionGrid