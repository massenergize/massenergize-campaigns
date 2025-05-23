import { format, formatDistanceToNow, isSameDay, parseISO } from "date-fns";
import { ME_STATES } from "./States";
// import { LANGUAGES } from "./internationalization/languages";
import { enUS, es, ptBR } from "date-fns/locale";
import { DEFAULT_ENGLISH_CODE, PREFERRED_LANGUAGE_STORAGE_KEY } from "src/redux/redux-action-types";
import { getPreferredLanguageISO } from "src/redux/actions/actions";
import {IS_CANARY, IS_LOCAL, IS_PROD} from "../config/environment";

const LANG_CODE_TO_DATE_OBJ = { en: enUS, es, pt: ptBR }; // means when a new language is approved, we wld have to add it in here as well


export const intoChunks = (arr, chunkSize) => { 
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
export const getCountryFromCode = (code) => {
  return (code?.split("-")[1] || "US").toLowerCase();
};

export function sortEvents(events) {
  return events?.sort((a, b) => new Date(a?.event?.start_date) - new Date(b?.event?.start_date));
}
export const stateAbbreviation = (stateName) => {
  return ME_STATES.find((s) => s?.name?.toLowerCase() === stateName?.toLowerCase());
};

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
    const formattedStartDate = format(startDate, "do MMM, yyyy");
    const formattedEndDate = format(endDate, "do MMM, yyyy");
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
}

const getLocale = () => {
  let locale = pruneLanuguage(getPreferredLanguageISO());
  return LANG_CODE_TO_DATE_OBJ[locale] || enUS;
};
export function formatDate(dateString, formatString = "MMM d, yyyy") {
  if (!dateString) return "";
  const locale = getLocale();

  const date = parseISO(dateString);
  return format(date, formatString, { locale });
}

export function formatTime(dateString, formatString = "HH:mm aaa") {
  if (!dateString) return "";
  const locale = getLocale();
  const date = parseISO(dateString);
  return format(date, formatString, { locale });
}

const pruneLanuguage = (code) => {
  const DEFAULT = "en";
  if (!code) return DEFAULT;
  return code?.split("-")[0] || DEFAULT;
};

export function relativeTimeAgo(datetimeString) {
  const locale = getLocale();
  const date = parseISO(datetimeString);
  return formatDistanceToNow(date, { addSuffix: true, locale });
}

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

export function fetchUrlParams(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || "";
}

export function getLastSegmentFromUrl(url) {
  const parsedUrl = new URL(url);
  const pathnameSegments = parsedUrl.pathname?.split("/").filter(Boolean);

  if (pathnameSegments.length > 0) {
    return pathnameSegments[pathnameSegments.length - 1];
  }

  return null; // Return null if no segments are found
}

export function addUrlParams(currentUrl, params) {
  const url = new URL(currentUrl);
  const searchParams = new URLSearchParams(url.search);

  Object.keys(params).forEach((key) => {
    searchParams.set(key, params[key]);
  });

  return url.pathname + "?" + searchParams.toString();
}

export function generateUniqueRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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
export function smartString(inputString, maxLength = 30) {
  if (typeof inputString !== "string" || typeof maxLength !== "number" || maxLength <= 0) {
    console.error("Invalid input. Please provide a valid string and a positive number of characters.");
    return "";
  }

  if (inputString.length <= maxLength) {
    return inputString;
  }

  return inputString.slice(0, maxLength) + "...";
}

