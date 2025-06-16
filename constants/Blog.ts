import { BasicInfo } from "./BasicInfo";

export class Blog {
  static readonly Title = "文章推荐";

  static readonly PassageList = [
    {
      Url: `${BasicInfo.Blog}/2025/03/09/react-native-mobx`,
      Title: "React Native MobX",
      Description: "如何在 React Native 项目中实现 MVVM 架构",
      Date: "2025-03-09",
    },
    {
      Url: `${BasicInfo.Blog}/2025/06/09/software-engineer-micro-program`,
      Title: "用软件工程的思维进行单片机编程",
      Description: "软件开发者的单片机初体验",
      Date: "2025-06-09",
    },
    {
      Url: `${BasicInfo.Blog}/2025/06/15/turing-complete-simple-cond`,
      Title: "图灵完备 8 元件 COND - 加法器解法",
      Description: "只用 10 个元件通过 “条件判断” 关卡",
      Date: "2025-06-15",
    },
  ];
}
