// import React from "react";
import React, { useState, useEffect} from "react";
import { Link, useParams,useSearchParams, useLocation, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is my toast!");
const sucessNotify = () => toast.success("Sucess!");
const errorNotify = () => toast.error("Error");

// const query = new URLSearchParams(window.location.search);
// const message = useParams()

const Home = ({props}) => {
  
  // const [searchParams, setSearchParams] = useSearchParams();
  // const message = searchParams.get('message');
  
  // const notify = () => toast.success('Here is your toast.');
 
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
        <Typography component="h1" variant="h3">
          React / Rails 
        </Typography>
        <Typography component="h1" variant="h5">
        Invites through Devise
        </Typography>
        <button onClick={notify}>Make a toast</button>

        <Grid container>
            <Grid item xs>
              <Link to='/signin'>Sign In</Link>
            </Grid>
            <Grid item>
              <Link to='/signup'>Sign Up</Link>
            </Grid>
          </Grid>

 
      </Box>
    </Container>
    </>
  );

}

export default Home;
