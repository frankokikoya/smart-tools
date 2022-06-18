import React, { useContext } from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Button, Typography } from '@mui/material';

import CatalogContext from '../../context/CatalogContext';
import ErrorAccordion from './ErrorAccordion/ErrorAccordion';
import { uploadStyles } from './sxStyles';

const StepThree = ({ validateFile, fileInfo, handleDeleteFile, sendFile, uploadFile }) => {
    const { setIsUpdate, setActiveStep, setUploadStep, setIsEmpty } = useContext(CatalogContext);

    const handleBack = () => {
        setIsUpdate(false);
        setUploadStep(0);
        setActiveStep(0)
        setIsEmpty(2);
    };

    return (
        <Box sx={uploadStyles.stepContainer}>
            <Box
                sx={{
                    ...uploadStyles.fileContainer,
                    borderColor: validateFile.errorRows.length > 0 ? 'red' : 'green',
                }}>
                <Typography sx={uploadStyles.textInfo}>
                    {validateFile.errorRows.length > 0
                        ? <CancelIcon fontSize='large' sx={{ mr: 2, color: 'red' }} />
                        : <CheckCircleIcon fontSize='large' sx={{ mr: 2, color: 'green' }} />}
                    <FileCopyIcon sx={{ mr: 1 }} />
                    <span style={uploadStyles.fileName}>
                        {fileInfo.size && `${fileInfo.name}`}
                    </span>
                    {fileInfo.size && `(${fileInfo.size})`}
                </Typography>
                {!uploadFile && validateFile.errorRows.length > 0 &&
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Button
                            component='span'
                            variant='contained'
                            color='secondary'
                            onClick={handleDeleteFile}
                            sx={{ textTransform: "none", borderRadius: 10 }}>
                            <Typography sx={uploadStyles.buttonFile}>
                                Elegir otro
                            </Typography>
                        </Button>
                    </Box>}
            </Box>
            <Box
                sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}
            >
                <Typography component='span' sx={{ mt: 2, fontSize: 11, mb: 4 }}>
                    {!uploadFile && validateFile.errorRows.length > 0
                        ? 'CARGA INCORRECTA. FAVOR DE INTENTAR NUEVAMENTE'
                        : 'ARCHIVO SUBIDO CORRECTAMENTE'}
                </Typography>
            </Box>
            {!uploadFile && validateFile.errorRows.length > 0 && <ErrorAccordion errorRows={validateFile.errorRows} />}
            {uploadFile && <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <MailOutlineIcon sx={{ color: 'secondary.main', fontSize: 80, mt: 5 }} />
                <Typography sx={{ mt: 3 }}>
                    {
                        validateFile.errorRows.length > 0
                            ? 'Estamos guardando únicamente los registros correctos. Recibirás una'
                            : 'El archivo se está guardando. Esto puede demorar un'
                    }
                </Typography>
                <Typography>
                    {
                        validateFile.errorRows.length > 0
                            ? 'notificación por correo cuando hayamos terminado.'
                            : 'tiempo, pero te enviaremos una notificación por'
                    }
                </Typography>
                {validateFile.errorRows.length === 0 && <Typography>
                    correo cuando esté listo.
                </Typography>}
            </Box>}
            <Box sx={uploadStyles.tableContainer}>
                <Typography sx={{ fontWeight: "bold" }} gutterBottom>Filas:</Typography>
                <Box sx={uploadStyles.tableItem}>
                    <Typography gutterBottom>Correctas</Typography>
                    <Typography sx={{ fontWeight: 'bold', color: 'green' }} gutterBottom>{validateFile.corrects}</Typography>
                </Box>
                {validateFile.errors > 0 && <Box sx={uploadStyles.tableItem}>
                    <Typography sx={{ color: 'red' }} gutterBottom>Errores</Typography>
                    <Typography sx={{ fontWeight: 'bold', color: 'red' }} gutterBottom>{validateFile.errors}</Typography>
                </Box>}
                <Box sx={uploadStyles.tableItem}>
                    <Typography gutterBottom>Total</Typography>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom>{validateFile.total}</Typography>
                </Box>
                {!uploadFile && validateFile.errors > 0 && <>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', mt: 3 }}>
                        <Typography gutterBottom>
                            Tienes la opción de guardar únicamente las filas que están correctamente procesadas. Toma en cuenta que el proceso toma varios minutos
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', mt: 3, justifyContent: 'flex-end' }}>
                        <Button
                            component='span'
                            variant='contained'
                            color='primary'
                            onClick={sendFile}
                            sx={{ textTransform: "none", borderRadius: 10 }}>
                            <Typography sx={uploadStyles.buttonFile}>
                                Cargar correctos
                            </Typography>
                        </Button>
                    </Box>
                </>}
                {uploadFile && <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', mt: 3, justifyContent: 'flex-end' }}>
                    <Button
                        component='span'
                        variant='contained'
                        color='primary'
                        onClick={handleBack}
                        sx={{ textTransform: "none", borderRadius: 10 }}>
                        <Typography sx={uploadStyles.buttonFile}>
                            Ver registros
                        </Typography>
                    </Button>
                </Box>}
            </Box>

        </Box>
    )
}

export default StepThree;
