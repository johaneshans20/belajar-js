import { Card, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import axios from "axios";
import axios from "../axios";
import { useState } from "react";

const Daftar = () => {
  const [username, setUsername] = useState("");
  const [nama_user, setNama_user] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const changeNamauser = (e) => {
    const value = e.target.value;
    setNama_user(value);
  };
  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const klikDaftar = () => {
    const data = {
      username: username,
      nama_user: nama_user,
      email: email,
      password: password,
    };
    // axios.post("http://localhost:5000/api/auth/daftar", data).then((result) => {
    axios.post("/auth/daftar", data).then((result) => {
      if (result) {
        if (result.data) {
          setUsername("");
          setNama_user("");
          setEmail("");
          setPassword("");
          setAlert(result.data.message);
          window.setTimeout(() => {
            setAlert("")
              .fadeTo(1000, 0)
              .slideUp(1000, () => this.remove());
          }, 3000);
        }
      }
    });
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h2 className="text-center"> Daftar Akun</h2>
              {alert && (
                <div className="alert alert-success">
                  <p>{alert}</p>
                </div>
              )}
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={changeUsername}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={nama_user}
                  onChange={changeNamauser}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={changeEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={changePassword}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Link to="">
                <Button variant="primary" type="submit" onClick={klikDaftar}>
                  Buat Akun
                </Button>
              </Link>
              <Link to="/">
                <p>Sudah punya Akun? Login disini</p>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Daftar;
