import React from "react";
import { Box } from "@mui/material";

const useStyles = {
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "8%",
    alignContent: "center",
    p: 1,
    pt: 2,
  },
};

export const SubMenuSelected = ({ children }) => {
  const { itemContent } = useStyles;
  return (
    <Box sx={{ ...itemContent }}>
      {children}
    </Box>
  );
};