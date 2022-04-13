import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoadingButton from "@mui/lab/LoadingButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar, Grid, Typography, TextField, Checkbox } from "@mui/material";

const useStyles = {
  root: {
    height: "100vh",
    width: "100vw",
  },
  menuItem: { my: 2, ml: 2, color: "white", textTransform: "none" },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
  },
};

const columns = [
  {
    field: "folio",
    headerName: "Folio",
    minWidth: 150,
    flex: 0.5,
  },
  {
    field: "prospect",
    headerName: "Prospecto",
    minWidth: 250,
    editable: true,
    flex: 0.5,
  },
  {
    field: "phone",
    headerName: "Teléfono",
    minWidth: 200,
    editable: true,
    flex: 0.5,
  },
  {
    field: "email",
    headerName: "Correo",
    minWidth: 250,
    editable: true,
    flex: 1,
  },
  {
    field: "plan",
    headerName: "Plan",
    minWidth: 150,
    editable: true,
    flex: 0.7,
  },
  {
    field: "createAt",
    headerName: "Fecha",
    minWidth: 110,
    editable: true,
    flex: 0.7,
  },
  {
    field: "amount",
    headerName: "Monto",
    minWidth: 110,
    editable: true,
    flex: 0.5,
  },
  {
    field: "term",
    headerName: "Plazo",
    minWidth: 110,
    editable: true,
    flex: 0.7,
  },
  {
    field: "car",
    headerName: "Vehículo",
    minWidth: 110,
    editable: true,
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    folio: "021",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 2,
    folio: "022",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 3,
    folio: "023",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 4,
    folio: "024",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 5,
    folio: "025",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 6,
    folio: "026",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 7,
    folio: "027",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 8,
    folio: "010",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
  {
    id: 9,
    folio: "011",
    prospect: "Franko",
    phone: "9992334455",
    email: "franko@kikoya.io",
    plan: "Financiamiento",
    createAt: "12/03/2022",
    amount: "$130,000",
    term: "3 años",
    car: "MAZDA",
  },
];

export const Home = () => {
  const navigate = useNavigate();
  const { session, removeSession } = useAuth();

  const { root, content, itemContent, menuItem } = useStyles;

  const logout = () => {
    removeSession();
    navigate("/login");
  };

  return (
    <>
      <Grid container sx={{ ...root }}>
        <Grid item xs={12} sx={{ height: "10vh" }}>
          <AppBar position="static">
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  width: "100vw",
                  p: 1,
                  justifyContent: "space-between",
                }}
              >
                <Box component="img" alt="logo-kikoya" src="imgs/logo-login.svg" sx={{ width: "10vw", height: "7vh" }} />

                <Box sx={{ flexWrap: "wrap", display: "flex", width: "70vw" }}>
                  <Button startIcon={<CheckCircleOutlineIcon />} sx={{ ...menuItem }}>
                    Cotizaciones
                  </Button>
                  <Button startIcon={<Inventory2OutlinedIcon />} sx={{ ...menuItem }}>
                    Productos/Planes
                  </Button>
                  <Button startIcon={<ArticleOutlinedIcon />} sx={{ ...menuItem }}>
                    Catálogos
                  </Button>
                  <Button startIcon={<SettingsOutlinedIcon />} sx={{ ...menuItem }}>
                    Configuración
                  </Button>
                </Box>

                <Box sx={{ flexWrap: "wrap", display: "flex", width: "15vw" }}>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="avatar-kikoya" src="imgs/avatar.svg" />
                  </IconButton>
                  <Button size="large" endIcon={<ArrowDropDownIcon />} sx={{ color: "white", textTransform: "none" }}>
                    <Box sx={{ width: "100%" }}>Bienvenido, {session.user.name}</Box>
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sx={{ height: "90vh" }}>
          <Box sx={{ ...content }}>
            <Box
              sx={{
                ...itemContent,
                height: "8%",
                alignContent: "center",
                p: 1,
              }}
            >
              <Typography component={Box} variant="h5" color="secondary" sx={{ fontWeight: "bold", ml: 2 }} gutterBottom>
                <CheckCircleOutlineIcon /> Cotizaciones
              </Typography>
            </Box>
            <Box
              sx={{
                ...itemContent,
                height: "9%",
                alignContent: "center",
                p: 1,
              }}
            >
              <TextField id="email" size="small" label="Correo electrónico" variant="outlined" sx={{ ml: 2 }} />
              <TextField id="phone" size="small" label="Celular" variant="outlined" sx={{ ml: 2 }} />
              <TextField id="applicant" size="small" label="Solicitante" variant="outlined" sx={{ ml: 2 }} />
              <TextField id="folio" size="small" label="Folio" variant="outlined" sx={{ ml: 2 }} />
              <LoadingButton
                type="submit"
                variant="contained"
                size="medium"
                // loading={loading}
                sx={{
                  textTransform: "none",
                  borderRadius: 10,
                  width: "10%",
                  ml: 2,
                }}
              >
                <Typography component="span" color="common.white" sx={{ fontWeight: "bold", fontSize: 14 }}>
                  Buscar
                </Typography>
              </LoadingButton>
            </Box>
            <Box sx={{ ...itemContent, height: "82%" }}>
              <DataGrid
                rows={rows} 
                columns={columns} 
                checkboxSelection 
                disableSelectionOnClick
                disableColumnMenu
                pageSize={10} 
                rowsPerPageOptions={[5, 10, 20]}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
