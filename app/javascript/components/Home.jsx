import React, { useState, useEffect} from "react";
import { Link, useParams,useSearchParams, useLocation, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import toast, { Toaster } from "react-hot-toast";

const Home = ({props}) => {
  
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
        <Typography component="h1" variant="h3" align="center">
          React / Rails Invitations
        </Typography>

        <Grid container>
            <Grid item xs>
              <Link to='/signin'>Sign In</Link>
            </Grid>
            <Grid item>
              <Link to='/register'>Sign Up</Link>
            </Grid>
          </Grid>

 
      </Box>
    </Container>
    </>
  );

}

export default Home;
