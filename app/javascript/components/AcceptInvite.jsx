import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";


const AcceptInvite = () => {
  const navigate = useNavigate();
  
  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };
  
  const [searchParams, setSearchParams] = useSearchParams({});
  
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
 
  const handleLogin = async(event ) => {
    event.preventDefault();

    if (token.length == 0 || password.length == 0 )
      return;

      axios
        .post("/api/v1/invites/accept", { 'invitation': { token, password } })
        .then((response) => {
          console.log(response)

          if(response.data['error'] == 'Invalid token')
          {
            toast.error("Invalid token / Already Used")
          }
          else
          {
            toast.success("User Created: Please Sign In")
            navigate("/signin")
          }
        }).catch(function (error) {
          console.log(error)
            throw error;
            })

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
          Accept Invitation
        </Typography>

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            disabled
            fullWidth
            id="token"
            label="Token"
            name="token"
            value={token}
            />

          <TextField
            autoFocus
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
            Sign Up
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to='/'>Home</Link>
            </Grid>
            <Grid item>
              <Link to='/signin'>Sign In</Link>
            </Grid>
          </Grid>

        </Box>
      </Box>
    </Container>
    </>
  );
};

export default AcceptInvite;