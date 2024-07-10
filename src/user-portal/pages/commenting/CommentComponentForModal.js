import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import Loading from "../../../components/pieces/Loading";
import { relativeTimeAgo } from "../../../utils/utils";
import Notification from "../../../components/pieces/Notification";
import { apiCall } from "../../../api/messenger";
import CommentDeleteConfirmation from "../technology/CommentDeleteConfirmation";

function CommentComponentForModal({
  comments,
  authUser,
  updateUser,
  camp_tech_id,
  technology,
  updateTechList,
  updateUserInRedux,
  commentIsForUser,
  onDelete,
  staticT,
}) {
  const [commentItems, setCommentItems] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const comBox = useRef();
  // comments = comments?.reverse();
  console.log("what is staticT", staticT)

  const { user } = authUser || {};

  useEffect(() => {
    setName(user?.full_name || "");
  }, []);
  useEffect(() => {
    // Scroll to the bottom whenever messages change
    const ref = comBox;
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [commentItems]);

  useEffect(() => {
    const { user } = authUser || {};
    setName(user?.full_name || user?.preferred_name || "");
  }, [authUser]);

  useEffect(() => {
    setCommentItems(comments?.reverse());
  }, [comments]);

  const data = commentItems;

  const sendComment = () => {
    setError("");
    if (!comment.trim() || !name?.trim()) return setError("Please provide a name and a valid comment");

    const doesNotHaveName = !user?.full_name;
    setLoading(true);
    if (doesNotHaveName) {
      updateUser(
        {
          id: user?.id || null,
          full_name: name,
          follow_id: authUser?.id || null,
        },
        (userObj, passed, error) => {
          if (!passed) {
            setLoading(false);
            return setError(error);
          }
          updateUserInRedux(userObj);
          sendCommentToBackend(userObj?.user);
        },
      );
    } else sendCommentToBackend(authUser?.user);
  };

  const sendCommentToBackend = (user) => {
    apiCall("/campaigns.technologies.comments.create", {
      campaign_technology_id: technology?.campaign_technology_id,
      text: comment,
      user_id: user?.id || null,
    }).then((response) => {
      setLoading(false);
      if (!response || !response.success) return setError(response?.error || "Sorry something happened!");
      const latestComments = response.data;
      const updated = { ...(technology || {}), comments: latestComments };
      setCommentItems([...latestComments].reverse());
      updateTechList(updated);
      setComment("");

      // updatecommentList({ ...commentsList, [camp_tech_id]: latestComments });
    });
  };

  return (
    <div style={{ maxHeight: 500, position: "relative" }}>
      <div
        style={{
          padding: 20,
          overflowY: "scroll",
          minHeight: 250,
          maxHeight: 500,
          paddingBottom: 130,
        }}
        ref={comBox}
      >
        {data?.length === 0 && (
          <center>
            <small>{staticT?.no_comments?.text || "No comments yet, be the first!"}</small>
          </center>
        )}
        {data?.map((com) => {
          const { user, text, created_at } = com || {};
          const message = text || "...";
          const community = user?.community;

          const isForCurrentUser = commentIsForUser(com, authUser);
          return (
            <div
              className="mb-2 mt-1 pb-2 "
              style={{ border: "solid 0px #f5f5f5", borderBottomWidth: 1 }}
              key={com?.id}
            >
              <h6
                className="small-font"
                style={{
                  // textDecoration: "underline",
                  // fontSize: 14,
                  fontWeight: "bold",
                  color: !isForCurrentUser ? "var(--app-main-color)" : "var(--app-accent-3)",
                }}
              >
                <span style={{}}>
                  {user?.full_name || "..."} {isForCurrentUser ? " (Yours)" : ""}{" "}
                </span>{" "}
                {community && " from "}
                <span style={{ color: "var(--app-medium-green)" }}>{community} </span>
              </h6>
              <small className="small-font">{message}</small>
              <small
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CommentDeleteConfirmation
                  show={isForCurrentUser}
                  onDelete={() => onDelete && onDelete(com, (rem) => setCommentItems([...(rem || [])].reverse()))}
                />
                {/* <span
                  onClick={() => prompt("Nation One")}
                  className="touchable-opacity"
                  style={{
                    textDecoration: "underline",
                    color: "#a52424",
                    // marginLeft: 10,
                    fontWeight: "bold",
                  }}
                >
                  Delete{" "}
                </span> */}
                <span style={{ marginLeft: "auto", color: "#cbcbcb" }}>{relativeTimeAgo(created_at)}</span>
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
          background: "rgb(248 248 248)",
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">{staticT?.name?.text || "Your Name"}</InputGroup.Text>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={staticT?.name_placeholder?.text || "Who is making this comment?..."}
              aria-label="text"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={staticT?.comment_placeholder?.text || "Type comment here..."}
              aria-label="User comment"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-success" id="button-addon2" onClick={() => sendComment()}>
              {loading && <Spinner size="sm" style={{ marginRight: 5 }} />}
              {staticT?.button?.text || " Comment"}
            </Button>
          </InputGroup>
        </div>

        <Notification show={error} good={!error}>
          {error}
        </Notification>
      </div>
    </div>
  );
}

export default CommentComponentForModal;
