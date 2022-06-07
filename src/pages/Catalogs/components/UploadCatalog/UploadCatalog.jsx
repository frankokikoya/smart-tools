import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { uploadStyles } from "./sxStyles"
import { StepperUpload } from "./StepperUpload";

export const UploadCatalog = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //    setStep((prevActiveStep) => prevActiveStep - 1);
  //  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <>
      {
        step === 0
          ? <Box
            sx={uploadStyles.container} >
            <Typography>
              Aún no has añadido ningún catálogo. Da click
            </Typography>
            <Typography sx={{ mb: 2 }}>
              en el botón para cargar uno.
            </Typography>
            <LoadingButton
              color="secondary"
              variant="contained"
              size="medium"
              onClick={handleNext}
              sx={uploadStyles.buttonStyles} >
              <Typography component="span" color="common.white" sx={uploadStyles.buttonText}>
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