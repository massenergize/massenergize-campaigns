import { parsePhoneNumber, isValidPhoneNumber as validatePhoneNumber } from "libphonenumber-js";
import { isNumber, isString } from "./index";

/**
 *
 * @param str
 * @returns {string}
 */
export function decodeFromBase64 (str) {
  // Going backwards: from byte stream, to percent-encoding, to original string.
  return decodeURIComponent(atob(str)?.split("").map(function (c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}

/**
 *
 * @param str
 * @returns {string}
 */
export function encodeToBase46 (str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    function toSolidBytes (match, p1) {
      return String.fromCharCode("0x" + p1);
    }));
}

export function removeTrailingCharacter (str, char = "0", all = false) {
  /**
   * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
   */
  if (!all) {
    return str.endsWith(char) ? str.slice(0, -1) : str;
  }
}

export function removePathTrailingHashPound (path) {
  if (path.endsWith("#")) {
    path = path.replace(new RegExp("#" + "$"), "");
  }
  return path;
}

export function removePathTrailingSlash (path) {

  if (path !== "/") {
    return removeTrailingCharacter(path, "/");
  }
  return path;
}

/**
 *
 * @param path {String}
 * @returns {string|*}
 */
export function removeAllPathTrailingSlashes (path) {
  if (path !== "/") {
    let newPath = path;
    let j = path.length - 1;

    while (j >= 0) {
      let len = newPath.length;
      if (newPath.endsWith("/")) {
        newPath = newPath.substring(0, len - 1);
        j--;
      } else {
        break;
      }
    }
    return newPath;
  }
  return path;
}

/**
 *
 * @param str
 * @param to{String<'-',' _',' '>}
 * @returns {*}
 */
export const camelCaseTo = (str, to = "kebab") => {

  let replacers = {
    kebab: "-",
    snake: "_",
    space: " ",
    title: " "
  };

  return str?.split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? replacers[to] : ""}${letter.toLowerCase()}` : letter;
    })
    .join("").replace(/ /g, '');
};

export const kebabize = (str) => {
  return camelCaseTo(str, "kebab");
};

export const toSnakeCase = (str) => {
  return camelCaseTo(str, "snake");
};

export const camelCaseToSpacedCase = (str) => {
  return camelCaseTo(str, "space");
};

export function randomString ({ length = 5, digits = true, lowercase = true, uppercase = true, spaces = false }) {
  let config = { digits, length, lowercase, spaces, uppercase };

  let charSets = {
    caps: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    digits: "0123456789",
    smallCaps: "abcdefghijklmnopqrstuvwxyz",
    spaces: " ",
  };

  let text = "";
  let possible = "";

  for (let key in config) {
    if (config[key] === true && key !== "length") {
      possible += charSets[key];
    }
  }

  let len = possible.length;

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * len));
  }

  len = possible = null;
  return text;
}

/* To Title Case © 2018 David Gouch | https://github.com/gouch/to-title-case */
export const toTitleCase = function () {
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
  var wordSeparators = /([ :–—-])/;

  return this.split(wordSeparators)
    .map(function (current, index, array) {
      if (
        /* Check for small words */
        current.search(smallWords) > -1 &&
        /* Skip first and last word */
        index !== 0 &&
        index !== array.length - 1 &&
        /* Ignore title end and subtitle start */
        array[index - 3] !== ":" &&
        array[index + 1] !== ":" &&
        /* Ignore small words that start a hyphenated phrase */
        (array[index + 1] !== "-" ||
          (array[index - 1] === "-" && array[index + 1] === "-"))
      ) {
        return current.toLowerCase();
      }

      /* Ignore intentional capitalization */
      if (current.substr(1).search(/[A-Z]|\../) > -1) {
        return current;
      }

      /* Ignore URLs */
      if (array[index + 1] === ":" && array[index + 2] !== "") {
        return current;
      }

      /* Capitalize the first letter */
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase();
      });
    })
    .join("");
};

export const contains = (str, subStr) => {
  if (str && subStr) {
    return (str.toString().toLowerCase().indexOf(subStr.toString().toLowerCase()) > -1);
  }
};

/**
 *
 * @param bytes {Number|String}
 * @param decimals {Number}
 * @returns {string}
 */
export function formatBytes (bytes, decimals = 2) {
  if (bytes === 0 || !bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [ "Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

/**
 * @use for removing all instances of specific characters from a string, be it a single string of char(s) or an array of chars
 * @param str {String}
 * @param chars {Array<String>|String}
 * @param replaceWith {String}
 * @returns {String | *}
 */
export const stripChars = function (str, chars, replaceWith = "") {
  if (!str) return str;

  if (Array.isArray(chars)) {
    for (let i = 0, len = chars.length; i < len; i++) {
      str = str.replace(new RegExp(chars[i], "ig"), replaceWith);
    }

    return str;
  }

  if (isString(chars)) {
    return str.replace(new RegExp(chars, "ig"), replaceWith);
  }

  return str;
};

/**
 * @use for checking if a string value is empty
 * @param str {String}
 * @returns {boolean}
 */
export const isEmpty = function (str) {
  return null === str || undefined === str ? true : /^[\s\xa0]*$/.test(str);
};

/**
 * @use for checking if a string value is empty
 * @param str
 * @returns {boolean}
 */
export const isSpace = function (str) {
  return /^[\s\xa0]*$/.test(str);
};

export const toSentenceCase = function (str) {
  if (!str || typeof str !== "string") return "";
  str = str.toString().toLowerCase();
  return (str[0].toUpperCase() + str.substring(1, str.length));
};

/**
 * @use for capitalising a string
 * @param str
 * @returns {string}
 */
export const capitalise = function (str) {
  if (str) {
    str = str.toString().toLowerCase().split(" ");
    return str.map((s) => {
      return toSentenceCase(s);
    }).join(" ");
  }
  return "";
};

/**
 * @use for capitalising a string
 * @type {(function(*): string)|*}
 */
export const capitalize = capitalise;

/**
 *
 * @param phoneNumber
 * @param country
 * @param numberType
 * @returns {string|*}
 */
export const formatPhoneNumber = (phoneNumber, country = "GH", numberType = "INTERNATIONAL") => {

  if (phoneNumber && country) {
    phoneNumber = parsePhoneNumber(phoneNumber, country);
    if (phoneNumber) {
      if (numberType === "NATIONAL") {
        return phoneNumber.formatNational();
      }
      return phoneNumber.formatInternational();
    }
    return "";
  }
  return "";
};

/**
 * @use for validating a phone number
 * @param phoneNumber
 * @param country
 * @returns {boolean}
 */
export const isValidPhoneNumber = (phoneNumber, country = "GH") => {
  return !isEmpty(phoneNumber) && validatePhoneNumber(phoneNumber, country);
}

export const formatCurrency2 = (amount = 0.00, currency = "GHS", locale = "en-GH") => {

  let options = { currency, style: "currency" };

  let formatter = new Intl.NumberFormat(locale, options);

  amount = formatter.formatToParts(parseFloat(amount).toFixed(2));

  amount = amount.map(({ type, value }) => {
    switch (type) {
      case "currency": {
        return `${value} `;
      }
      default : {
        return value;
      }
    }
  }).reduce((string, part) => string + part);

  return amount;
};

/**
 *
 * Used to format numeric values into friendly numbers
 * @param {Number|String} amount
 * @param {String} currency
 * @param {String} [locale]
 * @param {Number} [decimalPlaces]
 * @param {String} locale
 * @returns {string|unknown}
 */
export const formatCurrency = function (amount = 0.00, currency = "GHS", decimalPlaces = 2, locale = "en-GH") {
  amount = parseFloat(amount);
  if (!amount) {
    return "0.00";
  }

  if (typeof amount !== "number" || !isNumber(parseFloat(amount))) {
    return "0.00";
  }

  let options = { currency, style: "currency" };
  let formatter = new Intl.NumberFormat(locale, options);

  if (typeof decimalPlaces === "number") {
    amount = formatter.formatToParts(amount.toFixed(decimalPlaces));
  } else {
    amount = formatter.formatToParts(amount);
  }

  return amount.map(({ type, value }) => {
    if (type !== "currency") {
      return value;
    }
    return "";
  }).reduce((string, part) => string + part);
};

/**
 * @use for replacing all instances of urls and email addresses with hyperlinks  in a string
 * @param text
 * @returns {*}
 */
export const urlify = (text) => {
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

  const emailRegEx = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

  text = text.replace(urlRegex, (url) => {
    let hyperlink = url;

    if (!hyperlink.match("^https?:\/\/")) {
      hyperlink = "http://" + hyperlink;
    }
    return `<a href="${hyperlink}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  return text.replace(emailRegEx, (url) => {
    return `<a href="mailto:${url}">${url}</a>`;
  });
};

