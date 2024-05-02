import React, { useState } from "react";
import { Button, Container, Form, FormGroup, FormLabel, Spinner } from "react-bootstrap";
import { validateEmail } from "../../../utils/utils";
import Notification from "../../../components/pieces/Notification";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../config/firebase/admin/fire-config";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchMeUser,
  logUserOut,
  setAuthAdminAction,
  setCampaignAccountAction,
  setFirebaseAuthAction,
} from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { PLATFORM } from "../../../api/urls";
import CONFIG from "../../../config/config.json";


const GOOGLE = "GOOGLE";
const EMAIL = "EMAIL";
const NOT_AN_ADMIN = "authenticated_but_needs_registration";

function Login({ logUserOut, fetchMassenergizeUser, putFirebaseAuthInRedux }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authType, setAuthType] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -------------------------------------------------------------------------------

  const onAuthSuccess = (data) => {
    if (data?.campaign_accounts?.length < 1) {
      return navigate("/admin/campaign/account/new");
    } else {
      let encoded = btoa(JSON.stringify(data?.campaign_accounts[0]));
      localStorage.setItem("acc", encoded);
      dispatch(setCampaignAccountAction(data?.campaign_accounts[0]));
      return navigate("/admin/home");
    }
  };

  const authenticateWithGoogle = () => {
    setAuthType(GOOGLE);
    setLoading(true);
    setError("");
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        setLoading(false);
        if (!response) return setError("Sorry, we could not sign you in. Please try again!");
        const { user } = response;

        putFirebaseAuthInRedux(user);
        fetchMassenergizeUser({ idToken: user?.accessToken }, (data, err) => {
          if (err) {
            const text =
              err === NOT_AN_ADMIN
                ? "Only admins can use the campaign platform. Please make sure you are regsitered as an admin..."
                : error;
            return setError(text);
          }
          onAuthSuccess(data);
          // if (data?.campaign_accounts?.length < 1) {
          //   return navigate("/admin/campaign/account/new");
          // } else {
          //   let encoded = btoa(JSON.stringify(data?.campaign_accounts[0]));
          //   localStorage.setItem("acc", encoded);
          //   dispatch(setCampaignAccountAction(data?.campaign_accounts[0]));
          //   return navigate("/admin/home");
          // }
        });
      })
      .catch((e) => {
        setLoading(false);
        const error = e?.toString();
        console.log("FIRE_GOOGLE_AUTH_ERROR: ", error);
        setError("Sorry we could not sign you in: ", error);
      });
  };

  const submit = () => {
    setAuthType(EMAIL);
    const emailIsValid = validateEmail(email?.trim());
    if (!emailIsValid) return setError("Please include a valid email and password");
    setError("");
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setLoading(false);
        const user = response.user;
        putFirebaseAuthInRedux(user);
        fetchMassenergizeUser({ idToken: user?.accessToken }, (data, err) => {
          if (err) {
            const text =
              err === NOT_AN_ADMIN
                ? "Only admins can use the campaign platform. Please make sure you are regsitered as an admin..."
                : error;
            return setError(text);
          }
          onAuthSuccess(data);
        });
      })
      .catch((e) => {
        setLoading(false);
        setError("Sorry, could not sign you in: " + e?.toString());
        console.log("ERROR_FIREBASE_SIGN_IN", e?.toString());
      });
  };

  const isGoogleAuth = authType === GOOGLE;
  const isEmailAndPass = authType === EMAIL;
  // -------------------------------------------------------------------------------
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        flexDirection: "column",
        height: "100vh",
        padding: 0,
        maxWidth: "100vw",
        background: "linear-gradient(357deg, rgba(110,32,124,1) 7%, rgba(255,255,255,1) 57%)",
      }}
    >
      <div style={{ padding: "50px 0px", marginTop: "-9%", textAlign: "center", color: "#b322cd" }}>
        <h1 style={{ fontWeight: "900" }}>Campaign Admin Portal</h1>
        <p>
          <span style={{}}> Sign in to manage your campaigns</span> <br />
          <span style={{ color: "black" }}>
            You need to be an existing massenergize admin before you can use this site
          </span>
        </p>
      </div>

      <div
        className="elevate-float-pro"
        style={{
          minHeight: "29vh",
          width: "65vh",
          background: "white",
          borderRadius: 10,
        }}
      >
        <div style={{ padding: 30 }}>
          {/* <div style={{ textAlign: "center" }} className={""}>
            <h3 style={{ color: "var(--admin-theme-color)" }}>Login</h3>
            <small className={"text-center"}>Sign in to manage your campaigns</small>
          </div> */}
          {/* <div style={{ textAlign: "center" }} className={"mb-4"}></div> */}
          <div style={{ padding: "10px 20px" }}>
            <FormGroup className="mb-3">
              <FormLabel style={{ marginLeft: 5, fontWeight: "bold" }}>Email</FormLabel>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email (e.g. abc@efg.xyz)"
                aria-label="email"
                aria-describedby="basic-addon1"
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel style={{ marginLeft: 5, fontWeight: "bold" }}>Password</FormLabel>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password here"
                aria-label="password"
                aria-describedby="basic-addon1"
              />
            </FormGroup>
            <Notification show={error}>{error}</Notification>
          </div>

          <div style={{ display: "flex", flexDirection: "row", padding: "0px 20px", alignItems: "center" }}>
            <small style={{ fontWeight: "bold", fontSize: 12, color: "rgb(227 227 227)" }}>
              {PLATFORM} <span>{CONFIG.BUILD_VERSION}</span>
            </small>
            {/* <Button onClick={() => logUserOut()}>Sign Out</Button> */}
            <div style={{ display: "inline-block", marginLeft: "auto" }}>
              {/* <div> */}
              <Button
                onClick={() => authenticateWithGoogle()}
                className="touchable-opacity px-4 py-2  block"
                disabled={loading}
                variant={"dark"}
                style={{
                  marginRight: 10,
                  // background: "#ee0c0c",
                  fontWeight: "bold",
                  borderWidth: 0,
                }}
              >
                {loading && isGoogleAuth && <Spinner size="sm" style={{ marginRight: 5 }}></Spinner>}
                <span>
                  <img src="/img/google.svg" alt="Google Logo" className={"mr-3"} /> Login With Google{" "}
                </span>
              </Button>
              {/* </div> */}
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
                {loading && isEmailAndPass && <Spinner size="sm" style={{ marginRight: 5 }}></Spinner>}
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

      {/* <div style={{ padding: 20, color: "#6e207c4a" }}>
        <h6>Development</h6>
      </div> */}

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

// const mapState = () => {
//   return ({})
// }

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      logUserOut,
      putAdminInRedux: setAuthAdminAction,
      fetchMassenergizeUser: fetchMeUser,
      putFirebaseAuthInRedux: setFirebaseAuthAction,
    },
    dispatch,
  );
};
export default connect(null, mapDispatch)(Login);
