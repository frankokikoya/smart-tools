import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { NavLinkCustom } from "./NavLinkCustom";
import { useAuth } from "../../hooks";
import { MenuItems } from "./MenuItems";
import Logout from "@mui/icons-material/Logout";

const useSx = {
  boxContent: {
    display: "flex",
    width: "100vw",
    p: 1,
    justifyContent: "space-between",
  },
  boxAvatar: { flexWrap: "wrap", display: "flex", width: "15vw" },
  menuItem: {
    color: "white",
    bgcolor: "secondary.main",
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
      color: "white"
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'secondary.main',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
    '& .MuiListItemIcon-root': {
      color: "white",
    },
  },
  iconRounded: {
    backgroundColor: "secondary.main",
    border: "1px solid white"
  }
};

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const { session, removeSession } = useAuth();
  const { boxContent, boxAvatar, menuItem, iconRounded } = useSx;


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    removeSession();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ ...boxContent }}>
          <Box component="img" alt="logo-kikoya" src="/imgs/logo-login.svg" sx={{ width: "10%", height: "10%" }} />

          <Box sx={{ flexWrap: "wrap", display: "flex", width: "70%" }}>
            {MenuItems.map(({ id, label, path, icon, haveNested }) => {
              return (
                <Box key={`${id}-${label}`} component={NavLinkCustom} to={path} sx={{ my: 3, ml: 2 }} end={haveNested}>
                  {icon}
                  {label}
                </Box>
              );
            })}
          </Box>

          <Box sx={{ ...boxAvatar }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="avatar-kikoya" src="/imgs/avatar.svg" />
            </IconButton>
            <Button
              size="large"
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: "white", textTransform: "none" }}
              onClick={handleClick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Box sx={{ width: "100%" }}>Bienvenido, {session.user.name}</Box>
            </Button>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              elevation: 0,
              sx: { ...menuItem }
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <Avatar sx={{...iconRounded}}>
                  <Logout fontSize="small" />
                </Avatar>
              </ListItemIcon>
              Salir
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
