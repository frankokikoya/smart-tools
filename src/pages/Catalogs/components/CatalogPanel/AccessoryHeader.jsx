import React from "react";
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { headerStyles } from "./sxStyles";


export const AccessoryHeader = () => {
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
                            <TableCell sx={headerStyles.cellItem}>Franko Campos</TableCell>
                            <TableCell sx={headerStyles.cellItem}>12 de mayo de 2022</TableCell>
                            <TableCell sx={headerStyles.cellItem}>14:00</TableCell>
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
