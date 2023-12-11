import { format, formatDistanceToNow, isSameDay, parseISO } from "date-fns";

export function formatTimeRange(startDateString, endDateString) {
  if (!startDateString || !endDateString) return "";
  const startDate = parseISO(startDateString);
  const endDate = parseISO(endDateString);

  if (isSameDay(startDate, endDate)) {
    const formattedStartDate = format(startDate, "do MMMM yyyy");
    const formattedStartTime = format(startDate, "HH:mm");
    const formattedEndTime = format(endDate, "HH:mm");

    return `${formattedStartDate} ${formattedStartTime} - ${formattedEndTime}`;
  } else {
    const formattedStartDate = format(startDate, "do MMMM yyyy");
    const formattedEndDate = format(endDate, "do MMMM yyyy");

    return `${formattedStartDate} - ${formattedEndDate}`;
  }
}

export function relativeTimeAgo(datetimeString) {
  const date = parseISO(datetimeString);

  return formatDistanceToNow(date, { addSuffix: true });
}

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

export function fetchUrlParams(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || "";
}
