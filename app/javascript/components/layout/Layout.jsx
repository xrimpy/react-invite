import React, { Component } from 'react';
import Header from './Header';
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { background: '#363636', color: '#fff', }}}
      />
      <Header />
      <main>{ children }</main>
    </>
  )
}

export default Layout;

