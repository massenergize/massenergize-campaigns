import React from "react";

import { stateAbbreviation } from "../../../utils/utils";
import { createEvent } from "ics";

const ICSEventCreator = ({ data }) => {
  const locationFormat = (location) => {
    if (!location) return "";
    let firstLine =
      location.unit && location.unit !== ""
        ? `${location.address || ""}, ${location.unit}`
        : `${location.address || ""}`;
    const state = location.state ? stateAbbreviation(location.state) : "";

    return `${firstLine}${location.city ? `, ${location.city}` : ""}${state ? `, ${state?.value}` : ""}`;
  };

  const getDateArr = (str) => {
    const dateObj = new Date(str);
    const [year, month, day, hour, minute, second, millisecond] = [
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      dateObj.getDate(),
      dateObj.getHours(),
      dateObj.getMinutes(),
      dateObj.getSeconds(),
      dateObj.getMilliseconds(),
    ];

    return [year, month, day, hour, minute, second, millisecond];
  };

  const handleDownloadICS = () => {
    const event = {
      title: data?.name,
      description: data?.featured_summary,
      location: locationFormat(data?.location),
      start: getDateArr(data?.start_date_and_time),
      end: getDateArr(data?.end_date_and_time),
      url: window.location.href,
    };

    createEvent(event, (error, value) => {
      if (error) {
        console.error("Error creating ICS file:", error?.toString());
        return;
      }
      const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${data?.name}.ics`);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div
      onClick={() => handleDownloadICS()}
      className="mt-2 touchable-opacity normal-btn"
      style={{ marginRight: 10, background: "#383838", width: "40%" }}
    >
      <p style={{ margin: 0 }}>
        <i className="fa fa-download" style={{ marginRight: 0 }} /> ICAL
      </p>
    </div>
  );
};

export default ICSEventCreator;
