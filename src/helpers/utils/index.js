import parsePhoneNumber from "libphonenumber-js";
import dayjs from "dayjs";
import { updateCampaign } from "../../requests/campaign-requests";
import { RESET } from "../../components/admin-components/FileUploader";

export const isEmpty = function (str) {
  return null === str || undefined === str ? true : /^[\s\xa0]*$/.test(str);
};

/**
 *
 * @param strArr {Array<String>}
 */
export const allEmpty = function allEmpty(strArr) {
  return strArr.every(isEmpty);
};

/**
 *
 * @param strArr {Array<String>}
 */
export const someEmpty = function someEmpty(strArr) {
  return strArr.some(isEmpty);
};

/**
 * @param value
 * @returns {boolean}
 */
export const isDefined = function (value) {
  return typeof value !== "undefined";
};

/**
 * Check if value is a number
 * @param value {Number}
 * @returns {boolean}
 */
export const isNumber = function (value) {
  return typeof value === "number" && !isNaN(value);
};

/**
 * Check if value is a string
 * @param value {String}
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === "string";
}

/**
 * Check if value is an array
 * @param value {Array}
 * @returns {arg is any[]}
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 *
 * @param obj {Object}
 * @returns {boolean}
 */
export const isArrayLike = function (obj) {
  const type = typeof obj;
  // We do not use isObject here in order to exclude function values.
  return (
    obj !== null && (type === "array" || type === "string" || (type === "object" && typeof obj.length === "number"))
  );
};

/**
 *
 * @param object
 * @returns {boolean}
 */
export const objectIsEmpty = function (object) {
  return object === null || typeof object === "undefined" || Object.keys(object).length < 1;
};

export const objectMap = (obj, f, opt_obj) => {
  var res = {};
  for (var key in obj) {
    res[key] = f.call(/** @type {?} */ (opt_obj), obj[key], key, obj);
  }
  return res;
};

export const toDecimalPlaces = (value, decimalPlaces = 2) => {
  return Number(value).toFixed(decimalPlaces);
};

/**
 * Extend an object with the members of another
 * This copying is done in place
 * Example:
 * var o = {};
 * Bee.Object.extend(o, {a: 0, b: 1});
 * o; // {a: 0, b: 1}
 * Bee.Object.extend(o, {b: 2, c: 3});
 * o; // {a: 0, b: 2, c: 3}
 * @param dest {Object} The object to modify. Existing properties will be
 *     overwritten if they are also present in one of the objects in
 *     If the dest is a falsie value the method will return the src object
 * @param src {Object|Array<Object>} The object or array of objects from which values will be copied.
 * @param {Boolean} [strict]
 * @returns {*}
 */
export const extend = function (dest = {}, src, strict) {
  let copySrcToDest = function (dest, src) {
    for (let key in src) {
      if (strict) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      } else {
        dest[key] = src[key];
      }
    }
  };

  if (!Array.isArray(src)) {
    copySrcToDest(dest, src);
  } else {
    src.forEach(function (src) {
      copySrcToDest(dest, src);
    });
  }
  copySrcToDest = null;
  return dest;
};

export const noop = () => {};

/**
 *
 * @param url {String}
 * @returns {{}}
 */
export const getQueryParams = function (url) {
  if (url || typeof window !== "undefined") {
    url = url ? url : window.location.href;
    let params = {};
    if (url.endsWith("#")) {
      url = url.replace(new RegExp("#" + "$"), "");
    }
    let queryString = url.split("?")[1];
    if (!queryString) {
      return params;
    }
    let queryArray = queryString.split("&");

    queryArray.forEach((param) => {
      let [key, value] = param.split("=");
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
    });

    url = queryString = queryArray = null;

    return params;
  }
  return {};
};

/*export const getQueryParams = function (url) {
  if (url || typeof window !== "undefined") {
    url = url ? url : window.location.href;
    let { query } = parse(url, true);
    return query
  }
  return query
}*/

