import React, { useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { formatBytes } from '../../../../utilities/formatBytes.utility';
import { useArray } from '../../../../hooks';
import { uploadStyles } from './sxStyles';

export const StepTwo = () => {
    const [fileInfo, setFileInfo] = useState({ name: null, size: null });
    const [selectedFile, setSelectedFile] = useState(null);
    const { array: fileErrors, push: addError, clear: clearErrors } = useArray([]);
    const fileInput = useRef(null);

    const handleOnChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        file.size > 150000 && addError('El archivo excede el peso permitido');
        file.type !== 'text/csv' && addError(`La extensión "${file.type}" no está permitida, sólo .CSV`);
        setSelectedFile(file);
        setFileInfo({ name: file.name, size: formatBytes(file.size) });
    };

    const handleDeleteFile = () => {
        setSelectedFile(null);
        setFileInfo({ name: null, size: null });
        clearErrors();
    };

    return (
        <Box
            sx={uploadStyles.stepTwoContainer}>
            {
                fileErrors.length === 0 && <Typography>
                    En este apartado podrás subir tu información correspondiente al sistema para generar los resultados.
                </Typography>
            }
            {
                !selectedFile?.type
                    ? <label htmlFor="upload-file" style={{ marginTop: '5%' }}>
                        <input
                            id="upload-file"
                            type="file"
                            accept="text/csv"
                            ref={fileInput}
                            onChange={handleOnChange}
                            style={{ display: 'none' }}
                        />
                        <Button
                            component="span"
                            variant="contained"
                            color="secondary"
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
                            borderColor: fileErrors.length > 0 ? 'red' : '#ccc',
                        }}>
                        <Typography sx={uploadStyles.textInfo}>
                            {fileErrors.length > 0 && <CancelIcon fontSize='large' sx={{ mr: 2, color: 'red' }} />}
                            <FileCopyIcon sx={{ mr: 1 }} />
                            <span style={uploadStyles.fileName}>
                                {fileInfo.size && `${fileInfo.name}`}
                            </span>
                            {fileInfo.size && `(${fileInfo.size})`}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                            <Button
                                component="span"
                                variant="contained"
                                color="primary"
                                onClick={handleDeleteFile}
                                sx={{ textTransform: "none", borderRadius: 10 }}>
                                <Typography sx={uploadStyles.buttonFile}>
                                    Elegir otro
                                </Typography>
                            </Button>
                            {
                                fileErrors.length === 0
                                    ? <Button
                                        component="span"
                                        variant="contained"
                                        color="secondary"
                                        sx={{ textTransform: "none", borderRadius: 10, ml: 3 }}>
                                        <Typography sx={uploadStyles.buttonFile}>
                                            Validar
                                        </Typography>
                                    </Button>
                                    : <></>
                            }
                        </Box>
                    </Box>
            }
            {
                fileErrors.length > 0 && <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }} >
                    <Typography sx={{ mt: 2 }}>
                        CARGA INCORRECTA. FAVOR DE INTENTAR NUEVAMENTE
                    </Typography>
                </Box>
            }
            {
                fileErrors.length > 0 && <Box
                    sx={uploadStyles.errorContainer}>
                    <ErrorOutlineIcon sx={{ color: 'secondary.main', fontSize: 80, mt: 5 }} />
                    <Typography sx={{ mt: 3 }}>
                        {fileErrors.length > 0 && fileErrors.join('. ')}
                    </Typography>
                </Box>
            }
        </Box>
    )
};
