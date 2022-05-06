import React from "react";
import { Grid, AppBar, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    gridContainder: {
        height: "100vh",
        width: "100vw",
        background: "url(imgs/kikoya-tree.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 80%",
        backgroundPosition: "left -20em bottom 1em",
    },
    content: {
        height: "80%",
        width: "100%",
        margin: 0,
    },
    footerContent: {
        display: "flex",
        width: "100%",
        height: "10%",
        bottom: 0,
        position: "relative",
    },
    logoItem: {
        marginLeft: "80%",
        maxWidth: "75%",
        maxHeight: "75%",
    },
});

const sxStyles = {
    appBarBox: {
        height: "10%",
        background: "transparent",
        boxShadow: "none",
    },
    boxContent: { display: "flex", flexDirection: "column", width: "60%" },
    texTitle: { fontWeight: "bold", width: "60%", alignSelf: "center" },
    texContent: { width: "40%", alignSelf: "center", textAlign: "center" },
    boxButton: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
    buttonStyle: { width: "20%", textTransform: "none", borderRadius: 10, p: 1 },
    buttonText: { fontWeight: "bold", fontSize: 14 }
};

const ErrorToken = () => {
    const { gridContainder, content, footerContent, logoItem } = useStyles();
    const { appBarBox, boxContent, texTitle, texContent, boxButton, buttonStyle, buttonText } = sxStyles;
    return (
        <Grid container className={gridContainder}>
            <AppBar position="static" sx={appBarBox}>
                <Box sx={{ flexGrow: 1 }} />
                <Box component="img" sx={{ flexGrow: 0 }} alt="logo-kikoya" src="imgs/logo-kikoya.svg" className={logoItem} />
            </AppBar>
            <Grid container className={content} direction="row" justifyContent="center" alignItems="center">
                <Box component="div" sx={boxContent}>
                    <Typography
                        variant="h3"
                        color="primary.main"
                        sx={texTitle}
                        gutterBottom
                    >
                        Upss... ha ocurrido un error
                    </Typography>
                    <Typography
                        variant="span"
                        color="primary.main"
                        sx={texContent}
                        gutterBottom
                    >
                        El token ha expirado y/o se utilizó más de una vez, restablece tu contraseña
                    </Typography>
                    <Box sx={boxButton}>
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
                    </Box>
                </Box>
            </Grid>
            <footer className={footerContent}>
                <Typography
                    variant="h6"
                    color="primary.main"
                    component={Box}
                    sx={{ ml: 4, fontWeight: "bold", fontSize: 30 }}
                    gutterBottom
                >
                    Smooth Journeys. Smart Decisions.
                </Typography>
                <Box component="img" sx={{ position: "absolute", bottom: "10%", left: "85%" }} alt="pensando" src="imgs/pensando.svg" />
            </footer>
        </Grid>

    )
}

export default ErrorToken;