import {AlertColor, Snackbar} from "@mui/material";
import Alert from "@mui/material/Alert";
import {ReactElement, useState} from "react";
import {AlertOption} from "./BasicAlert.tsx";

const DEFAULT_AUTO_HIDE_DURATION: number = 1500;
const defaultAutoHideDurationConfig: {autoHideDuration: number} = {
    autoHideDuration: DEFAULT_AUTO_HIDE_DURATION
}

type AlertInternalOption = {
    severity: AlertColor
} & AlertOption

export const Message = (props: AlertInternalOption): ReactElement => {
    if (!props.autoHideDuration) {
        props = {...defaultAutoHideDurationConfig, ...props}
    }
    const [showAlert, setShowAlert] = useState(true)

    const handleClose = (): void => {
        setShowAlert(false)
    }

    return (
        <Snackbar onClose={handleClose} autoHideDuration={props.autoHideDuration} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={showAlert} sx={{ width: '100%' }}>
            <Alert severity={props.severity} onClose={handleClose}>{props.content}</Alert>
        </Snackbar>
    )
}
