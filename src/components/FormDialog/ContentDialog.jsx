import React from "react";
import PropTypes from "prop-types";
import DialogContent from "@mui/material/DialogContent";

const ContentDialog = ({ children, ...props }) => {
    return (
        <DialogContent {...props}>
            {children}
        </DialogContent>
    )
};

ContentDialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ContentDialog;
