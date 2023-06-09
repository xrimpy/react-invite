import React, { Component, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';


const Header = () => {

  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Invites
          </Typography>
          <Button href="/invitations" variant="contained">
            Invitations
          </Button>
        </Toolbar>
      </AppBar>

  )
}

export default Header;

 