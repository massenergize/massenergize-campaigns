import { format, formatDistanceToNow, isSameDay, parseISO } from "date-fns";

export function formatTimeRange (startDateString, endDateString) {
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

export function relativeTimeAgo (datetimeString) {
  const date = parseISO(datetimeString);

  return formatDistanceToNow(date, { addSuffix: true });
}

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

export function fetchUrlParams (name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || "";
}

export function getLastSegmentFromUrl (url) {
  const parsedUrl = new URL(url);
  const pathnameSegments = parsedUrl.pathname.split("/").filter(Boolean);

  if (pathnameSegments.length > 0) {
    return pathnameSegments[pathnameSegments.length - 1];
  }

  return null; // Return null if no segments are found
}

export function addUrlParams (currentUrl, params) {
  const url = new URL(currentUrl);
  const searchParams = new URLSearchParams(url.search);

  Object.keys(params).forEach((key) => {
    searchParams.set(key, params[key]);
  });

  return url.pathname + "?" + searchParams.toString();
}

export function generateUniqueRandomString (length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  // Adding a timestamp to make it more unique
  const timestamp = new Date().getTime();
  result += timestamp.toString();

  return result;
}
export function smartString (inputString, maxLength = 30) {
  if (
    typeof inputString !== "string" ||
    typeof maxLength !== "number" ||
    maxLength <= 0
  ) {
    console.error(
      "Invalid input. Please provide a valid string and a positive number of characters."
    );
    return "";
  }

  if (inputString.length <= maxLength) {
    return inputString;
  }

  return inputString.slice(0, maxLength) + "...";
}

export const portalIsAdmin = () => {
  const url = window.location.href;
  return url.includes("admin/");
};

export function mergeArrays (arrays) {
  const mergedArray = [];

  for (const array of arrays) {
    for (const obj of array) {
      const isDuplicate = mergedArray.some((item) => item.id === obj.id);
      if (!isDuplicate) {
        mergedArray.push(obj);
      }
    }
  }
  return mergedArray;
}

export const setPageTitle = (name) => {
  if (!name) return;
  document.title = name;
};
