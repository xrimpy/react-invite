import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is my toast!");
const sucessNotify = () => toast.success("Sucess!");
const errorNotify = () => toast.error("Error");


export default function Toast() {
  return (
    <div className="App">
      <button onClick={notify}>Make me a toast</button>
      <button onClick={sucessNotify}>Make me a sucess toast</button>
      <button onClick={errorNotify}>Make me a error toast</button>
      <Toaster />
    </div>
  );
 }