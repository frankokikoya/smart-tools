import React, { useState } from 'react';
import { Box, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';


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
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          maxWidth: '15%',
          '.Mui-completed .MuiStepIcon-root': {
            color: 'secondary.main'
          },
          '.Mui-disabled .MuiStepIcon-root': {
            color: '#e0e0e0'
          },
          '.MuiStep-root .Mui-disabled': {
            color: '#bdbdbd'
          },
          '.MuiStep-root .Mui-disabled .MuiStepLabel-label': {
            color: '#bdbdbd'
          },
          '.MuiStep-root .MuiStepLabel-label': {
            fontWeight: 'bold',
            color: 'primary.main'
          }
        }}>
        {
          steps.map((step, i) => (
            <Step key={step.id} expanded={true}>
              <StepLabel>
                {step.label}
              </StepLabel>
              <StepContent sx={{ color: i <= activeStep ? 'primary.main' : '#e0e0e0' }}>
                {step.description}
              </StepContent>
            </Step>
          ))
        }
      </Stepper>
      <Box sx={{ ml: '10%', width: '50%' }}>
        {
          activeStep === 0
            ? <StepOne handleNext={handleNext} />
            : activeStep === 1
              ? <StepTwo />
              : <div>Three</div>
        }
      </Box>
    </Box>
  )
}