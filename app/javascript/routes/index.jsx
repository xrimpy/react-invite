import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Invitations from "../components/Invitations";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

import Currentuser from "../components/Currentuser";


export default (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/invitations" element={<Invitations />} />
      <Route path="/currentuser" element={<Currentuser />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/recipe" element={<NewRecipe />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </Router>
  </>
);

 