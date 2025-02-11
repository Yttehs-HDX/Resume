import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  colorScheme: "light" | "dark";
};
type ParentProps = PropsWithChildren<{
  colorScheme: "light" | "dark";
}>;

export default function MainContent({ colorScheme }: Props) {
  return (
    <View style={styles.column}>
      <Title colorScheme={colorScheme}>
        个人优势
      </Title>
      <Content colorScheme={colorScheme}>
        0. Github 和 个人博客请点击右上角。
      </Content>
      <Content colorScheme={colorScheme}>
        1. 熟悉 Kotlin 语言，具备使用 Jetpack 组件套件开发高质量 Android 应用的能力，具备使用 Kotlin Multiplatform 开发桌面 + Android 双端应用的能力。
      </Content>
      <Content colorScheme={colorScheme}>
        2. 熟悉 JavaScript 和 TypeScript，具备使用 React Native 框架开发跨平台 App 的能力。
      </Content>
      <Content colorScheme={colorScheme}>
        3. 掌握 Rust 语言进行 no_std 环境下的底层系统开发，具备在 RISC-V64 架构上工作的实战经验，开发过 RISC-V 的小型操作系统。
      </Content>
      <Content colorScheme={colorScheme}>
        4. 熟练运用 Linux 命令行和 Shell 脚本操作，将 GNU/Linux 作为主要的生产环境进行日常开发活动，熟练使用 Vim、Git、Makefile 等各种 Cli 工具，具备在 Linux 平台开发 Python、C 的能力。
      </Content>
      <Content colorScheme={colorScheme}>
        5. 具备跨平台编程语言的广泛知识，包括C、C++、Java 及 Python。
      </Content>
      <Content colorScheme={colorScheme}>
        6. 能够高效地进行多语言编程，适应不同技术栈的项目需求。
      </Content>
      <Content colorScheme={colorScheme}>
        7. 具有深厚的系统编程背景，能够在资源受限的环境中优化性能和稳定性。
      </Content>
      <Spacer colorScheme={colorScheme} />

      <Title colorScheme={colorScheme}>
        专业技能
      </Title>
      <Content colorScheme={colorScheme}>
        1. Kotlin： Android 开发与 Kotlin Multiplatform 开发，熟练使用 MVVM 架构进行 App 开发。
      </Content>
      <Content colorScheme={colorScheme}>
        2. TypeScript：React Native 开发，熟练使用 MVVM 架构进行跨平台 App 开发。
      </Content>
      <Content colorScheme={colorScheme}>
        3. Python、Shell：作为脚本使用，在 GNU/Linux 命令行环境开发，熟练使用 Vim 等 Cli 工具。
      </Content>
      <Content colorScheme={colorScheme}>
        4. Rust：底层操作系统开发，目前已经实现了 RISC-V64 操作系统。
      </Content>
      <Spacer colorScheme={colorScheme} />

      <Title colorScheme={colorScheme}>
        联系方式
      </Title>
      <Content colorScheme={colorScheme}>
        - Email: shetty@shettydev.com
      </Content>
      <Content colorScheme={colorScheme}>
        - Email: shetty.yttehs@outlook.com
      </Content>
      <Spacer colorScheme={colorScheme} />
    </View>
  );
}

function Title({ colorScheme, children }: ParentProps) {
  const { theme } = useMaterial3Theme();
  const fontColor = theme[colorScheme].onPrimaryContainer;

  return (
    <Text style={[styles.title, { color: fontColor }]}>{children}</Text>
  );
}

function Content({ colorScheme, children }: ParentProps) {
  const { theme } = useMaterial3Theme();
  const fontColor = theme[colorScheme].onSecondaryContainer;

  return (
    <Text style={[styles.content, { color: fontColor }]}>{children}</Text>
  );
}

function Spacer({ colorScheme }: Props) {
  const { theme } = useMaterial3Theme();
  const color = theme[colorScheme].onSurfaceVariant;

  return (
    <View style={styles.spacerContainer}>
      <View style={[styles.spacer, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 16,
  },
  content: {
    fontSize: 16,
    paddingLeft: 8,
  },
  spacerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  spacer: {
    width: "100%",
    height: 1,
  },
});
