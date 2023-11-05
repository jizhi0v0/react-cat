import { createRoot } from "react-dom/client";
import {Message} from "./Message.tsx";
import React from "react";
import {AlertColor} from "@mui/material";

export type AlertOption = {
    content: string,
    autoHideDuration?: number,
}

const alert = (alertOption: AlertOption, severity: AlertColor) => {
    const dom = document.createElement('div') as HTMLElement;
    const jsx: React.ReactElement = <Message {...alertOption} severity={severity}/>
    createRoot(dom!).render(jsx);
    document.body.append(dom!)
}

export const BasicAlert = {
    /**
     * 错误弹窗
     * @param alertOption
     */
    error: function (alertOption: AlertOption): void {
        alert(alertOption, 'error')
    },
    /**
     * 成功弹窗
     * @param alertOption
     */
    success: function (alertOption: AlertOption): void {
        alert(alertOption, 'success')
    },
}