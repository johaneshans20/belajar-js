import axios from "../axios";
import React from "react";
import { Navigate } from "react-router-dom";

const DataList = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }
  axios.get("/dataUser".token).then((result) => {
    console.log(result);
  });
  return (
    <div className="container">
      <h3>Halaman List Data</h3>
      <h4> Nama :</h4>
      <h4>Email :</h4>
    </div>
  );
};

export default DataList;
