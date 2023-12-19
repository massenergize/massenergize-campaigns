import { Tooltip } from "bootstrap";
import React, { useEffect, useState } from "react";

const interactions = [
  { icon: "fa-heart", name: "Likes", count: 1345 },
  { icon: "fa-comment", name: "Comments", count: 185 },
  { icon: "fa-eye", name: "Views", count: 3542 },
  // { icon: "fa-share", name: "Shares", count: 15 },
];
function InteractionsPanel({
  openCommentBox,
  likes,
  views,
  comments,
  openShareBox,
  like,
  liked,
}) {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // setHasLiked(liked);
    setLikeCount(likes);
  }, [likes, liked]);

  const doLike = () => {
    setLikeCount(hasLiked ? likeCount - 1 : likeCount + 1);
    // setHasLiked(!hasLiked);
    like();
  };

  return (
    <div
      className="mt-3"
      style={{
        border: "solid 1px var(--app-medium-green)",
        padding: "10px 15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 3,
      }}
    >
      <div
        // key={index?.toString()}
        onClick={() => {
          // setHasLiked(!hasLiked); // Just for immediate reflection
          doLike();
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0px 10px",
        }}
      >
        <i
          // className={`fa fa-heart interact ${hasLiked ? "already-liked" : ""}`}
          className={`fa fa-heart interact`}
          style={{ marginRight: 6, color: "var(--app-deep-green)" }}
        />

        <small
          className="touchable-opacity"
          // style={{ fontWeight: "bold", textDecoration: "underline" }}
          style={{ fontWeight: "bold" }}
        >
          {`${likeCount ? likeCount : ""} ${
            !likeCount || likeCount === 1 ? " Like" : " Likes"
          }`}
        </small>
      </div>
      <div
        // key={index?.toString()}
        onClick={() => openCommentBox && openCommentBox()}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0px 10px",
        }}
      >
        <i
          className={`fa fa-comments interact`}
          style={{ marginRight: 6, color: "var(--app-deep-green)" }}
        />
        <small
          className="touchable-opacity"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          {`${comments ? comments : ""} ${
            !comments || comments === 1 ? " Comment" : " Comments"
          }`}
        </small>
      </div>
      {views ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "0px 10px",
          }}
        >
          <i
            className={`fa fa-eye`}
            style={{ marginRight: 6, color: "var(--app-deep-green)" }}
          />
          <small style={{ fontWeight: "bold" }}>
            {views} {views === 1 ? " View" : "Views"}
          </small>
        </div>
      ) : (
        <></>
      )}

      <div
        className="touchable-opacity"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0px 10px",
        }}
        onClick={() => openShareBox()}
      >
        <i
          className={`fa fa-share`}
          style={{ marginRight: 6, color: "var(--app-deep-green)" }}
        />
        <small style={{ fontWeight: "bold", textDecoration: "underline" }}>
          Share
        </small>
      </div>

      {/* {interactions.map((inter, index) => {
        return (
          <div
            key={index?.toString()}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "0px 10px",
            }}
          >
            <i
              className={`fa ${inter.icon} interact`}
              style={{ marginRight: 6, color: "var(--app-deep-green)" }}
            />
            <small
              className="touchable-opacity"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {inter.count} {inter.name}
            </small>
          </div>
        );
      })} */}
    </div>
  );
}

export default InteractionsPanel;
