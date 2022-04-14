import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NoRows } from "../../../components/DataGridBox/NoRows";

const useStyles = {
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "82%",
  },
};

export const DataGridCustom = ({ rows, columns }) => {
  const { itemContent } = useStyles;

  return (
    <Box sx={{ ...itemContent }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        disableColumnMenu
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        components={{
          NoRowsOverlay: NoRows,
          NoResultsOverlay: NoRows,
        }}
      />
    </Box>
  );
};
