import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    pt: 4, px: 4, pb: 2
};

const ModalError = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-axios-title"
                aria-describedby="modal-axios-description"
            >
                <Box sx={style}>
                    <Typography id="modal-axios-title" variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                        Sesión expirada
                    </Typography>
                    <Typography id="modal-axios-description" sx={{ mt: 2 }}>
                        Tu sesión ha expirado por inactividad
                    </Typography>
                    <Button 
                    onClick={handleClose}
                    variant="contained"
                    color="secondary"
                    sx={{ textTransform: "none", color: "white", borderRadius: 10, width: "25%", height: "45%", ml: "80%" }}
                    >
                        Aceptar
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default ModalError;