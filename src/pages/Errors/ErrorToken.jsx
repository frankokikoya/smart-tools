import React from "react";
import { Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ErrorBase } from "./ErrorBase";

const sxStyles = {
    buttonStyle: { width: "20%", textTransform: "none", borderRadius: 10, p: 1 },
    buttonText: { fontWeight: "bold", fontSize: 14 }
};

export const ErrorToken = () => {
    const { buttonStyle, buttonText } = sxStyles;
    const imageSrc = "imgs/pensando.svg";
    const title = "Upss... ha ocurrido un error";
    const message = "El token ha expirado y/o se utilizó más de una vez, restablece tu contraseña";
    return (
        <ErrorBase imageSrc={imageSrc} title={title} message={message}>
            <LoadingButton
                color="secondary"
                variant="contained"
                size="medium"
                sx={buttonStyle}
            >
                <Typography component="span" color="common.white" sx={buttonText}>
                    Restablecer contraseña
                </Typography>
            </LoadingButton>
        </ErrorBase>
    )
};