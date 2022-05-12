import React, { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button, TextField, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useArray, useFetchAndLoad, useAsync } from "../../../hooks";
import { getUsers, createUser, deleteUser } from "./services/users.service";
import { userAdapter } from "../../../adapters/user.adapter";
import { showError } from "../../../redux/states/ErrorSlice";
import { NoRows } from "../../../components/DataGridBox/NoRows";
import { MainBox } from "../../../components/MainBox";
import { FormDialog } from "../../../components/FormDialog";
import CreateUserForm from "./components/CreateUserForm";
import { columns } from "../data/Products.data";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";

export const Products = () => {
  const dispatch = useDispatch();
  const { loading, callEndpoint } = useFetchAndLoad();
  const { array: users, set: setUsers, push: addUser, filter } = useArray([]);

  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemDelete, setItemDelete] = useState({ name: "", id: 0 });

  // Modal Create
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal Confirm
  const handleCloseConfirm = () => {
    setItemDelete({ name: "", id: 0 });
    setOpenConfirm(false);
  };
  // CRUD USERS
  /* GET ALL */
  const getApiData = async () => await callEndpoint(getUsers());
  /* CREATE */
  const onSubmit = async (values, { setFieldError }) => {
    try {
      const { data } = await callEndpoint(createUser(values));
      addUser(userAdapter(data));
      setOpen(false);
    } catch (error) {
      // setOpen(false);
      if (error?.response?.status === 400) {
        const { errors = [] } = error.response.data;
        errors.forEach((err) => {
          setFieldError(err.entity, err.message)
        });
      }
    }
  };
  /* DELETE */
  const actionDEleteUser = useCallback(
    ({ row }) => () => {
      setItemDelete({ name: row.name, id: row.id });
      setOpenConfirm(true);
    },
    [setItemDelete, setOpenConfirm]
  );

  const confirmDelete = async () => {
    try {
      await callEndpoint(deleteUser(itemDelete.id));
      filter((row) => row.id !== itemDelete.id);
      setItemDelete({ name: "", id: 0 });
      setOpenConfirm(false);
    } catch (error) {
      setItemDelete({ name: "", id: 0 });
      setOpenConfirm(false);
      if (error?.response?.data) dispatch(showError({ title: "Error", message: error.response.data.message }));
    }
  };

  const adaptUsers = ({ data: { content = [] } }) => {
    setUsers(content.map(user => userAdapter(user)));
  };

  const catchError = (error) => {
    if (error?.status === 403) dispatch(showError({ title: "Error", message: "Fobidden" }));
  };

  useAsync(getApiData, adaptUsers, catchError, () => { }, []);

  // Grid
  const actionsColumn = {
    field: "actions",
    type: 'actions',
    headerName: "Acciones",
    minWidth: 110,
    flex: 0.8,
    getActions: (params) => [
      <GridActionsCellItem icon={<EditOutlinedIcon color="secondary" />} label="Editar" onClick={actionDEleteUser(params)} />,
      <GridActionsCellItem icon={<PowerSettingsNewOutlinedIcon color="secondary" />} label="On, off" onClick={actionDEleteUser(params)} />,
      <GridActionsCellItem icon={<DeleteOutlineOutlinedIcon color="secondary" />} label="Eliminar" onClick={actionDEleteUser(params)} />,
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
        <Button onClick={handleClickOpen} color="primary" endIcon={<PersonAddAltOutlinedIcon />} variant="contained" sx={{ ml: "auto", textTransform: "none", borderRadius: 10 }}>
          Crear usuario
        </Button>
      </MainBox.SearchBox>
      <MainBox.GridBox>
        <DataGrid
          rows={users}
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
      <FormDialog open={open} handleClose={handleClose} fullWidth maxWidth="md">
        <FormDialog.Title handleClose={handleClose}>
          <Typography component="div" variant="h5" sx={{ color: "secondary.main", pl: 2, pt: 2 }}>
            Agregar usuario
          </Typography>
        </FormDialog.Title>
        <FormDialog.Content>
          <CreateUserForm handleClose={handleClose} onSubmit={onSubmit} loading={loading} />
        </FormDialog.Content>
      </FormDialog>
      <ConfirmDialog open={openConfirm} handleClose={handleCloseConfirm}>
        <ConfirmDialog.Title>
          Confirmación de acción
        </ConfirmDialog.Title>
        <ConfirmDialog.Content>
          ¿ Estás seguro de elminar al usuario <strong>{itemDelete.name}</strong> ?
        </ConfirmDialog.Content>
        <ConfirmDialog.Actions>
          <Button onClick={handleCloseConfirm} autoFocus>Cancelar</Button>
          <Button onClick={confirmDelete}>Aceptar</Button>
        </ConfirmDialog.Actions>
      </ConfirmDialog>
    </MainBox>
  );
};
