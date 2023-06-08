import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";


 

const Test = () => {
  const navigate = useNavigate();
  const [invitations, setInvitation] = useState([]);
  const auth = "defined";

  const notify = () => 
  {
      toast("Here is my toast!");
      console.log("notify");
  }

    // toast.success('Here is your toast.');

  const fetchData = async () => {
    const response = await axios.get(
      "/api/v1/invites"
    );

    // debugger
    console.log({ response });
    return response;
  };


  useEffect(() => {
   const callFunction= fetchData();

   toast.promise(callFunction, {
    loading: "Process",
    error: "error occurs in data",
    success: "get data successfully...."
  });
  }, []);
 

 

  return (
    <>
    
    <Paper style={{ margin: 10, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Email to Invite"
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            variant="contained"
            sx={{ p: '14px' }}
            onClick={notify}
          >
            Send
          </Button>
        </Grid>
      </Grid>

 
      <button onClick={notify}>Make a toast</button>
 

    </Paper>
    </>
  );
};

export default Test;