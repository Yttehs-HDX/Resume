export class GithubRepos {
  static readonly Title = "作品展示";

  static readonly RepoList = [
    {
      Username: "Yttehs-HDX",
      Repos: [
        {
          Name: "RISCV64-MikuOS",
          Lang: "Rust",
          Description: [
            "一个基于 RISC-V 架构的操作系统内核，采用 Rust 语言开发。目前支持的特性：",
            "- 支持进程管理，支持进程调度、进程间通信",
            "- 支持虚拟内存，支持分页管理",
            "- 支持设备驱动，支持串口、MMIO 设备",
            "- 支持文件系统，支持 FAT32 文件系统",
            "- 支持调试器，支持 GDB 调试器",
          ].join("\n"),
        },
        {
          Name: "SimpleNote",
          Lang: "Kotlin",
          Description: [
            "使用 Jetpack Compose 开发的 Android 笔记应用，采用 Material You 设计风格。",
            "基于 MVVM 架构，使用 Room 作为数据库，使用 Flow 作为数据流。",
          ].join("\n"),
        },
        {
          Name: "CH32-ST7735-Demo",
          Lang: "Rust",
          Description: [
            "使用 ch32-hal 库与 ST7735 驱动为 CH32V307VCT6 开发的显示屏示例程序。特性如下：",
            "- 使用 SPI 协议与 ST7735 通信",
            "- 使用 PWM 占空比控制背光亮度",
          ].join("\n"),
        },
        {
          Name: "zpacman",
          Lang: "Python",
          Description: [
            "Oh My Zsh 插件管理器，更方便地管理 Oh My Zsh 第三方插件。",
            "目前已经被 unixorn/awesome-zsh-plugins 收入。",
          ].join("\n"),
        },
        {
          Name: "KMP-Chat",
          Lang: "Kotlin",
          Description: "一个基于 WebSocket 协议的聊天室，前端采用 Kotlin Multiplatform 开发，后端采用 Ktor 开发。",
        },
        {
          Name: "Blog",
          Lang: "Makefile",
          Description: [
            "个人技术型博客，采用 Hexo 框架 + Redefine 主题，使用 Cloudflare Pages 部署。",
            "点击顶栏 Blog 按钮可以查看我的博客。",
          ].join("\n"),
        },
        {
          Name: "Resume",
          Lang: "TypeScript",
          Description: "个人简历，使用 React Native Expo 开发。",
        },
        {
          Name: "dotfiles",
          Lang: "Python",
          Description: "ArchLinux 配置文件，包括 Hyprland, NeoVim 等，支持一键部署。",
        },
        {
          Name: "android_kernel_xiaomi_ucmi_nethunter",
          Lang: "C",
          Description: "基于第三方开源内核修改，添加了 NetHunter 支持，适用于小米 10 / Pro。",
        },
      ],
    },
  ];
}
