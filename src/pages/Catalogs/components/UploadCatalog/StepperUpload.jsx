import React, { useState, useContext } from 'react';

import { Box, Step, StepContent, StepLabel, Stepper } from '@mui/material';

import { useArray, useFetchAndLoad } from '../../../../hooks';
import { formatBytes } from '../../../../utilities/formatBytes.utility';
import CatalogContext from '../../context/CatalogContext';
import { processCSV, validateCSV } from '../../services/catalogs.service';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import { uploadStyles } from './sxStyles';


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
  const { activeStep, setActiveStep } = useContext(CatalogContext);
  const [uploadFile, setUploadFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInfo, setFileInfo] = useState({ name: null, size: null });
  const [validateFile, setValidateFile] = useState({ corrects: 0, errors: 0, total: 0, errorRows: [] });
  // custom hooks
  const { array: fileErrors, push: addError, clear: clearErrors } = useArray([]);
  const { loading: loadingValidate, callEndpoint: callValidate } = useFetchAndLoad();
  const { callEndpoint: callProcess } = useFetchAndLoad();
  // hanlde file
  const handleOnChange = (event) => {
    const file = event.target.files[0];
    file.size > 150000 && addError('El archivo excede el peso permitido');
    file.type !== 'text/csv' && addError(`La extensión "${file.type}" no está permitida, sólo .CSV`);
    setSelectedFile(file);
    setFileInfo({ name: file.name, size: formatBytes(file.size) });
  };
  const handleDeleteFile = () => {
    setSelectedFile(null);
    setFileInfo({ name: null, size: null });
    setValidateFile({ corrects: 0, errors: 0, total: 0, errorRows: [] });
    clearErrors();
    activeStep === 2 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const sendProcessFile = async () => {
    try {
      const { status } = await callProcess(processCSV({ file: selectedFile }));
      status === 200 && setUploadFile(true);
    } catch (e) {
      console.log(e);
    }
  };
  const sendValidateFile = async () => {
    try {
      const { data } = await callValidate(validateCSV({ file: selectedFile }));
      const { corrects, errors, total, errorRows } = data;
      console.log({ corrects, errors, total, errorRows });
      setValidateFile((prev) => ({ ...prev, corrects, errors, total, errorRows }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      errorRows.length === 0 && await sendProcessFile();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', width: '95%', height: '100%', ml: '2%' }}>
      <Stepper
        activeStep={activeStep}
        orientation='vertical'
        sx={uploadStyles.stepperStyle}>
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
      <Box sx={{ ml: '10%', width: '50%', height: '100%' }}>
        {
          activeStep === 0
            ? <StepOne />
            : activeStep === 1
              ? <StepTwo
                loading={loadingValidate}
                fileInfo={fileInfo}
                selectedFile={selectedFile}
                fileErrors={fileErrors}
                handleOnChange={handleOnChange}
                handleDeleteFile={handleDeleteFile}
                sendFile={sendValidateFile}
              />
              : activeStep === 2
                ? <StepThree
                  fileInfo={fileInfo}
                  validateFile={validateFile}
                  handleDeleteFile={handleDeleteFile}
                  sendFile={sendProcessFile}
                  uploadFile={uploadFile}
                />
                : <></>
        }
      </Box>
    </Box>
  )
}