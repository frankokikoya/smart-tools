import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { uploadStyles } from "./sxStyles"
import { StepperUpload } from "./StepperUpload";

const UploadCatalog = ({ step, handleNext }) => {

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

export default UploadCatalog;