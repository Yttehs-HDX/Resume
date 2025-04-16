import { getCurrentUrl } from "@/utils/UrlUtil";

export class BasicInfo {
  static readonly Nickname = "Shetty Yttehs";
  static readonly NicknameShort = "Shetty";

  static readonly Resume = getCurrentUrl();
  static readonly Blog = "https://blog.shettydev.com";

  static readonly Github = "https://github.com/Yttehs-HDX";
  static readonly Avatar = "https://avatars.githubusercontent.com/u/72240633?s=400&u=7b32b5df0b0d4fa852f579e82cf78b403fa98b67&v=4";
  static readonly SourceCode = `${this.Github}/Resume`;
}
