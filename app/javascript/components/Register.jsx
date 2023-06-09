import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/signup";

    if (email.length == 0 || password.length == 0 )
      return;

      axios
        .post("/signup", { 'user': { email, password  } })
        .then((response) => {
          if(response.headers['authorization']) {
            localStorage.setItem('token', response.headers['authorization']);
            console.log(response.headers['authorization'])
            navigate("/invitations");
          }
        }).catch(function (error) {
          toast.error('Invalid Credentials / Email already exists')
        });
        
    }

  //   fetch(url, {
  //     method: "POST",
  //     // body: JSON.stringify(body),
  //     body: JSON.stringify({ 'user': { email, password } }),
  //   })
  //     .then((response) => {
  //       debugger
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then((response) => navigate(`/`))
  //     .catch((error) => console.log(error.message));
  // };

  return (
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
          Sign Up
        </Typography>

        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
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
            Sign Up
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to='/'>Home</Link>
            </Grid>
            <Grid item>
              <Link to='/'>Sign In</Link>
            </Grid>
          </Grid>

        </Box>
      </Box>
    </Container>
  );
};

export default Register;