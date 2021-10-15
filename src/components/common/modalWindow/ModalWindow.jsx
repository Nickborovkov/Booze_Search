import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

const ModalWindow = ({modal, setModal, children}) => {

    return (
        <Box>
            <Dialog
                open={modal}
                onClose={ () => {setModal(false)} }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                    {children}

            </Dialog>
        </Box>
    )
}

export default ModalWindow
