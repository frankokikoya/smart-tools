import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Modal, Typography, Portal } from "@mui/material";
import { clearError } from "../../redux/states/ErrorSlice";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    pt: 4, px: 4, pb: 2
};

const ModalError = () => {
    const container = React.useRef(null);
    const dispatch = useDispatch();
    const { openDialog, title, message } = useSelector((state) => state.error);

    const handleClose = () => {
        dispatch(clearError())
    };

    return (
        <Portal container={container.current}>
            <Modal
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="modal-axios-title"
                aria-describedby="modal-axios-description"
            >
                <Box sx={style}>
                    <Typography id="modal-axios-title" variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                        {title}
                    </Typography>
                    <Typography id="modal-axios-description" sx={{ mt: 2 }}>
                        {message}
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
        </Portal>
    )
}

export default ModalError;