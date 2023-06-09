import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Invitations from "../components/Invitations";
import Register from "../components/Register";
import Signin from "../components/Signin";
import PrivateRoute from "./PrivateRoute";
import AcceptInvite from "./AcceptInvite";

const App = () => {

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invitations" element={
                            <PrivateRoute>
                                <Invitations />
                            </PrivateRoute>
                        } />
            <Route path="/accept_invite" element={<AcceptInvite />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </Router>
      </>
    );
  };

 
  
  export default App;
  