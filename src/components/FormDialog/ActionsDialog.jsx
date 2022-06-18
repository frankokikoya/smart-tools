import React from 'react';

import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';

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