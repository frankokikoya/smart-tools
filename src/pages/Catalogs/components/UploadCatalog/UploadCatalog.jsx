import React, { useContext } from 'react';

import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';

import CatalogContext from '../../context/CatalogContext';
import { StepperUpload } from './StepperUpload';
import { uploadStyles } from './sxStyles'

const UploadCatalog = () => {
  const { uploadStep, setUploadStep } = useContext(CatalogContext);

  const handleNext = () => {
    setUploadStep((prevActiveStep) => prevActiveStep + 1);
  }

  return (
    <>
      {
        uploadStep === 0
          ? <Box
            sx={uploadStyles.container} >
            <Typography>
              Aún no has añadido ningún catálogo. Da click
            </Typography>
            <Typography sx={{ mb: 2 }}>
              en el botón para cargar uno.
            </Typography>
            <LoadingButton
              color='secondary'
              variant='contained'
              size='medium'
              onClick={handleNext}
              sx={uploadStyles.buttonStyles} >
              <Typography component='span' color='common.white' sx={uploadStyles.buttonText}>
                Cargar catálogo
              </Typography>
            </LoadingButton>
          </Box>
          : <Box>
            <StepperUpload />
          </Box>
      }
    </>
  )
};

export default UploadCatalog;