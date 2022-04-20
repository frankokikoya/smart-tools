import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { NoRows } from "../../../components/DataGridBox/NoRows";
import { MainBox } from "../../../components/MainBox";
import { rows as initialRows, columns } from "../data/Products.data";
import { useArray } from "../../../hooks";

export const Products = () => {
  const { array: rows, filter } = useArray(initialRows);

  const deleteUser = React.useCallback(
    (id) => () => {
      filter((row) => row.id !== id);
    },
    [filter]
  );

  const actionsColumn = {
    field: "actions",
    type: 'actions',
    headerName: "Acciones",
    minWidth: 110,
    flex: 0.8,
    getActions: (params) => [
      <GridActionsCellItem icon={<EditOutlinedIcon color="secondary"/>} label="Editar" onClick={deleteUser(params.id)} />,
      <GridActionsCellItem icon={<PowerSettingsNewOutlinedIcon color="secondary"/>} label="On, off" onClick={deleteUser(params.id)} />,
      <GridActionsCellItem icon={<DeleteOutlineOutlinedIcon color="secondary"/>} label="Eliminar" onClick={deleteUser(params.id)} />,
    ],
  };

  return (
    <MainBox>
      <MainBox.SubMenu>
        <Button color="secondary" startIcon={<PersonOutlineIcon />} sx={{ ml: 2, textTransform: "none" }}>
          Usuarios financieros
        </Button>
        <Button color="primary" startIcon={<SmsOutlinedIcon />} sx={{ ml: 2, textTransform: "none" }}>
          Contacto
        </Button>
        <Button color="primary" startIcon={<ViewInArOutlinedIcon />} sx={{ ml: 2, textTransform: "none" }}>
          Branding
        </Button>
      </MainBox.SubMenu>
      <MainBox.SearchBox>
        <TextField name="search-users" label="Buscar" variant="outlined" size="small" sx={{ ml: 2 }} />
        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Usuarios activos" sx={{ ml: 2 }} />
        <FormControlLabel control={<Checkbox color="secondary" />} label="Usuarios inactivos" sx={{ ml: 2 }} />
        <Button color="primary" endIcon={<PersonAddAltOutlinedIcon />} variant="contained" sx={{ ml: "auto", textTransform: "none", borderRadius: 10 }}>
          Crear usuario
        </Button>
      </MainBox.SearchBox>
      <MainBox.GridBox>
        <DataGrid
          rows={rows}
          columns={[...columns, actionsColumn]}
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
      </MainBox.GridBox>
    </MainBox>
  );
};
