import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = {
    LeftContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        p: 1,
        // border: "3px solid black",
    },
    firtsItemLeft: {
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        height: "90%",
        // border: "3px solid green",
    },

};

export const LoginLeft = () => {
    const { LeftContainer, firtsItemLeft } = useStyles;
    return (
        <Box sx={{ ...LeftContainer }}>
            <Box sx={{ ...firtsItemLeft }}>
                <Typography
                    component={Box}
                    variant='h2'
                    color='common.white'
                    sx={{ width: "50%", fontWeight: "bold" }}
                    gutterBottom>
                    ¡Vamos tras bambalinas!
                </Typography>
                <Typography
                    component={Box}
                    variant='h6'
                    color='common.white'
                    sx={{ width: "50%", fontWeight: "bold", fontSize: 30 }}
                    gutterBottom
                >
                    Inicia tu sesión en Kikoya para gestionar tu cotizador
                </Typography>
                <Typography
                    component={Box}
                    variant='h6'
                    color='common.white'
                    sx={{ fontSize: 22 }}
                    gutterBottom>
                    Realiza otra cotización, aquí
                </Typography>
            </Box>
            <Box sx={{ height: "10%" }}
            >
                <Typography
                    variant='h6'
                    color='common.white'
                    component={Box}
                    sx={{ m: 2, fontWeight: "bold", fontSize: 30 }}
                    gutterBottom
                >
                    Smooth Journeys. Smart Decisions.
                </Typography>
            </Box>
        </Box>
    );
};
