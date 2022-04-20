import React, { useEffect } from "react";
import * as Yup from "yup";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FilterTextInput } from "./components/FilterTextInput";
import { MainBox } from "../../components/MainBox";
import { NoRows } from "../../components/DataGridBox/NoRows";
import { rows, columns, inputList } from "./data/Home.data";
import { useArray, useFetchAndLoad } from "../../hooks";
import { getUsers } from "../Login/services/login.service";

export const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const { array: users, set: setUsers } = useArray([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { content } } = await callEndpoint(getUsers());
        console.log(content);
        setUsers(content);
      } catch (error) {
        console.log("ERROR", error);
      }
      
    };
    fetchData();
    // if(!loading) fetchData();
  }, []);

  return (
    <MainBox>
      <MainBox.SubMenu>
        <Typography component={Box} variant="h5" color="secondary" sx={{ fontWeight: "bold", ml: 2 }} gutterBottom>
          <CheckCircleOutlineIcon /> Cotizaciones {`${loading} - ${users.length}`}
        </Typography>
      </MainBox.SubMenu>
      <MainBox.FilterBox initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {inputList.map(({ id, name, label }) => {
          return <FilterTextInput key={`${id}-${name}`} name={name} label={label} size="small" variant="outlined" sx={{ ml: 2 }} />;
        })}
        <LoadingButton
          type="submit"
          variant="contained"
          size="medium"
          sx={{ textTransform: "none", borderRadius: 10, width: "10%", height: "45%", ml: 2 }}
        >
          <Typography component="span" color="common.white" sx={{ fontWeight: "bold", fontSize: 14 }}>
            Buscar
          </Typography>
        </LoadingButton>
      </MainBox.FilterBox>
      <MainBox.GridBox>
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
      </MainBox.GridBox>
    </MainBox>
  );
};
