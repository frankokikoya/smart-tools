import React from "react";
import { Box } from "@mui/material";

const useStyles = {
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "10%",
    alignItems: "flex-start",
    pt: 1,
    // border: "1px solid green"
  },
};

export const SearchBox = ({ children }) => {
  const { itemContent } = useStyles;
  return <Box sx={{ ...itemContent }}>{children}</Box>;
};
