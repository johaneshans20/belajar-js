import React from "react";
import axios from "../axios";
import { Button } from "react-bootstrap";
import { Navigate, Link } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to="/" />;
  }
  axios.get("/getUser").then((result) => {
    console.log(result);
  });
  return (
    <div className="container">
      <h3>Halaman Dashboard</h3>
      <Link to="/dataUser">
        <Button variant="primary" type="submit">
          Data User
        </Button>
      </Link>
    </div>
  );
};

export default Dashboard;
