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
        style={{ background: "var(--app-deep-green)", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome To The Wayland Energy Challenge
        </Modal.Title>
        <Button
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
      <Modal.Footer style={{ padding: 0 }}>
        <div
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
