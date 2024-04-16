export enum Result {
  "SUCCESS" = 1,
  "ERROR" = 2,
}

export type ResultCode = {
  code: string;
  message: string;
};