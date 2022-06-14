import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../../data/Accessories.data";
import { NoRows } from "../../../../components/DataGridBox/NoRows";
import { useFetchAndLoad, useAsync, useArray } from "../../../../hooks";
import { getAccessories } from "../../services/catalogs.service";
import { AccessoryAdapter, AccessoryPaginationAdapter } from "../../../../adapters/accessory.adapter";
import { Box } from "@mui/material";
import { gridStyles } from "./sxStyles";

const AccessoryGrid = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const { array: accessories, set: setAccessories } = useArray([]);
    // pagination
    const [pageInfo, setPageInfo] = useState({});
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [rowCountState, setRowCountState] = useState(pageInfo?.totalElements || 0);


    useEffect(() => {
        setRowCountState((prevRowCountState) =>
            pageInfo?.totalElements !== undefined
                ? pageInfo?.totalElements
                : prevRowCountState,
        );
    }, [pageInfo?.totalElements, setRowCountState]);

    // CRUD USERS
    /* GET ALL */
    const getApiData = async () => await callEndpoint(getAccessories({ page, size: pageSize }));

    const adapAccessories = ({ data, status }) => {
        if (status === 200) {
            console.log(data);
            setPageInfo(AccessoryPaginationAdapter(data))
            setAccessories(data.content.map(accessory => AccessoryAdapter(accessory)));
        }
    };

    const catchError = (error) => {
        console.log(error);
        // if (error?.status === 403) dispatch(showError({ title: "Error", message: "Fobidden" }));
    };

    useAsync(getApiData, adapAccessories, catchError, () => { }, [page, pageSize]);
    return (
        <Box sx={gridStyles.gridBox}>
            <DataGrid
                rows={accessories}
                columns={columns}
                rowCount={rowCountState}
                loading={loading}
                disableSelectionOnClick
                rowsPerPageOptions={[5, 10, 20]}
                pagination
                page={page}
                pageSize={pageSize}
                paginationMode="server"
                onPageChange={(newPage) => setPage(newPage)}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                disableColumnMenu
                components={{
                    NoRowsOverlay: NoRows,
                    NoResultsOverlay: NoRows,
                }}
                sx={gridStyles.displayGrid}
            />
        </Box>
    )
};

export default AccessoryGrid;