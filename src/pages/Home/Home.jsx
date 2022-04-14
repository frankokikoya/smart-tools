import React from "react";
import { Box, Grid } from "@mui/material";
import { NavBar } from "../../components/NavBarLayout/NavBar";
import { TitleSelected } from "./components/TitleSelected";
import { FilterBox } from "./components/FilterBox/FilterBox";
import { DataGridCustom } from "./components/DataGridCustom";

const useStyles = {
  root: {
    height: "100vh",
    width: "100vw",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
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
  const { root, content } = useStyles;

  return (
    <>
      <Grid container sx={{ ...root }}>
        <NavBar />
        <Grid item xs={12} sx={{ height: "90%" }}>
          <Box sx={{ ...content }}>
            <TitleSelected title="Cotizaciones" />
            <FilterBox />
            <DataGridCustom rows={rows} columns={columns} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
