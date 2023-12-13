import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MEModal({ title, children, show, handleClose, animate, onOkClick, size }) {

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={animate || false} size={size || "md"} >
        {title && (
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {onOkClick && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} size="lg">
              Exit
            </Button>
            <Button variant="primary" onClick={onOkClick} size="lg">
              Save Changes
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default MEModal;
