import {
  formatCurrency,
  ellipsify,
  formatBytes,
  isSpace,
  kebabize,
  urlify,
  createReadableList,
  stripChars,
  isEmpty,
  obscureEmail,
} from "./string";

describe('formatCurrency', () => {
  it('should throw an error if called without a number', () => {
    expect(formatCurrency()).toBe('0.00');
  });

  it('should return formatted currency', () => {
    expect(formatCurrency(123456789)).toBe('123,456,789.00');
  });
  it('should return formatted currency', () => {
    expect(formatCurrency(123456789.123)).toBe('123,456,789.12');
  });
});

describe("ellipsify", () => {
  it("should return a string with ellipsis if string is longer than 20 characters", () => {
    expect(ellipsify("This is a very long string", 20)).toBe("This is a very long...");
  });

  it("should return a string without ellipsis if string is less than 100 characters", () => {
    expect(ellipsify("This is a short string")).toBe("This is a short string");
  });

  it("should return undefined string is not passed", () => {
    expect(ellipsify()).toBe(undefined);
  });
});

describe("formatBytes", () => {
  it("should return a string with bytes", () => {
    expect(formatBytes(123456789)).toBe("117.74 MB");
  });

  it("should return '0 Bytes' if byte is 0", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
  });

  it("should return '0 Bytes' if bytes is falsy", () => {
    expect(formatBytes(undefined)).toBe("0 Bytes");
  });

  it("should return '0 Bytes' if bytes is not passes", () => {
    expect(formatBytes()).toBe("0 Bytes");
  });
});

describe("isSpace", () => {
  it("should return true if string is a space character", () => {
    expect(isSpace(" ")).toBe(true);
  });

  it("should return true if string is a tab character", () => {
    expect(isSpace("\t")).toBe(true);
  });

  it("should return false if string is not a space character", () => {
    expect(isSpace("a")).toBe(false);
  });
});

describe("kebabize", () => {
  it("should return a string in kebab case", () => {
    expect(kebabize("This is a string")).toBe("this-is-a-string");
  });
})

describe("createReadableList", () => {
  it("should return an empty string if the array is empty", () => {
    expect(createReadableList([])).toBe("");
  });

  it("should return an empty string if the array is not passed", () => {
    expect(createReadableList()).toBe("");
  });

  it("should return just the first item if the array has one item", () => {
    expect(createReadableList(["a"])).toBe("a");
  });

  it("should return a string in readable list format", () => {
    expect(createReadableList(["a", "b", "c"])).toBe("a, b and c");
  });

  it("should return the first string and the second string if only two items are passed", () => {
    expect(createReadableList(["a", "b"])).toBe("a and b");
  });
});

describe("urlify", () => {
  it("should return a string with urls replaced with html anchor tags hyperlinks", () => {
    expect(urlify("This is a string with a url https://www.google.com")).toBe("This is a string with a url <a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.google.com</a>");
  });

  it("should return a string with emails replaced with html email-type anchor tags hyperlinks", () => {
    expect(urlify("This is a string with an email address georgeranch31@gmail.com")).toBe("This is a string with an email address <a href=\"mailto:georgeranch31@gmail.com\">georgeranch31@gmail.com</a>");
  });

  it("should return a string with urls and emails replaced with html anchor tags hyperlinks", () => {
    expect(urlify("This is a string with a url https://www.google.com and an email address")).toBe("This is a string with a url <a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.google.com</a> and an email address");
  });

  it("should just return the string if no urls or emails are present in the string", () => {
    expect(urlify("This is a string with no urls or emails")).toBe("This is a string with no urls or emails");
  });
});

describe("stripChars", () => {
  it("should return a string with the specified characters in array removed", () => {
    expect(stripChars("This is a string with characters to remove", ["a", "i"])).toBe("Ths s  strng wth chrcters to remove");
  });

  it("should return a string with the specified character(s) in string removed", () => {
    expect(stripChars("This is a string with characters to remove", "a")).toBe("This is  string with chrcters to remove");
  });

  it("should return the string if no characters are passed", () => {
    expect(stripChars("This is a string with characters to remove")).toBe("This is a string with characters to remove");
  });

  it("should return the string if no characters are passed", () => {
    expect(stripChars("This is a string with characters to remove", [])).toBe("This is a string with characters to remove");
  });

  it("should return undefined if no string is passed", () => {
    expect(stripChars()).toBe(undefined);
  });
})

describe("obscureEmail", () => {
  it("should return a string with the email address obscured", () => {
    expect(obscureEmail("ricky@mailinatory.com")).toBe("***ky@*********ry.com");
  });

  it("should return an empty string if no email address is passed", () => {
    expect(obscureEmail()).toBe("");
  });

  it("should return an empty string if an empty string is passed", () => {
    expect(obscureEmail("")).toBe("");
  });

  it("should return an empty string if a falsy value is passed", () => {
    expect(obscureEmail(undefined)).toBe("");
  });

  it("should return an empty string if a non-string value is passed", () => {
    expect(obscureEmail(123)).toBe("");
  });
});

describe("isEmpty", () => {
  it("should return true if the string is empty", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("should return true if the string is a space", () => {
    expect(isEmpty(" ")).toBe(true);
  });

  it("should return true if the string is a tab", () => {
    expect(isEmpty("\t")).toBe(true);
  });

  it("should return false if the string is not empty", () => {
    expect(isEmpty("a")).toBe(false);
  });

  it("should return true if the string is undefined", () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it("should return true if the string is null", () => {
    expect(isEmpty(null)).toBe(true);
  });
})
