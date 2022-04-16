import React from "react";
import { SubMenuSelected } from "../components/SubMenuSelected";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { SearchBox } from "../components/SearchBox";

export const Products = () => {
  return (
    <>
      <SubMenuSelected>
        <Button color="secondary" startIcon={<PersonOutlineIcon />} sx={{ ml: 2, textTransform: "none" }}>
          Usuarios financieros
        </Button>
        <Button color="primary" startIcon={<SmsOutlinedIcon />} sx={{ ml: 2, textTransform: "none" }}>
          Contacto
        </Button>
        <Button color="primary" startIcon={<ViewInArOutlinedIcon />} sx={{ ml: 2, textTransform: "none" }}>
          Branding
        </Button>
      </SubMenuSelected>
      <SearchBox>
        <TextField name="search-users" label="Buscar" variant="outlined" size="small" sx={{ ml: 2 }} />
        <FormControlLabel control={<Checkbox defaultChecked color="secondary"/>} label="Usuarios activos" sx={{ ml: 2 }}/>
        <FormControlLabel control={<Checkbox color="secondary"/>} label="Usuarios inactivos" sx={{ ml: 2 }}/>
      </SearchBox>
    </>
  );
};
