import React, {} from "react";
import { Modal } from "react-bootstrap";

export default function MeModal({ children, title, open, onHide, size = "lg", ...props}) {
  return (
    <Modal onHide={onHide} show={open} size={size} enforceFocus={false} {...props}>
      <Modal.Header closeButton className={"border-bottom-0"}>
        <Modal.Title className={"text-sm"}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={props?.style ||{}}>{children}</Modal.Body>
    </Modal>
  );
}