/*export const uploadFile = async function (path, name, file, onUploadProgress) {
  let formData = new FormData();

  formData.append(name, file);

  onUploadProgress = typeof onUploadProgress === 'function' ? onUploadProgress : noop

  return axios.post(path, formData, {
    headers : {
      "Content-Type" : "multipart/form-data",
    },
    onUploadProgress
  })
}*/

export const createPreviewImage = function (image) {
  if (typeof window !== "undefined") {
    const URL = window.URL || window.webkitURL;

    if (URL) {
      return URL.createObjectURL(image);
    }
  }
  return null;
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

/**
 *
 * @param name
 * @param event
 * @param {Function} [onChange]
 * @returns {{image: *, imageFile}}
 */
export const handleImageFileInputChange = async function (name, event, onChange) {
  let files = event.target.files;

  if (files && files.length) {
    let imageFile = files[0];

    if (/^image\/\w+/.test(imageFile.type)) {
      let image = createPreviewImage(imageFile);

      let imageDataUrl = await readFile(imageFile);

      // apply rotation if needed
      // const ORIENTATION_TO_ANGLE = {
      //   '3' : 180,
      //   '6' : 90,
      //   '8' : -90,
      // }
      // const orientation = await getOrientation(imageFile)
      // const rotation = ORIENTATION_TO_ANGLE[orientation]
      // if (rotation) {
      //   imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
      // }

      if (typeof onChange === "function") {
        onChange(name, { image, imageDataUrl, imageFile }, event);
      }

      return { image, imageDataUrl, imageFile, name };
    }
  }
};

export const formatPhoneNumber = (phoneNumber, numberType = "INTERNATIONAL", country = "US") => {
  if (phoneNumber) {
    phoneNumber = parsePhoneNumber(phoneNumber, country);
    if (numberType === "NATIONAL") {
      return phoneNumber.formatNational();
    }
    return phoneNumber.formatInternational();
  }
  return "";
};

/**
 *
 * @param dataUri {String}
 * @param filename {String}
 * @returns {File}
 */
export function dataURItoFile(dataUri, filename) {
  let arr = dataUri.split(",");
  let mimeType = arr[0].match(/:(.*?);/)[1];
  let byteStr = atob(arr[1]);
  let bStringLength = byteStr.length;
  let u8arr = new Uint8Array(bStringLength);

  while (bStringLength--) {
    u8arr[bStringLength] = byteStr.charCodeAt(bStringLength);
  }

  return new File([u8arr], filename, { type: mimeType });
}

/**
 *
 * @param dataURI {URL}
 * @returns {Blob}
 */
export function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0) {
    byteString = atob(dataURI.split(",")[1]);
  } else {
    byteString = unescape(dataURI.split(",")[1]);
  }
  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { filename: "image.jpg", type: mimeString });
}

/**
 *
 * @param file {File}
 * @returns {Promise<unknown>}
 */
export function fileToBlobDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 *
 * @param file {File}
 * @param fileType
 * @returns {ArrayBuffer}
 */
export function fileToBlob(file, fileType) {
  fileType = fileType || file.type;

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), { type: fileType });
    reader.readAsArrayBuffer(file);
  });
}

export function ArrayFromLength(length, callback) {
  return Array.from({ length }, callback ? callback : () => undefined);
}

export const formatDebugValue = ({ label, value }) =>
  label + ": " + (typeof value === "object" ? JSON.stringify(value) : value);

export const imageExists = (containerObject, key) => {
  return typeof containerObject[key]?.url !== "undefined";
};

export const getImageValue = (containerObject, key) => {
  const value = containerObject[key];
  const isNormalJson = value && typeof value?.url === "string";

  if (!value) return { [key]: "reset" };
  if (isNormalJson) return {};
  return { [key]: value };
  // if (imageExists(containerObject, key)) {
  //   return {}
  // }

  // if (containerObject[key] === null || typeof containerObject[key] === "undefined") {
  //   return { [key]: RESET }
  // }

  // return { [key]: containerObject[key] }
};
