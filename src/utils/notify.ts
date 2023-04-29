import { toast, ToastOptions } from "react-toastify";

type ToastType = "info" | "success" | "warning" | "error";

const showToast = (type: ToastType, msg: string, idToast: string) => {
  const options: ToastOptions = {
    toastId: idToast,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  toast[type](msg, options);
};

export default showToast;
