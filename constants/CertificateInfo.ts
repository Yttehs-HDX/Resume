import { BasicInfo } from "./BasicInfo";

export class CertificateInfo {
  static readonly Organization = BasicInfo.Nickname;

  static readonly StartYear = 2024;
  static readonly EndYear = new Date().getFullYear();

  static readonly PoweredFramework = "React Native Expo";
  static readonly PoweredFrameworkUrl = "https://expo.dev";
}
