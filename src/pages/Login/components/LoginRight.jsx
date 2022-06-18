import React from 'react';

import Box from '@mui/material/Box';

import useStyles from '../styles/LoginRight.styles';

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
