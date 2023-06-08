import React from "react";
// import { Routes, Route, Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Routes from "../routes";

import Instructions from '../components/Instructions';
import Header from "./layout/Header";
// import Recipes from "../components/Recipes";

import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Invitations from "../components/Invitations";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Toast from "../components/Toast";
import PrivateRoute from "./PrivateRoute";

import Currentuser from "../components/Currentuser";
import Test from "../components/Test";


const App = () => {

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/test" element={<Test />} />
            {/* <Route path="/invitations" element={<Invitations />} /> */}
            <Route path="/invitations" element={
                            <PrivateRoute>
                                <Invitations />
                            </PrivateRoute>
                        } />
            <Route path="/currentuser" element={<Currentuser />} />
            <Route path="/toast" element={<Toast />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/recipe" element={<NewRecipe />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </Router>
      </>
    );
  };

 
  
  export default App;
  