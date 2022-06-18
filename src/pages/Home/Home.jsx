import React from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as Yup from 'yup';

import { NoRows } from '../../components/DataGridBox/NoRows';
import MainBox from '../../components/MainBox';
import { FilterTextInput } from './components/FilterTextInput';
import { rows, columns, inputList } from './data/Home.data';

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
    <MainBox>
      <MainBox.SubMenu>
        <Typography component={Box} variant='h5' color='secondary' sx={{ fontWeight: "bold", ml: 2 }} gutterBottom>
          <CheckCircleOutlineIcon /> Cotizaciones
        </Typography>
      </MainBox.SubMenu>
      <MainBox.FilterBox initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {inputList.map(({ id, name, label }) => {
          return <FilterTextInput key={`${id}-${name}`} name={name} label={label} size='small' variant='outlined' sx={{ ml: 2 }} />;
        })}
        <LoadingButton
          type='submit'
          variant='contained'
          size='medium'
          sx={{ textTransform: "none", borderRadius: 10, width: "10%", height: "45%", ml: 2 }}
        >
          <Typography component='span' color='common.white' sx={{ fontWeight: "bold", fontSize: 14 }}>
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
