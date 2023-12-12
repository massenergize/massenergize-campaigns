import React from "react";
import { useNavigate } from "react-router-dom";
import { formatTimeRange } from "../../../utils/utils";

function EventBox({ event }) {
  const { name, image, start_date, end_date, id } = event || {};
  const navigator = useNavigate();
  return (
    <div
      className="elevate-float-pro"
      style={{
        borderRadius: 10,
        background: "white",
        minHeight: 300,
      }}
    >
      <img
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 5,
        }}
        src={
          image?.url || "https://picsum.photos/id/870/300/300?grayscale&blur=2"
        }
      />
      <div style={{ padding: "15px 15px" }}>
        <h6
          className="touchable-opacity"
          onClick={() => navigator(`/technology/event/${id}`)}
          style={{ textDecoration: "underline" }}
        >
          {name || "..."}
          <i
            className="fa fa-long-arrow-right"
            style={{ marginLeft: 10, color: "var(--app-medium-green)" }}
          />
          {/* <span
            style={{
              marginLeft: 7,
              color: "var(--app-medium-green)",
              textDecoration: "underline",
            }}
          >
            See More...
          </span> */}
        </h6>

        <p
          style={{
            marginTop: 15,
            fontWeight: "bold",
            color: "var(--app-medium-green)",
          }}
        >
          <i className="fa fa-clock-o" />{" "}
          <span> {formatTimeRange(start_date, end_date)}</span>
        </p>
      </div>
    </div>
  );
}

export default EventBox;
