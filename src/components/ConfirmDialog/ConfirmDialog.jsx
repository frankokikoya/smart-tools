import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmDialog = ({ children, open, handleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
        >
            {children}
        </Dialog>
    )
};

ConfirmDialog.Title = ({ children }) => {
    return (
        <DialogTitle id="confirm-dialog-title">
            {children}
        </DialogTitle>
    )
};

ConfirmDialog.Content = ({ children }) => {
    return (
        <DialogContent>
            <DialogContentText id="confirm-dialog-description">
                {children}
            </DialogContentText>
        </DialogContent>
    )
};

ConfirmDialog.Actions = ({ children }) => {
    return (
        <DialogActions>
            {children}
        </DialogActions>
    )
};

export default ConfirmDialog;