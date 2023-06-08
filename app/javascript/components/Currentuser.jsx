import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Currentuser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setCurrentuser] = useState({ email: "No@Email.COM" });

  useEffect(() => {
    const url = `/current_user`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => { 
        debugger
        setCurrentuser(response) 
      })
      .catch(() => navigate("/"));
  },[]);

  return (
    <div className="">
        <h1 >
          Email: {user.email}
        </h1>
      <div className="container py-5">
        <Link to="/recipes" className="btn btn-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};


export default Currentuser;