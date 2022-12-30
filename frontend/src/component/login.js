import { Card, Button, Container, Form } from "react-bootstrap";
import { Fragment, useState } from "react";
import axios from "../axios";
import { Link, Navigate } from "react-router-dom";
// import AuthContext from "../component/shared/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  // const { loginApiCall } = useContext(AuthContext);

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };
  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };
  const submitLogin = async () => {
    // const payload = {
    //   username: username,
    //   password: password,
    // };
    // //console.log(payload);
    // await loginApiCall(payload);
    // setRedirect(true);

    const data = {
      username: username,
      password: password,
    };

    axios
      .post("/auth/login", data)
      .then((result) => {
        if (result) {
          console.log("ini token", result.data);
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };
  return (
    <Fragment>
      {redirect && <Navigate to="/dashboard" />}
      <div style={{ marginTop: "200px" }}>
        <Container>
          <Card>
            <Card.Body>
              {error && (
                <div className="alert alert-danger">
                  <p>{error}</p>
                </div>
              )}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Link to="">
                  <Button variant="primary" type="submit" onClick={submitLogin}>
                    Submit
                  </Button>
                </Link>
                <Link to="/daftar">
                  <p>Belum punya Akun? Daftar disini</p>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};

export default Login;
