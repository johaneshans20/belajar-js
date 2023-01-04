import React, { useState, useEffect } from "react";
import axios from "../axios";
import { Button } from "react-bootstrap";
import { Navigate, Link } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  // console.log(token);
  const getData = async () => {
    const respon = await axios.get("/getUser", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setData(respon.data.data);
  };
  // console.log(data);
  useEffect(() => {
    getData();
  });

  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <h3>Halaman Dashboard</h3>

      <div>
        <h2>{data.email}</h2>
      </div>
      <Link to="/dataUser">
        <Button variant="primary" type="submit">
          Data User
        </Button>
      </Link>
    </div>
  );
};

export default Dashboard;
