import React from 'react';

import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';

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
