import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';

import { InfoBase } from '../../components/InfoBase';

const sxStyles = {
    buttonStyle: { width: "20%", textTransform: "none", borderRadius: 10, p: 1 },
    buttonText: { fontWeight: "bold", fontSize: 14 },
    imageProps: { position: "absolute", bottom: "10%", left: "85%" }
};

export const ErrorSystem = () => {
    const { buttonStyle, buttonText, imageProps } = sxStyles;
    const imageSrc = "imgs/pensando.svg";
    const title = "¡Upss!";
    const message = "No pudimos crear tu contraseña. Por favor intenta nuevamente";
    return (
        <InfoBase imageSrc={imageSrc} imageProps={imageProps} title={title} message={message}>
            <LoadingButton
                color='secondary'
                variant='contained'
                size='medium'
                sx={buttonStyle}
            >
                <Typography component='span' color='common.white' sx={buttonText}>
                    Ingresa una contraseña nueva
                </Typography>
            </LoadingButton>
        </InfoBase>
    )
};