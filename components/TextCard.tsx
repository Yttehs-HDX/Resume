import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet } from "react-native";
import Title from "./text-card-inner/Title";
import Content from "./text-card-inner/Content";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  title: string;
  content: string;
};

export default function Card({ theme, colorScheme, title, content }: Props) {
  const titleBackgroundColor = theme[colorScheme].primaryContainer;
  const contentBackgroundColor = theme[colorScheme].secondaryContainer;

  return (
    <View style={styles.container}>
      <View style={[styles.titleBackground, { backgroundColor: titleBackgroundColor }]}>
        <Title theme={theme} colorScheme={colorScheme} text={title} />
      </View>
      <View style={[styles.contentBackground, { backgroundColor: contentBackgroundColor }]}>
        <Content theme={theme} colorScheme={colorScheme} text={content} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleBackground: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  contentBackground: {
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 16,
  },
});
