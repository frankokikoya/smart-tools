import React, { useState } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { headerStyles } from "./sxStyles";
import { useAsync, useFetchAndLoad } from "../../../../hooks";
import { lastProcessed } from "../../services/catalogs.service";
import { AccessoryUser } from "../../../../adapters/accessory.adapter";

const AccessoryHeader = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const [lastUser, setLastUser] = useState({ name: '', createdAt: null });

    const getApiData = async () => await callEndpoint(lastProcessed());

    const adapApiData = ({ data, status }) => {
        console.log({ status, data });
        status === 200 && setLastUser(AccessoryUser(data));
    };

    const catchError = (error) => {
        console.log(error);
        // if (error?.status === 403) dispatch(showError({ title: "Error", message: "Fobidden" }));
    };

    useAsync(getApiData, adapApiData, catchError, () => { }, []);

    return (
        <Box sx={headerStyles.tableBox}>
            <Box component={TableContainer} sx={{ width: "40%" }}>
                <Table aria-label="upload table">
                    <TableHead>
                        <TableRow sx={headerStyles.tableRow}>
                            <TableCell sx={headerStyles.cellHeader}>Subido por:</TableCell>
                            <TableCell sx={headerStyles.cellHeader}>Fecha:</TableCell>
                            <TableCell sx={headerStyles.cellHeader}>Hora:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow sx={headerStyles.tableRow}>
                            <TableCell sx={headerStyles.cellItem}>{loading ? 'Cargando...' : lastUser.name ? lastUser.name : 'Sin datos'}</TableCell>
                            <TableCell sx={headerStyles.cellItem}>{loading ? 'Cargando...' : lastUser.createdAt ? <Moment format="LL">{lastUser.createdAt}</Moment> : 'Sind datos'}</TableCell>
                            <TableCell sx={headerStyles.cellItem}>{loading ? 'Cargando...' : lastUser.createdAt ? <Moment format="LT">{lastUser.createdAt}</Moment> : 'Sin datos'}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Box>
            <Box component={LoadingButton}
                variant="contained"
                size="medium"
                sx={headerStyles.updateButton}
            >
                <Typography component="span" color="common.white" sx={{ fontWeight: "bold", fontSize: 14 }}>
                    Actualizar
                </Typography>
            </Box>
        </Box>
    )
};

export default AccessoryHeader;
