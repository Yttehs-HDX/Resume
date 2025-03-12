import { BasicInfo } from "./BasicInfo";

export class Blog {
  static readonly Title = "文章推荐";

  static readonly PassageList = [
    {
      Url: `${BasicInfo.Blog}/2025/03/09/react-native-mobx`,
      Title: "React Native MobX",
      Description: "如何在 React Native 项目中实现 MVVM 架构",
    },
  ];
}
