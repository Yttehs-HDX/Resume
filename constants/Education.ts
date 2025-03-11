export class Education {
  static readonly Title = "教育经历";

  static readonly NEU = {
    Name: "东北大学 (Northeastern University, NEU China)",
    Avatar: {
      UrL: "https://www.neu.edu.cn/images/libpic/logo2.png",
      AspectRatio: 334 / 89,
    },
    Major: "电子信息工程 (Electrical Engineering)",
    Duration: "2023.09 - 2027.06",
    Background: "本科",

    Courses: {
      Title: `主修课程：`,
      Content: `${["C++", "数字电路", "操作系统"].join("，")}。`,
    },

    Clubs: {
      Title: `社团活动：`,
      Content: [
        `1. 学生就业服务中心新媒体部门担任职员。`,
      ].join("\n"),
    },

    Labs: {
      Title: `实验室：`,
      Content: [
        `1. 龙芯中科联合实验室担任 OS 助教。`
      ].join("\n"),
    },
  };
}
