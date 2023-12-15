import React, { useState } from "react";
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  ModalFooter,
  Spinner,
} from "react-bootstrap";
import MERichText from "../../../components/admin-components/RichText";
import Input from "../../../components/admin-components/Input";
import { validateEmail } from "../../../utils/utils";
import Notification from "../../../components/pieces/Notification";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/admin/fire-config";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  
  const fetchMeUser = (payload) => { 
    
  }

  const submit = () => {
    const emailIsValid = validateEmail(email?.trim());
    if (!emailIsValid)
      return setError("Please include a valid email and password");
    setError("");
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setLoading(false);
        console.log("This is the response you see", response);
      })
      .catch((e) => {
        setLoading(false);
        setError(e?.toString());
        console.log("ERROR_FIREBASE_SIGN_IN", e?.toString());
      });
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", padding: 0 }}
    >
      <div
        className="elevate-float-pro"
        style={{
          minHeight: "29vh",
          width: "65vh",
          background: "white",
          borderRadius: 6,
        }}
      >
        <div style={{ padding: 30 }}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "var(--admin-theme-color)" }}>
              Admin Campaign Authentication
            </h3>
            <p>Sign in as a campaign administrator to manage your campaigns</p>
          </div>
          <div style={{ padding: "10px 20px" }}>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{ fontWeight: "bold" }} id="basic-addon1">
                Email{" "}
              </InputGroup.Text>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email here..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" style={{ fontWeight: "bold" }}>
                Password{" "}
              </InputGroup.Text>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password here..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Notification show={error}>{error}</Notification>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0px 20px",
            }}
          >
            <div style={{ display: "inline-block", marginLeft: "auto" }}>
              <Button
                className="touchable-opacity"
                style={{
                  marginRight: 10,
                  background: "#ee0c0c",
                  fontWeight: "bold",
                  borderWidth: 0,
                }}
              >
                Use Gmail Instead
              </Button>
              <Button
                onClick={() => submit()}
                disabled={loading || !email || !password}
                className="touchable-opacity"
                style={{
                  fontWeight: "bold",
                  background: "var(--admin-theme-color)",
                  borderWidth: 0,
                }}
              >
                {loading && (
                  <Spinner size="sm" style={{ marginRight: 5 }}></Spinner>
                )}
                <span>Submit</span>
              </Button>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            background: "grey",
            display: "flex",
            flexDirection: "row",
            margin: 0,
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 5,
          }}
        >
          <Button style={{ marginLeft: "auto" }}>Here we go</Button>
        </div> */}
      </div>

      {/* <Row>
        <Col className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Login;
