import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <><App />
    <ToastContainer>
      {/* This is Used to show the toast.Toast is always displayed in the toastcontainer. */}
    </ToastContainer></>
);
