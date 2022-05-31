import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import React from "react";
import { InfoBase } from "../../components/InfoBase";

const sxStyles = {
    buttonStyle: { width: "20%", textTransform: "none", borderRadius: 10, p: 1 },
    buttonText: { fontWeight: "bold", fontSize: 14 },
    imageProps: { position: "absolute", bottom: "10%", left: "70%" }
};

export const SuccessEmailSend = () => {
    const { buttonStyle, buttonText, imageProps } = sxStyles;
    const imageSrc = "imgs/sentado.svg";
    const title = "Correo enviado";
    const message = "Revisa tu bandeja de entrada para generar una nueva contraseña";
    return (
        <InfoBase imageSrc={imageSrc} imageProps={imageProps} title={title} message={message}>
            <LoadingButton
                LinkComponent={RouterLink}
                color="secondary"
                variant="contained"
                size="medium"
                sx={buttonStyle}
                to="/"
            >
                <Typography component="span" color="common.white" sx={buttonText}>
                    Volver al inicio de sesión
                </Typography>
            </LoadingButton>
        </InfoBase>
    )
};