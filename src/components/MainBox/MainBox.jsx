import React from 'react';

import Box from '@mui/material/Box';

const useStyles = {
  mainContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
};

export default function MainBox({ children, ...props }) {
  const { mainContent } = useStyles;
  return (
    <Box {...props} sx={{ ...mainContent }}>
      {children}
    </Box>
  );
};
