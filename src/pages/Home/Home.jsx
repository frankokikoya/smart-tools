import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Home = () => {
  const navigate = useNavigate();
  const { session, removeSession } = useAuth();

  const logout = () => {
    removeSession();
    navigate("/login");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100vw",
              p: 1,
              justifyContent: "space-between",
            }}
          >
            <Box
              component="img"
              alt="logo-kikoya"
              src="imgs/logo-login.svg"
              sx={{ width: "10vw", height: "7vh" }}
            />

            <Box sx={{ flexWrap: "wrap", display: "flex", width: "70vw" }}>
              <Button startIcon={<CheckCircleOutlineIcon/>} sx={{ my: 2, ml: 2, color: "white", textTransform: "none" }}>Cotizaciones</Button>
              <Button startIcon={<Inventory2OutlinedIcon/>} sx={{ my: 2, ml: 2, color: "white", textTransform: "none" }}>Productos/Planes</Button>
              <Button startIcon={<ArticleOutlinedIcon/>} sx={{ my: 2, ml: 2, color: "white", textTransform: "none" }}>Catálogos</Button>
              <Button startIcon={<SettingsOutlinedIcon/>} sx={{ my: 2, ml: 2, color: "white", textTransform: "none" }}>Configuración</Button>
            </Box>

            <Box sx={{ flexWrap: "wrap", display: "flex", width: "15vw" }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="avatar-kikoya" src="imgs/avatar.svg" />
              </IconButton>
              <Button size="large" endIcon={<ArrowDropDownIcon />} sx={{ color: "white", textTransform: "none"}}>
                <Box sx={{ width: "100%" }}>Bienvenido, {session.user.name}</Box>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
