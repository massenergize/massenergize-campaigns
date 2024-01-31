type Inner = Array<{ message: string, path: string }>;

/**
 *
 */
export class ValidationError extends Error {
  inner: object[];
  errors: string[];
  path: string;
  value: any;

  /**
   *
   * @param message {string}
   * @param path {string}
   * @param inner {object[]}
   * @param value {any}
   * @constructor
   */
  constructor(message : string, path : string,  inner : Inner = [], value = "") {
    super(message);
    this.name = "ValidationError";

    if (message && path) {
      this.inner = [ { message, path }, ...inner ];
    } else {
      this.inner = inner;
    }

    this.errors = [ message ];

    this.message = message;
    this.errors = [ message ];

    this.path = path;
    this.value = value
  }
}

export default ValidationError;
