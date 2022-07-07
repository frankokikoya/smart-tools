import React, { useCallback, useContext, useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { CatalogAdapter, PaginationAdapter } from '../../../../adapters/catalogs.adapter';
import { NoRows } from '../../../../components/DataGridBox/NoRows';
import MainButton from '../../../../components/MainButton';
import { useArray, useAsync, useFetchAndLoad } from '../../../../hooks';
import PreloadContext from '../../context/PreloadContext';
import { preloadColumns } from '../../data/Catalogs.data';
import { getCatalog } from '../../services/catalogs.service';
import { preloadStyles } from './styles';


const AccordionGrid = ({ id }) => {
    const { actionCell, setActionCell, setCatalog } = useContext(PreloadContext);
    const { loading, callEndpoint } = useFetchAndLoad();
    const { array: rows, set: setRows, unshift: addRow, filter: filterRows } = useArray([]);
    const [reload, setReload] = useState(false);
    // pagination
    const [pageInfo, setPageInfo] = useState({});
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [rowCountState, setRowCountState] = useState(pageInfo?.totalElements || 0);

    const handleCellEdit = useCallback(
        (params, event) => {
            event.defaultMuiPrevented = true;
        }, []);

    const handleClick = () => {
        setActionCell({ action: "ADD", row: { id: "NEW", value: "", isNew: true } });
    };
    // CRUD CATALOGS
    /* GET ALL*/
    const getApiData = async () => await callEndpoint(getCatalog({ id, page, size: pageSize }));
    const adapData = ({ data, status }) => {
        console.log({ data, status });
        if (status === 200) {
            setPageInfo(PaginationAdapter(data))
            setRows(data.content.map(catalog => CatalogAdapter(catalog)));
        }
    };
    // catch error
    const catchError = (error) => {
        console.log(error);
        // if (error?.status === 403) dispatch(showError({ title: "Error", message: "Fobidden" }));
    }

    useEffect(() => {
        setCatalog(id);
    }, [id, setCatalog]);

    useEffect(() => {
        setRowCountState((prevRowCountState) =>
            pageInfo?.totalElements !== undefined
                ? pageInfo?.totalElements
                : prevRowCountState,
        );
    }, [pageInfo?.totalElements, setRowCountState]);

    useEffect(() => {
        const { action, row } = actionCell;
        if (action !== "") {
            if (action === "ADD") {
                const existRow = rows.find(r => r.id === row.id);
                !existRow && addRow(row)
            }
            if (action === "SAVE") {
                filterRows((r) => (r.id !== "NEW"));
            }
            setActionCell({ action: "", row: { id: "", value: "" } });
        }
    }, [
        rows,
        addRow,
        filterRows,
        actionCell,
        setActionCell,
    ]);

    useEffect(() => {
        console.log({ action: actionCell?.action, pageInfo: pageInfo.totalPages });
        if (actionCell.action !== "") {
            // actionCell.action === "SAVE" && setReload((prev) => !prev);
            if (actionCell.action === "SAVE") {
                // const to = pageInfo.last ? pageInfo.totalPages + 1 : pageInfo.totalPages;
                console.log({ total: pageInfo.totalPages })
                setReload((prev) => !prev);
                //setPage(to);
            }
            actionCell.action === "UPDATE" && setReload((prev) => !prev);
            actionCell.action === "DELETE" && setReload((prev) => !prev);
        }
    }, [actionCell.action, pageInfo?.totalPages, setReload]);
    // ASYNC CALL
    useAsync(getApiData, adapData, catchError, () => { }, [page, pageSize, reload]);

    return (
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
            <MainButton
                text='Añadir registro'
                textColor='common.white'
                color='secondary'
                variant='contained'
                size='medium'
                endIcon={<AddIcon sx={{ color: 'white' }} />}
                handleClick={handleClick}
                sx={preloadStyles.mainButton}
                textSx={{ fontWeight: "bold", fontSize: 14 }}
            />
            <DataGrid
                loading={loading}
                rows={rows}
                columns={preloadColumns}
                paginationMode='server'
                pagination
                rowCount={rowCountState}
                rowsPerPageOptions={[5, 10, 20]}
                page={page}
                pageSize={pageSize}
                onPageChange={(newPage) => setPage(newPage)}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                disableColumnMenu
                editMode='row'
                autoHeight
                onCellKeyDown={handleCellEdit}
                onCellDoubleClick={handleCellEdit}
                sx={preloadStyles.grid}
                components={{
                    NoRowsOverlay: NoRows,
                    NoResultsOverlay: NoRows,
                }}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )
}

export default AccordionGrid;