import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

      
    axios.post(url, { 'invitation': { 'email': email } }, {  headers: { 'Authorization': localStorage.getItem('token') } })
    .then(function (response) {
      console.log("Success");
      const newInvitations = [{ id: response.email,  attributes: { email: response.data.email }}].concat(invitations);
      
      console.log(newInvitations);
      setInvitations(newInvitations);
    })
    .catch(function (error) {
      console.log("Erorr");
    });
    };


    useEffect(() => {
      const url = "/api/v1/invites";

      console.log(localStorage.getItem('token'))
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
        .catch(() => {
          toast.error('Please Login')
          navigate("/")
        
        });
      }, []);
      
      

    const allInvitations = invitations.map((invitation, index) => (

      <ListItem disablePadding key={invitation.attributes.email}>
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

      <Typography component="h3" variant="h5">
          You have no Invitations
        </Typography>
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
        {  allInvitations  }
        
        { invitations.length == 0 && noInvitations } 
      </List>

              
      <Button color="secondary" fullWidth
            variant="contained" onClick={handleLogout}>Logout</Button>
    </Paper>
    </>
  );
};

export default Invitations;