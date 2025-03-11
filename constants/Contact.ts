import { BasicInfo } from "./BasicInfo";

export class Contact {
  static readonly Title = "联系方式";
  static readonly Content = [
    `Email: ${BasicInfo.Email1}`,
    `Email: ${BasicInfo.Email2}`,
  ].join("\n");
}
