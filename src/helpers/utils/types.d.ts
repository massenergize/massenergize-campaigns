export declare type AnyObject = Record<string, any>;

export declare type Assign<T extends {}, U extends {}> = {
  [P in keyof T]: P extends keyof U ? U[P] : T[P];
} & U;
