import React, {} from "react";
import { Modal } from "react-bootstrap";

export default function MeModal({ children, title, open, onHide, size = "lg"}) {
  return (
    <Modal onHide={onHide} show={open} size={size} enforceFocus={false}>
      <Modal.Header closeButton className={"border-bottom-0"}>
        <Modal.Title className={"text-sm"}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
