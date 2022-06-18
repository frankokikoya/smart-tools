import React from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';
import { Box, Button, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import ErrorsLocalValidate from './ErrorsLocalValidate';
import { uploadStyles } from './sxStyles';

const StepTwo = ({ ...props }) => {

    return (
        <Box sx={uploadStyles.stepContainer}>
            {
                props.fileErrors.length === 0 && <Typography>
                    En este apartado podrás subir tu información correspondiente al sistema para generar los resultados.
                </Typography>
            }
            {
                !props.selectedFile?.type
                    ? <label htmlFor='upload-file' style={{ marginTop: '5%' }}>
                        <input
                            id='upload-file'
                            type='file'
                            accept='text/csv'
                            onChange={props.handleOnChange}
                            style={{ display: 'none' }}
                        />
                        <Button
                            component='span'
                            variant='contained'
                            color='secondary'
                            endIcon={<UploadFileSharpIcon sx={{ color: "white" }} />}
                            sx={{ textTransform: "none", borderRadius: 10 }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
                                Seleccionar archivo
                            </Typography>
                        </Button>
                    </label>
                    : <Box
                        sx={{
                            ...uploadStyles.fileContainer,
                            borderColor: props.fileErrors.length > 0 ? 'red' : '#ccc',
                        }}>
                        <Typography sx={uploadStyles.textInfo}>
                            {props.loading && <CircularProgress sx={{ color: 'secondary.main', mr: 2 }} />}
                            {props.fileErrors.length > 0 && <CancelIcon fontSize='large' sx={{ mr: 2, color: 'red' }} />}
                            <FileCopyIcon sx={{ mr: 1 }} />
                            <span style={uploadStyles.fileName}>
                                {props.fileInfo.size && `${props.fileInfo.name}`}
                            </span>
                            {props.fileInfo.size && `(${props.fileInfo.size})`}
                        </Typography>
                        {
                            !props.loading && <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Button
                                    component='span'
                                    variant='contained'
                                    color='primary'
                                    onClick={props.handleDeleteFile}
                                    sx={{ textTransform: "none", borderRadius: 10 }}>
                                    <Typography sx={uploadStyles.buttonFile}>
                                        Elegir otro
                                    </Typography>
                                </Button>
                                {
                                    props.fileErrors.length === 0
                                        ? <Button
                                            component='span'
                                            variant='contained'
                                            color='secondary'
                                            onClick={props.sendFile}
                                            sx={{ textTransform: "none", borderRadius: 10, ml: 3 }}>
                                            <Typography sx={uploadStyles.buttonFile}>
                                                Validar
                                            </Typography>
                                        </Button>
                                        : <></>
                                }
                            </Box>
                        }
                    </Box>
            }
            {
                props.fileErrors.length > 0 && <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }} >
                    <Typography component='span' sx={{ mt: 2, fontSize: 11 }}>
                        CARGA INCORRECTA. FAVOR DE INTENTAR NUEVAMENTE
                    </Typography>
                </Box>
            }
            {
                props.fileErrors.length > 0 && <ErrorsLocalValidate fileErrors={props.fileErrors} />
            }
        </Box>
    )
};

export default StepTwo;