import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { LoginLeft } from "./LoginLeft";
import { LoginRight } from "./LoginRight";

const useStyles = makeStyles({
    gridContainder: {
        height: "100vh",
        width: "100vw",
        margin: 0,
    },
    gridItem: {
        height: "100vh",
        background: "url(imgs/bg-login.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
}, {index: 1});

const LoginGrid = ({ children }) => {
    const { gridContainder, gridItem } = useStyles();
    return (
        <Grid container className={gridContainder}>
            <Grid item xs={6} className={gridItem}>
                <LoginLeft />
            </Grid>
            <Grid item xs={6}>
                <LoginRight>
                    {children}
                </LoginRight>
            </Grid>
        </Grid>
    )
};

LoginGrid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default LoginGrid;