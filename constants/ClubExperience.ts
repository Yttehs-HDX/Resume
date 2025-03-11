export class ClubExperience {
  static readonly Title = "社团经历";

  static readonly ClubList = [
    {
      Name: "学生就业服务中心",
      Job: "新媒体部门职员",
      Description: {
        Title: "主要职责：",
        Content: [
          "1. 负责学生就业服务中心的官方公众号运营，包括内容创作、排版设计、图文编辑等。",
        ].join("\n"),
      },
      Duration: "2023.09 - 2024.09",
    },
    {
      Name: "龙芯中科联合实验室",
      Job: "操作系统助教",
      Description: {
        Title: "主要工作：",
        Content: [
          "1. 制定、管理课程内容、作业布置，主要讲解操作系统相关核心内容，同时加入基础内容比如 Git、Linux、堆栈内存等辅助讲解。",
          "2. 考核学生的编程能力与操作系统知识，组建小组进行操作系统内核开发。",
        ].join("\n"),
      },
      Duration: "2024.04 - 至今",
    },
  ];
}
