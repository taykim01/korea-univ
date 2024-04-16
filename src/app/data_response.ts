import { Result } from "@/app/types";
import { DataCode } from "./data_code";

export default class DataResponse {
  result: Result;
  message: string;
  errorCode: string;
  payload: any;


  getErrorMessage(errorCode: string): string {
    const errorType = DataCode.find((error) => error.code === errorCode);
    const errorMessage = errorType?.message;
    if (errorMessage) return errorMessage;
    else return "잘못된 오류 코드입니다.";
  }

  constructor(result: Result, errorCode: string, payload: any = {}) {
    if (!result || !errorCode || !payload) {

      const missingParameters = [];

      if (!result) missingParameters.push("result");
      if (!errorCode) missingParameters.push("message");
      if (!payload) missingParameters.push("payload");

      const errorMessage = `The following parameter(s) are missing: ${missingParameters.join(
        ", "
      )}`;
      throw new Error(errorMessage);
    }

    this.result = result;
    this.errorCode = errorCode;
    this.message = this.getErrorMessage(errorCode);
    this.payload = payload;
  }
}