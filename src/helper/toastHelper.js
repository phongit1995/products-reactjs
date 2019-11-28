import { toast  } from 'react-toastify';
export const ToastError = (error)=>{
    let message = null ;
    toast.error(error);
}