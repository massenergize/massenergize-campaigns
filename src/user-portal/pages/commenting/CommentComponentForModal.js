import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function CommentComponentForModal() {
  return (
    <div style={{ maxHeight: 450, position: "relative" }}>
      <div
        style={{
          padding: 20,
          overflowY: "scroll",
          height: 450,
          // background: "blue",
          paddingBottom: 50,
        }}
      >
        {[1, 2, 34, 5, 5, 6, 7, 7, 7, 4].map((item, index) => {
          return (
            <div
              className="mb-2 mt-1 pb-2"
              style={{ border: "solid 0px #f5f5f5", borderBottomWidth: 1 }}
              key={index?.toString()}
            >
              <h6
                style={{
                  textDecoration: "underline",
                  fontSize: 14,
                }}
              >
                Akwesi Frimpong
              </h6>
              <small>It has survived not only five was popularised</small>
              <small
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <span style={{ marginLeft: "auto", color: "#cbcbcb" }}>
                  10 Seconds ago
                </span>
              </small>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "10px 20px",
          background: "white",
        }}
      >
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Type comment here..."
            aria-label="User comment"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Comment
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default CommentComponentForModal;
