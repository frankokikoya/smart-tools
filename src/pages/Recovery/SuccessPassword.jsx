import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { InfoBase } from '../../components/InfoBase';

const sxStyles = {
    buttonStyle: { width: "20%", textTransform: "none", borderRadius: 10, p: 1 },
    buttonText: { fontWeight: "bold", fontSize: 14 },
    imageProps: { position: "absolute", bottom: "10%", left: "70%" }
};

const SuccessPassword = () => {
    const { buttonStyle, buttonText, imageProps } = sxStyles;
    const imageSrc = "imgs/sentado.svg";
    const title = "Se ha generado una nueva contraseña";
    const message = "Inicia sesión con tu nueva contraseña";
    return (
        <InfoBase imageSrc={imageSrc} imageProps={imageProps} title={title} message={message}>
            <LoadingButton
                LinkComponent={RouterLink}
                color='secondary'
                variant='contained'
                size='medium'
                sx={buttonStyle}
                to='/'
            >
                <Typography component='span' color='common.white' sx={buttonText}>
                    Volver al inicio de sesión
                </Typography>
            </LoadingButton>
        </InfoBase>
    )
};

export { SuccessPassword };