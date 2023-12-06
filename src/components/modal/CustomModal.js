import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function CustomModal(props) {
  const { show, component, modalNativeProps, fullControl, style } = props || {};
  if (!show) return <></>;
  const styles = { ...(style || {}), ...(fullControl ? { padding: 0 } : {}) };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={styles}
      {...(modalNativeProps || {})}
    >
      <SmartHeader {...props} />
      {fullControl ? (
        <Modal.Body style={{ padding: 0 }}>{component}</Modal.Body>
      ) : (
        <>
          <Modal.Body>{component}</Modal.Body>
          <SmartFooter {...props} />
        </>
      )}
    </Modal>
  );
}

export default CustomModal;

const SmartHeader = ({ renderHeader, close, title, imgSrc, iconName }) => {
  if (renderHeader) return renderHeader();

  const renderHeaderMedia = () => {
    if (imgSrc)
      return (
        <img
          src={imgSrc || "https://i.pravatar.cc/300"}
          style={{
            borderRadius: "100%",
            width: 25,
            height: 25,
            marginBlock: 10,
            marginRight: 10,
          }}
        ></img>
      );

    if (iconName)
      return (
        <i
          className={`fa ${iconName}`}
          style={{ fontSize: 19, color: "white", marginRight: 6 }}
        />
      );

    return <></>;
  };
  return (
    <Modal.Header
      style={{
        background: "var(--app-deep-green)",
        color: "white",
        padding: "10px 25px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {renderHeaderMedia()}
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: 18 }}
        >
          {title || "..."}
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
          padding: "5px 15px",
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
          padding: "5px 15px",
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
