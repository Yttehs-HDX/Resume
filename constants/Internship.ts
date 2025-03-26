export class Internship {
  static readonly Title = "实习经历";

  static readonly InternshipList = [
    {
      Enterprise: "北京阿卡西机器人科技有限公司",
      Department: "研发部门",
      Job: "移动 APP 开发",
      Description: [
        {
          Title: "主要工作：",
          Content: [
            "1. 使用 React Native 开发移动 APP ，参与 UI 设计与实现。",
            "2. 设计 API 交互逻辑，封装抽象层接口。",
          ].join("\n"),
        },
      ],
      Duration: "2025.02 - 2025.06",
    },
  ];
}
