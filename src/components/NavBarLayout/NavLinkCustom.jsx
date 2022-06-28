import React from 'react';

import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './index.css';

const NavLinkCustom = React.forwardRef((props, ref) => {

  return (
    <NavLink
      ref={ref}
      to={props.to}
      style={{ textDecoration: "none", marginLeft: "3%" }}
      className={({ isActive }) => isActive ? 'active' : 'inactive'}
      end={props.end ? true : false}
    >
      <Typography variant='body3' sx={{ alignItems: "center", display: "flex" }}>
        {props.children}
      </Typography>
    </NavLink>
  );
});

export default NavLinkCustom;