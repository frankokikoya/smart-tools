import React from "react";
import { Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { InfoBase } from "../../components/InfoBase";

const sxStyles = {
    buttonStyle: { width: "20%", textTransform: "none", borderRadius: 10, p: 1 },
    buttonText: { fontWeight: "bold", fontSize: 14 }
};

const SuccessPassword = () => {
    const { buttonStyle, buttonText } = sxStyles;
    const imageSrc = "imgs/pensando.svg";
    const title = "Se ha generado una nueva contraseña";
    const message = "Inicia sesión con tu nueva contraseña";
    return (
        <InfoBase imageSrc={imageSrc} title={title} message={message}>
            <LoadingButton
                color="secondary"
                variant="contained"
                size="medium"
                sx={buttonStyle}
            >
                <Typography component="span" color="common.white" sx={buttonText}>
                    Volver al inicio de sesión
                </Typography>
            </LoadingButton>
        </InfoBase>
    )
};

export { SuccessPassword };