export function mergeArrays(arrays, reducer) {
  const mergedArray = [];

  for (const array of arrays) {
    for (const obj of array) {
      let isDuplicate;

      if (reducer) mergedArray.find((item) => reducer(item, obj));
      else mergedArray.find((item) => item.id === obj.id);
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

export function truncateRichText(richText, maxHeight) {
  // Create a temporary div element to hold the parsed rich text
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = richText;

  document.body.appendChild(tempDiv);
  // Get the height of the content in the temporary div
  const contentHeight = tempDiv.offsetHeight + 40;
  var isLong = false;

  // If the content height is within the specified limit, no need to truncate
  if (contentHeight <= maxHeight) {
    document.body.removeChild(tempDiv);
    return { truncatedContent: richText, isLong };
  }

  // Iterate through the child nodes to find the point to truncate
  let currentHeight = 0;
  let truncatedContent = "";
  isLong = true;

  for (const childNode of tempDiv.childNodes) {
    const nodeHeight = childNode.offsetHeight;

    // Check if adding this node exceeds the maxHeight
    if (currentHeight + nodeHeight <= maxHeight) {
      truncatedContent += childNode.outerHTML;
      currentHeight += nodeHeight;
    } else {
      // Truncate the text within this node to fit the remaining height
      const remainingHeight = maxHeight - currentHeight;
      const truncatedText = truncateText(childNode.textContent, remainingHeight);
      truncatedContent += `<div style="overflow: hidden; text-overflow: ellipsis; max-height: ${remainingHeight}px;">${truncatedText}</div>`;
      break;
    }
  }

  return { truncatedContent, isLong };
}

function truncateText(text, maxLength) {
  // Truncate the text to fit within the specified maxLength
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

export const objHasContent = (obj) => {
  if (!obj) return false;
  return Object.keys(obj || {}).length > 0;
};

export function findItemAtIndexAndRemainder(arr, comparator) {
  const remainder = [];
  let foundItem;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const found = arr[i];
    if (comparator && comparator(found)) {
      foundItem = found;
      index = i;
    } else remainder.push(found);
  }

  return { index, foundItem, remainder };
}

export function sortByProperty(arr, getProperty) {
  if (!Array.isArray(arr) || typeof getProperty !== "function") {
    throw new Error("Invalid input. Please provide an array of objects and a valid function to retrieve the property.");
  }

  return arr.sort((a, b) => {
    const propertyA = getProperty(a);
    const propertyB = getProperty(b);

    if (propertyA < propertyB) {
      return -1;
    } else if (propertyA > propertyB) {
      return 1;
    } else {
      return 0;
    }
  });
}

// This function takes in a url, and adds the json data as search params to the url
export function addUrlSearchParams(url, jsonData) {
  // Check if both URL and JSON data are provided
  if (!url || !jsonData) {
    console.log("URL and JSON data are required.", url, jsonData);
    return;
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    const linkObj = new URL(window.location.href);
    url = linkObj.origin + url;
  }
  // Convert JSON data to URL search params
  const searchParams = new URLSearchParams();
  for (const key in jsonData) {
    if (Object.hasOwnProperty.call(jsonData, key)) {
      searchParams.append(key, jsonData[key]);
    }
  }
  // Parse the provided URL
  const urlObject = new URL(url);
  // Check if URL already has search parameters
  if (urlObject.search) {
    // If search parameters already exist, append the new search params
    const existingSearchParams = new URLSearchParams(urlObject.search);
    for (const [key, value] of existingSearchParams) {
      searchParams.append(key, value);
    }
  }
  // Attach search params to the URL
  urlObject.search = searchParams;
  // Return the pathname with the query search params
  return urlObject.pathname + urlObject.search;
}

export const scrollIntoView = (ref, offset = 0) => {
  // params = params || {};
  offset = offset * -1;
  if (ref && ref?.current) {
    const element = ref.current;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ behavior: "smooth", top: elementPosition + offset });
  }
};

export function isEmpty(value) {
  if (typeof value === "undefined" || value === null) {
    return true;
  }
  if (typeof value === "string" && value.trim() === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }
  return false;
}

let baseUrl;
if (IS_LOCAL) {
  baseUrl = "http://massenergize.test:3000/";
} else if (IS_CANARY) {
  baseUrl = "https://communities-canary.massenergize.org/";
}
else if (IS_PROD) {
  baseUrl = "https://communities.massenergize.org/";
}  else  {
  baseUrl = "https://communities.massenergize.dev/";
}

export const BASE_URL = baseUrl

// at this point you can set the value stored in `baseUrl` to ```javascript null``` since it's been copied into `BASE_URL` so it can be garbage collecte
