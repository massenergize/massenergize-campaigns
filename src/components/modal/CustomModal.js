import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function CustomModal(props) {
  const { show, component } = props || {};
  if (!show) return <></>;
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <SmartHeader {...props} />
      <Modal.Body>{component}</Modal.Body>
      <SmartFooter {...props} />
    </Modal>
  );
}

export default CustomModal;

const SmartHeader = ({ renderHeader, close }) => {
  if (renderHeader) return renderHeader();

  return (
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
          style={{ fontSize: 20 }}
        >
          Welcome To The Wayland Energy Challenge
        </Modal.Title>
      </div>
      <Button
        className="touchable-opacity"
        variant="link"
        style={{ color: "white", textDecoration: "none" }}
        onClick={() => close && close()}
      >
        <span
          aria-hidden="true"
          className="fa fa-times"
          style={{ fontSize: 20 }}
        ></span>
      </Button>
    </Modal.Header>
  );
};

const SmartFooter = ({ renderFooter, close }) => {
  if (renderFooter) return renderFooter();
  return (
    <Modal.Footer style={{ padding: 0, fontWeight: "bold" }}>
      <div
        className="touchable-opacity"
        style={{
          background: "var(--app-close-red)",
          padding: "10px 20px",
          height: "100%",
          margin: 0,
        }}
        onClick={() => close && close()}
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
  );
};
