import React from 'react';

import PropTypes from 'prop-types';

import { CustomDialog } from './CustomDialog';

function FormDialog({ children, open, handleClose, ...props }) {

    return (
        <CustomDialog
            {...props}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
            open={open}
        >
            {children}
        </CustomDialog>
    )
}

FormDialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default FormDialog;

