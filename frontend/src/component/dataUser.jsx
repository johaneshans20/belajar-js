import { Card, Row, Col, Container } from "react-bootstrap";
import axios from "../axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const DataList = () => {
  const token = localStorage.getItem("token");
  const [allData, setAllData] = useState([]);

  const dataUser = async () => {
    const respon = await axios.get("/dataUser", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    setAllData(respon.data.data);
  };
  useEffect(() => {
    dataUser();
  }, []);
  console.log(allData);
  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <h3>Halaman List Data</h3>
      <Row>
        {allData.map((listdata) => (
          <Col xs={6}>
            <div key={listdata._id}>
              <Card>
                <Card.Body>
                  <Card.Title>Nama : {listdata.name_user}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Email :{listdata.email}
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Data Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DataList;
