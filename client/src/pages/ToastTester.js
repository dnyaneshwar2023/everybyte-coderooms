import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ToastTester = () => {
  return (
    <div>
      <button
        onClick={() => {
          toast.success(`Mass Upload Successful!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Hi
      </button>
    </div>
  );
};

export default ToastTester;
