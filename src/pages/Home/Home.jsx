import React from "react";
import * as Yup from "yup";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Typography } from "@mui/material";
import { FilterTextInput } from "./components/FilterBox/FilterTextInput";
import { SubMenuSelected } from "./components/SubMenuSelected";
import { FilterBox } from "../Home/components/FilterBox";
import { DataGridCustom } from "../Home/components/DataGridCustom";
import { rows, columns } from "./data/Home.data";

export const Home = () => {
  const initialValues = {
    email: "",
    phone: "",
    applicant: "",
    folio: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Formato inválido"),
    phone: Yup.string(),
    applicant: Yup.string(),
    folio: Yup.string(),
  });

  return (
    <>
      <SubMenuSelected>
        <Typography component={Box} variant="h5" color="secondary" sx={{ fontWeight: "bold", ml: 2 }} gutterBottom>
          <CheckCircleOutlineIcon /> Cotizaciones
        </Typography>
      </SubMenuSelected>
      <FilterBox initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <FilterTextInput name="email" size="small" label="Correo electrónico" variant="outlined" sx={{ ml: 2 }} />
        <FilterTextInput name="phone" size="small" label="Celular" variant="outlined" sx={{ ml: 2 }} />
        <FilterTextInput name="applicant" size="small" label="Solicitante" variant="outlined" sx={{ ml: 2 }} />
        <FilterTextInput name="folio" size="small" label="Folio" variant="outlined" sx={{ ml: 2 }} />
        <LoadingButton
          type="submit"
          variant="contained"
          size="medium"
          // loading={loading}
          sx={{
            textTransform: "none",
            borderRadius: 10,
            width: "10%",
            height: "45%",
            ml: 2,
          }}
        >
          <Typography component="span" color="common.white" sx={{ fontWeight: "bold", fontSize: 14 }}>
            Buscar
          </Typography>
        </LoadingButton>
      </FilterBox>
      <DataGridCustom rows={rows} columns={columns} />
    </>
  );
};
