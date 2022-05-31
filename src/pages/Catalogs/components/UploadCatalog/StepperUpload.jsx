import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { Box, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';


const steps = [
  {
    id: 'DWN-1',
    label: 'Descargar plantilla',
    description: `Descargar plantilla base y
                  llénala en tu programa de
                  hoja de cálculo favorito.`,
  },
  {
    id: 'DWN-2',
    label: 'Cargar plantilla',
    description:
      'Adjunta el archivo que descargasta ya llenado.',
  },
  {
    id: 'DWN-3',
    label: 'Subir',
    description:
      `Subiremos los registros (filas) para que uses tu catálogo.`,
  },
];

export const StepperUpload = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', width: '95%', ml: '2%' }}>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ maxWidth: '15%' }}>
        {
          steps.map(step => (
            <Step key={step.id}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))
        }
      </Stepper>
      <Box sx={{ ml: '5%', width: '50%' }}>
        <Typography gutterBottom>
          En este apartado encontrarás la plantilla correspondiente a catálogos. Favor de descargarla y completarla <br /> con la información que deseas incluir.
        </Typography>
        <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', pt: 3, px: 3 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Cómo preparar tu archivo correctamente
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box component='ul'>
              <li>Tamaño máximo de 25MB</li>
              <li>Formato del archivo .CSV</li>
            </Box>
            <Box component='ul'>
              <li>
                Considera el tipo de dato <br /> definido en cada columna de <br /> la pantalla: Ej. Texto plano, <br /> números, fechas, etc.
              </li>
            </Box>
            <Box component='ul'>
              <li>Tamaño máximo de 25MB</li>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <LoadingButton
            color="secondary"
            variant="contained"
            size="medium"
            endIcon={<SimCardDownloadIcon sx={{ color: 'white' }}/>}
            sx={{ textTransform: "none", borderRadius: 10 }} >
            <Typography 
              component="span" 
              color="common.white" 
              sx={{ fontWeight: "bold", fontSize: 14 }}>
              Descargar CSV
            </Typography>
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}