import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Paper from '@mui/material/Paper';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';


import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import authService from "../services/auth.service";


const Invitations = () => {
  const navigate = useNavigate();

  const handleLogout = async(event ) => {
    event.preventDefault();

      try {
        await authService.logout().then(
          () => {
            navigate("/");
          })
           } catch(err){
            console.log(err)
            toast.error('Error logging out')
           }
  };

  const url = "/api/v1/invites";
  const [invitations, setInvitations] = useState([]);
  const [email, setEmail] = useState("");

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };



  const onSubmit = (event) => {
    event.preventDefault();


    if (email.length == 0  )
      return;

    axios.post(url, { 'invitation': { 'email': email } })
    .then(function (response) {
      console.log("Success");
      const newInvitations = invitations.concat({ id: response.data.id,  attributes: { email: response.data.email }});
      setInvitations(newInvitations);
    })
    .catch(function (error) {
      console.log("Erorr");
    });


    };

    useEffect(() => {
      const url = "/api/v1/invites";

      const headers = { 'Authorization': localStorage.getItem('token') };
      fetch(url, { headers })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((response) => { 
          setInvitations(response.data) })
        .catch(() => navigate("/"));
    }, []);



    const allInvitations = invitations.map((invitation, index) => (

      <ListItem disablePadding key={invitation.id}>
      <ListItemButton  dense>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={invitation.attributes.email} />
      </ListItemButton>
      </ListItem>
  
    ));
    const noInvitations = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h5>
          Loading
        </h5>
      </div>
    );

    

    

  return (
    <>
    <Paper style={{ margin: 10, padding: 16 }}>
      <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
            required
            fullWidth
            id="email"
            label="Email for Invitation"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => onChange(event, setEmail)}
            />

          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              variant="contained"
              sx={{ p: '16px' }}
              type="submit"
            >
              Send
            </Button>
          </Grid>
        </Grid>
        </Box>
      <List>
        {invitations.length > 0 ? allInvitations : noInvitations}
      </List>

              
      <Button color="secondary" fullWidth
            variant="contained" onClick={handleLogout}>Logout</Button>
    </Paper>
    </>
  );
};

export default Invitations;