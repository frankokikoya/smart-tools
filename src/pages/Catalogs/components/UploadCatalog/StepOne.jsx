import React, { useContext } from 'react';

import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';

import CatalogContext from '../../context/CatalogContext';



const StepOne = () => {
    const { setActiveStep, isUpdate, setIsUpdate, setUploadStep, setIsEmpty } = useContext(CatalogContext);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setIsUpdate(false);
        setUploadStep(0);
        setIsEmpty(2);
    };

    return (
        <>
            <Typography gutterBottom>
                En este apartado encontrarás la plantilla correspondiente a catálogos. Favor de descargarla y completarla <br /> con la información que deseas incluir.
            </Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', pt: 3, px: 3, mt: 4 }}>
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
                        <li>
                            Usa siempre el mismo <br /> número de columnas de la <br /> plantilla
                        </li>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                {isUpdate && <LoadingButton
                    color='secondary'
                    variant='text'
                    size='medium'
                    onClick={handleBack}
                    sx={{ textTransform: "none", borderRadius: 10, mr: 2 }} >
                    <Typography
                        component='span'
                        color='primary'
                        sx={{ fontWeight: "bold", fontSize: 14 }}>
                        Cancelar
                    </Typography>
                </LoadingButton>}
                <LoadingButton
                    color={isUpdate ? 'primary' : 'secondary'}
                    variant='contained'
                    size='medium'
                    endIcon={<SimCardDownloadIcon sx={{ color: 'white' }} />}
                    // download
                    // href="assets/accesories_template.csv"
                    onClick={handleNext}
                    sx={{ textTransform: "none", borderRadius: 10 }} >
                    <Typography
                        component='span'
                        color='common.white'
                        sx={{ fontWeight: "bold", fontSize: 14 }}>
                        Descargar CSV
                    </Typography>
                </LoadingButton>
                {isUpdate && <LoadingButton
                    color='secondary'
                    variant='contained'
                    size='medium'
                    onClick={handleNext}
                    sx={{ textTransform: "none", borderRadius: 10, ml: 2 }} >
                    <Typography
                        component='span'
                        color='common.white'
                        sx={{ fontWeight: "bold", fontSize: 14 }}>
                        Omitir descarga
                    </Typography>
                </LoadingButton>}
            </Box>
        </>
    )
};

export default StepOne;