/**
 *
 * @param {String} text
 * @param maxLength
 * @param ellipsisLength
 * @returns {string|*}
 */
export const ellipsify = (text, maxLength = 100, ellipsisLength = 3) => {
  if (text && typeof text === "string" && text.length > maxLength) {
    return text.substring(0, maxLength).trim() + (typeof ellipsisLength === "number" ? ".".repeat(ellipsisLength) : "...");
  }
  return text;
};

export const isNumberCharacter = (str) => {
  return /[0-9]/i.test(str);
};

export const isSingleAlphabetCharacter = (str) => {
  return /[a-zA-Z]/i.test(str);
};

export const replaceCharsFromTo = (str, from, lastBut = 3, replaceWith = "*") => {
  str = str?.split("");
  let i = str.length - (lastBut + 1);
  for (; i >= 0; i--) {
    str[i] = replaceWith;
  }

  return str?.join("")
}

export const obscureText = function (text, start = 0, end = null, hideWith = "*") {
  text = text?.split("@");
  return `${replaceCharsFromTo(text[0], 4, hideWith)}`;
}

export const replaceCharToLastBut = (str, lastBut = 3, replaceWith = "*") => {
  str = str?.split("");
  let i = str.length - (lastBut + 1);
  for (; i >= 0; i--) {
    str[i] = replaceWith;
  }

  return str.join("")
}

export const obscurePhone = function (phone, hideWith = "*") {

  return replaceCharToLastBut(phone, 3, hideWith);
}

export const obscureEmail = function (email, hideWith = "*") {
  if (!email || typeof email !== "string") {
    return "";
  }

  email = email?.split("@");
  const id = email[0];
  const provider = email[1]?.split(".");

  return `${replaceCharToLastBut(id, 2, hideWith)}@${replaceCharToLastBut(provider[0], 2)}.${provider[1]}`;
}

export const redirectTo = (path) => {
  window.location.href = path;
}

/**
 * @param arr {Array}
 * @param [separator] {string}
 * @returns {*|string}
 */
export const createReadableList = (arr, separator = ", ") => {
  if (!arr || !Array.isArray(arr) || !arr.length) {
    return "";
  }

  let readableList = arr[0], len = arr.length - 1;

  for (let i = 1; i <= len; i++) {
    if (i === len) {
      readableList += ` and ${arr[i]}`;
    } else {
      readableList += `${separator}${arr[i]}`;
    }
  }

  return readableList;
};

// console.log(createReadableList(["a", "b", "c",]));
