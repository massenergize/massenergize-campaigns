import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function CustomModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          background: "var(--app-deep-green)",
          color: "white",
          padding: "7px 25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.pravatar.cc/300"
            style={{
              borderRadius: "100%",
              width: 30,
              height: 30,
              marginBlock: 10,
              marginRight: 10,
            }}
          ></img>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: 20}}
          >
            Welcome To The Wayland Energy Challenge
          </Modal.Title>
        </div>
        <Button
          className="touchable-opacity"
          variant="link"
          style={{ color: "white", textDecoration: "none" }}
          onClick={props.onHide}
        >
          <span
            aria-hidden="true"
            className="fa fa-times"
            style={{ fontSize: 20 }}
          ></span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer style={{ padding: 0, fontWeight: "bold" }}>
        <div
          className="touchable-opacity"
          style={{
            background: "var(--app-close-red)",
            padding: "10px 20px",
            height: "100%",
            margin: 0,
          }}
        >
          <p
            style={{
              color: "white",
              margin: 0,
              padding: "7px 30px",
            }}
          >
            CLOSE
          </p>
        </div>
        <div
          className="touchable-opacity"
          style={{
            background: "var(--app-deep-green)",
            padding: "10px 20px",
            height: "100%",
            margin: 0,
            borderBottomRightRadius: 5,
          }}
        >
          <p
            style={{
              color: "white",
              margin: 0,
              padding: "7px 30px",
            }}
          >
            JOIN US
          </p>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
