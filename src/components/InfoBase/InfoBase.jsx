import React from 'react';

import { Grid, AppBar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

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
}, { index: 1 });

const sxStyles = {
    appBarBox: {
        height: "10%",
        background: "transparent",
        boxShadow: "none",
    },
    boxContent: { display: "flex", flexDirection: "column", width: "70%" },
    texTitle: { fontWeight: "bold", width: "70%", alignSelf: "center", textAlign: "center" },
    texContent: { width: "40%", alignSelf: "center", textAlign: "center" },
    boxButton: { display: "flex", flexWrap: "wrap", justifyContent: "center" }
};

const InfoBase = ({ imageSrc, imageProps, title, message, children }) => {
    const { gridContainder, content, footerContent, logoItem } = useStyles();
    const { appBarBox, boxContent, texTitle, texContent, boxButton } = sxStyles;
    return (
        <Grid container className={gridContainder}>
            <AppBar position='static' sx={appBarBox}>
                <Box sx={{ flexGrow: 1 }} />
                <Box component='img' sx={{ flexGrow: 0 }} alt='logo-kikoya' src='imgs/logo-kikoya.svg' className={logoItem} />
            </AppBar>
            <Grid container className={content} direction='row' justifyContent='center' alignItems='center'>
                <Box component='div' sx={boxContent}>
                    <Typography
                        variant='h3'
                        color='primary.main'
                        sx={texTitle}
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='span'
                        color='primary.main'
                        sx={texContent}
                        gutterBottom
                    >
                        {message}
                    </Typography>
                    <Box sx={boxButton}>
                        {children}
                    </Box>
                </Box>
            </Grid>
            <footer className={footerContent}>
                <Typography
                    variant='h6'
                    color='primary.main'
                    component={Box}
                    sx={{ ml: 4, fontWeight: "bold", fontSize: 30 }}
                    gutterBottom
                >
                    Smooth Journeys. Smart Decisions.
                </Typography>
                <Box component='img' sx={imageProps} alt='pensando' src={imageSrc} />
            </footer>
        </Grid>

    )
};

InfoBase.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageProps: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export { InfoBase };