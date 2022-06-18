import React from 'react';

import Box from '@mui/material/Box';

const useStyles = {
    RightContainer: {
        display: "flex",
        flexDirection: "column",
        // border: "3px solid grey",
    },
    backGroundItem: {
        flexWrap: "wrap",
        display: "flex",
        height: "15vh",
        flexDirection: "row-reverse",
        bgcolor: "background.paper",
        // border: "3px solid red",
    },
    logoItem: {
        m: 2,
        // border: "3px solid purple",
        maxWidth: "60%",
        maxHeight: "60%",
    },
    loginContent: {
        flexWrap: "wrap",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "85vh",
        // border: "3px solid green",
    },
};

export const LoginRight = ({ children }) => {
    const { RightContainer, backGroundItem, logoItem, loginContent } = useStyles;

    return (
        <Box sx={{ ...RightContainer }}>
            <Box sx={{ ...backGroundItem }}>
                <Box component='img' alt='logo-kikoya' src='imgs/logo-kikoya.svg' sx={{ ...logoItem }} />
            </Box>
            <Box sx={{ ...loginContent }}>
                <Box component='div' sx={{ height: "65%", width: "70%" }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};
