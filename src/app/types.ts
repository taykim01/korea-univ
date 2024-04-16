export enum Device {
  "mobile" = 1,
  "desktop" = 2,
}

export type Responsive = { width: number; responsive: number };

export enum Result {
  "SUCCESS" = 1,
  "ERROR" = 2,
}

export enum Sex {
  "male" = 1,
  "female" = 2,
}

export type ResultCode = {
  code: string;
  message: string;
};

export type QuestionResult = "correct" | "wrong";

export type IconProps = "trash" | "correct" | "wrong" | "back" | "logo";
export type ButtonProps = "main" | "sub" | "mini";
export type InputFieldProps =
  | "text"
  | "textarea"
  | "file"
  | "select"
  | "add"
  | "hashtag"
  | "number";
export type QuestionTypeProps = "result" | "suggested" | "response";

export type Question = {
  answer: string;
  createdAt: Date;
  quote: string;
  keyword: string;
  question: string;
  hashtag: string;
};
