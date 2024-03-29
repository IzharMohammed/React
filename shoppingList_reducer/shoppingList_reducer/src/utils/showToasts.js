import { ToastContainer, toast } from "react-toastify";

export function showSuccess(messasge) {
    toast.success(messasge, {
        position: toast.POSITION.TOP_RIGHT,
    });
}

export function showError(messasge) {
    toast.error(messasge, {
        position: toast.POSITION.TOP_RIGHT,
    });
}

export function showNotify(message){
    toast.error(message , {
        position: toast.POSITION.TOP_RIGHT,
    })
}