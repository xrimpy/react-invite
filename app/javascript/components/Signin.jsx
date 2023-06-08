import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import toast, { Toaster } from 'react-hot-toast';

import authService from "../services/auth.service";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };


 

  // const fetchData = async (body) => {

  //   console.log("EEEEELS");
  //   fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ 'user': body }),
  //     })
  //       .then((response) => {
  //         localStorage.setItem('token', response.headers.get('Authorization'));
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         throw new Error("Network response was not ok.");
  //       })
  //       .then((response) => {
  //         console.log(localStorage.getItem('token'));
  //         navigate(`/invitations`)
  //       })
  //       .catch((error) => console.log(error.message));
  //     }

  

 
  const handleLogin = async(event ) => {
    event.preventDefault();

    if (email.length == 0 || password.length == 0 )
      return;

      try {
        await authService.signin(email, password).then(
          () => {
            navigate("/invitations");
          })
           } catch(err){
            toast.error('Invalid Credentials / User does not exist')
           }
  };


  return (
    <>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In: Signin.JSX
        </Typography>

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => onChange(event, setEmail)}
            />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => onChange(event, setPassword)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to='/'>Home</Link>
            </Grid>
            <Grid item>
              <Link to='/signup'>Sign Up</Link>
            </Grid>
          </Grid>

        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Signin;