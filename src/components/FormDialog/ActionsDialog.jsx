import React from "react";
import PropTypes from "prop-types";
import DialogActions from "@mui/material/DialogActions";

const ActionsDialog = ({ children }) => {
    return (
        <DialogActions>
            {children}
        </DialogActions>
    )
};

ActionsDialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ActionsDialog;