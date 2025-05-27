export class Internship {
  static readonly Title = "实习经历";

  static readonly InternshipList = [
    {
      Enterprise: "北京阿卡西机器人科技有限公司",
      Department: "研发部门",
      Job: "移动 APP 开发，全栈工程师",
      Description: [
        {
          Title: "主要工作：",
          Content: [
            "1. 作为前端项目主管，指导 React Native Expo 移动 APP 开发。",
            "2. 参与 UI 设计与实现，处理多平台差异。",
            "3. 设计 API 交互逻辑，封装抽象层接口。",
            "4. 参与后端 API 设计，编写文档。",
          ].join("\n"),
        },
        {
          Title: "杰出贡献：",
          Content: [
            "1. 使用 MobX 重构实现类似 Jetpack Compose 的 MVVM 架构，分离视图与数据处理。",
            "2. 为团队提供若干个抽象子组件，提高组件的复用性，减少开发成本。",
          ].join("\n"),
        },
        {
          Title: "项目成果：",
          Content: [
            "CalGPT APP 已上架 App Store。",
          ].join("\n"),
        },
      ],
      Duration: "2025.02 - 2025.09",
    },
  ];
}
